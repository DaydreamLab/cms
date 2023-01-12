<?php

namespace DaydreamLab\Cms\Commands\Fix;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use DaydreamLab\User\Models\User\User;
use DaydreamLab\Cms\Services\NewsletterSubscription\NewsletterSubscriptionService;

class FixUserGroupAdnSubscriptionCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:fix-usergroup-subscription';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '修正重複的會員群組與訂閱重複的問題';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        DB::table('newsletter_subscriptions')
            ->select(['id', 'user_id'])
            ->get()
            ->groupBy('user_id')
            ->each(function ($g) {
                if ($g->count() > 1) {
                    $g->shift();
                    DB::table('newsletter_subscriptions')
                        ->whereIn('id', $g->pluck('id')->all())
                        ->delete();
                }
            });

        DB::table('users_groups_maps')
            ->select(['id', 'user_id'])
            ->get()
            ->groupBy('user_id')
            ->each(function ($g) {
                if ($g->count() > 1) {
                    $g->shift();
                    DB::table('users_groups_maps')
                        ->whereIn('id', $g->pluck('id')->all())
                        ->delete();
                }
            });

        $userIds = DB::table('users')
            ->select('id')
            ->whereIn('id', function ($q) {
                $q->select('user_id')
                    ->from('users_groups_maps')
                    ->where('group_id', 6);
            })
            ->get()
            ->pluck('id')
            ->all();

        $users = User::with([
            'company',
            'company.company',
            'company.company.category',
            'newsletterSubscription',
            'newsletterSubscription.newsletterCategories',
        ])
            ->whereIn('id', function ($q) use ($userIds) {
                $q->select('user_id')
                    ->from('newsletter_subscriptions')
                    ->leftJoin(
                        'newsletter_subscription_newsletter_category_maps',
                        'newsletter_subscriptions.id',
                        'newsletter_subscription_newsletter_category_maps.subscription_id'
                    )
                    ->whereIn('newsletter_subscriptions.user_id', $userIds)
                    ->where('newsletter_subscription_newsletter_category_maps.category_id', 35);
            })->get();


        foreach ($users as $user) {
            $sub = $user->newsletterSubscription;
            $sub->newsletterCategories()->sync(36);
            if ($user->company && $user->company->company && $user->company->company->category == '零壹員工') {
                # do nothing
            } else {
                app(NewsletterSubscriptionService::class)
                    ->edmAddSubscription($sub->email, config('app.env') == 'production' ? 9 : 7);
                app(NewsletterSubscriptionService::class)
                    ->edmRemoveSubscription($sub->email, config('app.env') == 'production' ? 8 : 6);
            }
        }
    }
}
