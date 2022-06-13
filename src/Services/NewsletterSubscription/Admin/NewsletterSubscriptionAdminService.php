<?php

namespace DaydreamLab\Cms\Services\NewsletterSubscription\Admin;

use DaydreamLab\Cms\Repositories\NewsletterSubscription\Admin\NewsletterSubscriptionAdminRepository;
use DaydreamLab\Cms\Services\NewsletterSubscription\NewsletterSubscriptionService;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;

class NewsletterSubscriptionAdminService extends NewsletterSubscriptionService
{
    use LoggedIn;

    public function __construct(NewsletterSubscriptionAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $item->newsletterCategories()->attach($input->get('newsletterCategoryIds') ?: []);
    }


    public function modifyMapping($item, $input)
    {
        $item->newsletterCategories()->sync($input->get('newsletterCategoryIds') ?: [], true);
    }


    public function removeMapping($item)
    {
        $item->newsletterCategories()->detach();
    }


    public function export(Collection $input)
    {
        return $this->search($input);
        /*
        $search = $input->get('search');
        $input->forget('search');
        $input->put('limit', 0);
        $subscriptions = parent::search($input);

        if ($search) {
            $subscriptions = $subscriptions->filter(function ($s) use ($search) {
                return (strpos($s->email, $search) !== false)
                    || (strpos($s->companyName, $search) !== false)
                    || (strpos($s->userMobilePhone, $search) !== false)
                    || (strpos($s->userName, $search) !== false);
            })->values();
        }

        $spreedsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        $sheet = $spreedsheet->getActiveSheet();

        $headers = ['身份', '公司名稱', '姓名', 'E-mail', '聯絡電話', '訂閱類別'];
        $h = 1;
        foreach ($headers as $header) {
            $sheet->setCellValueByColumnAndRow($h, 1, $header);
            $h+=1;
        }

        $r = 2;
        foreach ($subscriptions as $subscription) {
            for ($i =1; $i<=count($headers); $i+=1) {
                switch ($i) {
                    case 1:
                        $v = $subscription->userGroupName;
                        break;
                    case 2:
                        $v = $subscription->companyName;
                        break;
                    case 3:
                        $v = $subscription->userName;
                        break;
                    case 4:
                        $v = $subscription->email;
                        break;
                    case 5:
                        $v = $subscription->userMobilePhone;
                        $sheet->getCellByColumnAndRow($i, $r);
                        break;
                    case 6:
                        $category = $subscription->newsletterCategories->map(function ($n) {
                        return $n->title;
                    });
                        $v = implode(',', $category->toArray());
                        break;
                    default:
                        $v = '';
                        break;
                }
                # 電話號碼也當成字串硬存
                $sheet->setCellValueExplicitByColumnAndRow($i, $r, $v, 's');
            }
            $r+=1;
        }

        $filename = 'subscription_export.xlsx';
        $writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreedsheet);
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment; filename="'. urlencode($filename).'"');
        ob_clean();
        $writer->save('php://output');
        */
    }
}
