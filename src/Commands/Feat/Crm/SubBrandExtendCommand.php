<?php

namespace DaydreamLab\Cms\Commands\Feat\Crm;

use DaydreamLab\Cms\Models\Brand\Brand;
use Illuminate\Console\Command;

class SubBrandExtendCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:sub-brand-extend';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('擴展品牌的子品牌中...');
        Brand::all()
            ->each(function ($brand) {
                $params = $brand->params;
                $params['subBrands'] = [];
                $brand->params = $params;
                $brand->save();
            });
        $this->info('擴展品牌的子品牌完成');
    }
}
