<?php

namespace DaydreamLab\Cms\Services\Setting\Admin;

use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;


class SettingAdminService extends SettingService
{
    protected $type = 'SettingAdmin';

    public function __construct(SiteAdminService $siteAdminService)
    {
        parent::__construct($siteAdminService);
    }


    public function getItem($locale = '')
    {
        $global = config('global');

        $this->status   = Str::upper(Str::snake($this->type.'GetItemSuccess'));
        $this->response = (object)$global;

        return $this->response;
    }


    public function store(Collection $input)
    {
        $config     = config('global');

        $file_str   = '<?php return [' . PHP_EOL;

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

        $result = File::put(config_path('global.php'), $file_str);


        if ($result)
        {
            $this->status = Str::upper(Str::snake($this->type.'UpdateSuccess'));
            $this->response = null;
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'UpdateFail'));
            $this->response = null;
        }

        return $result;
    }
}
