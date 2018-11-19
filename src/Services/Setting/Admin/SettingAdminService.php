<?php

namespace DaydreamLab\Cms\Services\Setting\Admin;

use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;


class SettingAdminService extends SettingService
{
    protected $type = 'SettingAdmin';

    protected $languageService;


    public function __construct(LanguageAdminService $languageService)
    {
        parent::__construct($languageService);
    }


    public function getItem()
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
            $file_str .= '\'' . $key . '\' => ' .  '\'' . $input->{$key} . '\', '. PHP_EOL;
        }

        $file_str .= '];';

        $result = File::put(config_path('global.php'), $file_str);


        if ($result)
        {
            $this->status = Str::upper(Str::snake($this->type.'StoreSuccess'));
            $this->response = null;
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'StoreFail'));
            $this->response = null;
        }
    }
}
