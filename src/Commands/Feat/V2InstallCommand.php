<?php

namespace DaydreamLab\Cms\Commands\Feat;

use DaydreamLab\Cms\Models\NewsletterSubscription\NewsletterSubscription;
use DaydreamLab\User\Helpers\EnumHelper;
use Illuminate\Console\Command;

class V2InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:v2-install';

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
        $subscriptions = NewsletterSubscription::with('newsletterCategories')->get();
        foreach ($subscriptions as $subscription) {
            if (!$subscription->newsletterCategories->count()) {
                $subscription->cancelAt = $subscription->updated_at ?: now()->toDateTimeString();
                $subscription->cancelReason = EnumHelper::SUBSCRIBE_SELF_CANCEL;
                $subscription->timestamps = false;
                $subscription->save();
            };
        }
    }
}
