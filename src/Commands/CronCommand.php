<?php

namespace DaydreamLab\Cms\Commands;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Cms\CmsCronJob;
use DaydreamLab\Cms\Models\Item\Item;
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
           }
           elseif ($item->table == 'categories') {
               $model = $this->categoryModel;
           }

           if ($item->type == 'up') {
               if ($item->time < now()) {
                   $up_item = $model->find($item->item_id);
                   if ($up_item) {
                       $up_item->state = 1;
                       $up_item->save();
                   }
                   $item->delete();
               }
           }
           else {
               if ($item->time < now()) {
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
