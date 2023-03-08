<?php

namespace DaydreamLab\Cms\Commands\Feat\Curation;

use DaydreamLab\Cms\Models\Item\Item;
use Illuminate\Console\Command;

class CurationOrderingFixCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:feat-curation-ordering-fix';

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
        Item::all()
            ->groupBy('category_id')
            ->each(function ($groupItems) {
                $index = 1;
                $groupItems->each(function ($item) use (&$index) {
                    $item->ordering = $index++;
                    $item->timestamps = false;
                    $item->save();
                });

                $index = 1;
                $groupItems->where('featured', 1)->each(function ($item) use (&$index) {
                    $item->featured_ordering = $index++;
                    $item->timestamps = false;
                    $item->save();
                });
            });
    }
}
