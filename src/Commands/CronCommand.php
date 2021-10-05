<?php

namespace DaydreamLab\Cms\Commands;

use Carbon\Carbon;
use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Cms\CmsCronJob;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Product\Product;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Console\Command;

class CronCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Publish up and down cron command';


    protected $cmsCronJobModel;

    protected $itemModel;

    protected $categoryModel;

    protected $productModel;
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->cmsCronJobModel  = new CmsCronJob();
        $this->itemModel        = new Item();
        $this->categoryModel    = new Category();
        $this->productModel     = new Product();
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $items = $this->cmsCronJobModel->all();
        $items->each(function ($item, $key){
           if ($item->table == 'items') {
               $model = $this->itemModel;
           } elseif ($item->table == 'categories') {
               $model = $this->categoryModel;
           } elseif ($item->table == 'products') {
               $model = $this->productModel;
           }

           if ($item->type == 'up') {
               if (Carbon::parse($item->time) < Carbon::now()) {
                   $up_item = $model->find($item->item_id);
                   if ($up_item) {
                       $up_item->state = 1;
                       $up_item->save();
                   }
                   $item->delete();
               }
           } else {
               if (Carbon::parse($item->time) < Carbon::now()) {
                   $down_item = $model->find($item->item_id);
                   if ($down_item) {
                       $down_item->state = 0;
                       $down_item->save();
                   }
                   $item->delete();
               }
           }
        });
    }
}
