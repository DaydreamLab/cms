<?php

namespace DaydreamLab\Cms\Services\Setting\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;

class SettingAdminService extends SettingService
{
    public function __construct(SiteAdminService $siteAdminService)
    {
        parent::__construct($siteAdminService);
    }


    public function getItem($locale = '')
    {
        $global = config('daydreamlab.global');

        $this->status   = 'GetItemSuccess';
        $this->response = $global;

        return $this->response;
    }


    public function store(Collection $input)
    {
        $config = config('daydreamlab.global');
        $config = array_merge($config, $input->toArray());
        $tz = $this->user->timezone;
        $config['updated_at'] = Carbon::parse(now(), config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
        $config['updated_by'] = $this->user->name;

        $file_str = '<?php return [' . PHP_EOL;

        foreach ($config as $key => $value)
        {
            if ($input->has($key)) {
                $output = $input->get("{$key}");
            }
            else {
                $output = $config[$key];
            }

            $file_str .= '\'' . $key . '\' => ' .  '\'' . $output . '\', '. PHP_EOL;
        }

        $file_str .= '];';

        $result = File::put(config_path('daydreamlab/global.php'), $file_str);


        if ($result)
        {
            $this->status = 'UpdateSuccess';
            $this->response = null;
        }
        else
        {
            $this->status = 'UpdateFail';
            $this->response = null;
        }

        return $result;
    }
}
