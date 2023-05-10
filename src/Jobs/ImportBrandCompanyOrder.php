<?php

namespace DaydreamLab\Cms\Jobs;

use Carbon\Carbon;
use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\User\Models\Company\Company;
use DaydreamLab\User\Models\CompanyOrder\CompanyOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ImportBrandCompanyOrder implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    protected $filePath;

    protected $userId;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($filePath, $userId)
    {
        $this->queue = 'import-job';
        $this->filePath = $filePath;
        $this->userId = $userId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
        $reader->setReadDataOnly(true);
        $spreadsheet = $reader->load($this->filePath);
        $sheet = $spreadsheet->getSheet(0);
        $rows = $sheet->getHighestRow();

        $orderData = [];
        for ($i = 2; $i <= $rows; $i++) {
            $rowData = $this->getXlsxRowData($sheet, $i);
            $temp  = [
                'companyName' => $rowData[3],
                'brand' => $rowData[5],
                'date'  => $rowData[6]
            ];
            $orderData[] = $temp;
        }

        $companyOrderData = collect($orderData)->groupBy('companyName');
        foreach ($companyOrderData as $companyName => $orders) {
            $companies = Company::where('name', $companyName)->get();
            if (!$companies->count()) {
//                show('找不公司:' . $companyName);
            }
            if ($companies->count() > 1) {
//                show('有多間同名公司:' . $companyName, $companies->pluck('id'));
            }
            if ($companies->count() == 1) {
                $company = $companies->first();
                foreach ($orders as $order) {
                    $brand = Brand::where('title', $order['brand'])->first();
                    if (!$brand) {
                        # throw error
                    } else {
                        $date = Carbon::parse($order['date'] . '01', 'Asia/Taipei')
                            ->startOfDay()
                            ->tz('UTC')
                            ->toDateTimeString();
                        $companyOrder = CompanyOrder::where('brandId', $brand->id)
                            ->where('companyId', $company->id)
                            ->where('date', $date)
                            ->first();
                        if (!$companyOrder) {
                            CompanyOrder::create([
                                'brandId' => $brand->id,
                                'companyId' => $company->id,
                                'date'  => $date,
                                'userId' => $this->userId
                            ]);
                        }
                    }
                }
            }
        }
        // 刪除暫存檔
        unlink($this->filePath);
    }

    private function getXlsxRowData($sheet, $rowNum)
    {
        $data = [];

        for ($j = 'A'; $j <= 'G'; $j++) {

            $key = $j . $rowNum;
            $data[] = $sheet->getCell($key)->getValue();
        }

        return $data;
    }
}
