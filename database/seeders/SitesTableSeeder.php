<?php
namespace DaydreamLab\Cms\Database\Seeders;

use Illuminate\Database\Seeder;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\Cms\Repositories\Site\Admin\SiteAdminRepository;
use DaydreamLab\Cms\Models\Site\Admin\SiteAdmin;
use DaydreamLab\JJAJ\Helpers\Helper;

class SitesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $service = new SiteAdminService(new SiteAdminRepository(new SiteAdmin()));

        $service->store(Helper::collect([
            'title'         => '全站設定',
            'url'           => str_replace('http://', '',str_replace('https://', '', env('APP_URL'))),
            'sitename'      => '企業IT解決方案首選代理商 | 零壹科技 Zero One Tech.',
            'sef'           => 'zh-TW',
            'metakeywords'  => '',
            'params'        => [
                'seo_title' => '企業IT解決方案首選代理商 | 零壹科技 Zero One Tech.',
                'seo_keyword' => '系統管理, 資訊安全, 網路設備, 儲存, 備份備援, 虛擬化, 視訊監控, 雲端服務, 大數據與人工智慧, Aimetis, Akamai, AXIS, Carbonite(Double-Take), CISCO, F5, FireEye, Gemalto-SafeNet, Ipswitch, ixia, Microsoft, NetApp, Nutanix, NVIDIA, ORing, PaloAlto Networks, QNAP, Splunk, Symantec, Synology, Tintri, Trend Micro, TrustView, Veeam, Veritas, VIVOTEK, VMware',
                'seo_description' => '零壹科技專注於企業資訊設備代理與銷售通路建立，提供系統管理、資訊安全、網路設備、儲存、備份備援、虛擬化、視訊監控、雲端服務、大數據與人工智慧等軟/硬體解決方案。以「專業服務、邁向卓越」為指標，致力成為企業解決方案首選代理商。',
                'fb_fanpage_id' => '485528961457510qeqeqw',
                'ga' => 'UA-2133',
            ],
            'access'        => 1
        ]));
    }

}
