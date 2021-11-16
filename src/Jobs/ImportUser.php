<?php

namespace DaydreamLab\Cms\Jobs;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\NewsletterSubscription\Front\NewsletterSubscriptionFrontService;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use DaydreamLab\User\Models\Company\Company;
use DaydreamLab\User\Models\User\User;
use DaydreamLab\User\Models\User\UserCompany;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use PhpOffice\PhpSpreadsheet\Reader\IReadFilter;

class ImportUser implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $filePath;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        $filePath
    )
    {
        $this->filePath = $filePath;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();

        $chunkSize = 1000;

        $chunkFilter = new Chunk();

        $reader->setReadFilter($chunkFilter);

        $reader->setReadDataOnly(true);

        for ($startRow = 2; $startRow <= 30459; $startRow += $chunkSize) {
            $chunkFilter->setRows($startRow, $chunkSize);
            $spreadsheet = $reader->load($this->filePath);
            $sheet = $spreadsheet->getSheetByName('會員資料');
            $rows = $sheet->getHighestRow();
            for ($i = $startRow; $i <= $rows; $i++) {
                $rowData = $this->getXlsxRowData($sheet, $i);
                try {
                    //創建獲取的資料
                    $company = $this->firstOrCreateCompany($rowData);
                    $user = $this->firstOrCreateUser($rowData);
                    $userCompany = $this->firstOrCreateuserCompany($rowData, $company, $user);
                } catch (\Throwable $e) {
                    $errorRow[] = $i;
                }
            }
            $spreadsheet->disconnectWorksheets();
            unset($spreadsheet);
        }
        Log::error('import user error:'. $errorRow);
        // 刪除暫存檔
        unlink($this->filePath);

    }

    private function firstOrCreateCompany($rowData)
    {
        $data = [
            'vat' => $rowData[4],
            'name' => $rowData[5],
            'category_id' => $rowData[2] == '經銷會員' ? 3 : 5// 如果是非經銷會員此公司指定成一般會員
        ];

        // 判斷是否需要創建compnay
        if ($rowData[4] != null) {
            $company = Company::where('vat', $rowData[4])->first();
            if ($company) {
                // 公司已存在 更新公司資訊
                $company->update($data);
            } else {
                // 公司不存在創建一間公司
                $company = Company::create($data);
            }
        } else {
            // 沒有統編的公司不創建 company
            return null;
        }

        return $company;
    }

    private function firstOrCreateUser($rowData)
    {
        $user = User::where('mobilePhone', $rowData[0])->first();
        $data = [
            'mobilePhone' => $rowData[0],
            'password' => bcrypt($rowData[1]),
            'name' => $rowData[3],
            'email' => $rowData[8],
            'activateToken' => 'importedUser',
        ];

        if ($user) {
            // 使用者存在更新使用者資訊
            $user->update($data);
        } else {
            // 使用者不存在創建一個使用者
            $data['uuid'] = (string) Str::uuid();
            $data['canDelete'] = 1;
            $data['activation'] = 0;
            $user = User::create($data);
        }

        $groups = [
            '一般會員' => 7,
            '經銷會員' => 6,
        ];

        $user->groups()->sync($groups[$rowData[2]]);

        // 電子報是否訂閱
        $nsfs = app(NewsletterSubscriptionFrontService::class);
        if ($rowData[16] == '是') {
            if ($rowData[2] == '一般會員') {
                $nsfs->store(collect(['newsletterCategoriesAlias' => ['01_newsletter'], 'email' => $user->email]), true);
            } else {
                $nsfs->store(collect(['newsletterCategoriesAlias' => ['01_newsletter', '01_deal_newsletter'], 'email' => $user->email]), true);
            }
        } else {
            $nsfs->store(collect(['newsletterCategoriesAlias' => [], 'email' => $user->email]), true);
        }

        return $user;
    }

    private function firstOrCreateUserCompany($rowData, $company, $user)
    {
        if ($company) {
            // 如果 company 已存在用 comapny 資料為主
            $rowData[4] = $company->vat;
            $rowData[5] = $company->name;
        }

        $data = [
            'user_id' => $user->id,
            'company_id' => @$company->id,
            'name' => $rowData[5],
            'vat' => $rowData[4],
            'phone' => $rowData[6],
            'extNumber' => $rowData[7],
            'email' => $rowData[8],
            'department' => $rowData[10],
            'jobTitle' => $rowData[11],
            'industry' => $rowData[12],
            'scale' => $rowData[13],
            'purchaseRole' => $rowData[14],
            'interestedIssue' => explode(',', $rowData[15])
        ];

        $userCompany = UserCompany::where('user_id', $user->id)->first();

        if ($userCompany) {
            $userCompany->update($data);
        } else {
            $userCompany = UserCompany::create($data);
        }

        return $userCompany;
    }


    private function getXlsxRowData($sheet, $rowNum)
    {
        $data = [];

        for($j = 'B'; $j <= 'R'; $j++) {
            $key = $j.$rowNum;
            $data[] = $sheet->getCell($key)->getValue();
        }

        return $data;
    }
}

class Chunk implements IReadFilter
{
    private $startRow = 0;

    private $endRow = 0;

    /**
     * Set the list of rows that we want to read.
     *
     * @param mixed $startRow
     * @param mixed $chunkSize
     */
    public function setRows($startRow, $chunkSize)
    {
        $this->startRow = $startRow;
        $this->endRow = $startRow + $chunkSize;
    }

    public function readCell($column, $row, $worksheetName = '')
    {
        //  Only read the heading row, and the rows that are configured in $this->_startRow and $this->_endRow
        if (($row == 1) || ($row >= $this->startRow && $row < $this->endRow)) {
            return true;
        }

        return false;
    }
}
