<?php

namespace DaydreamLab\Cms\Services\NewsletterSubscription;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Repositories\NewsletterSubscription\NewsletterSubscriptionRepository;
use DaydreamLab\Cms\Services\CmsService;
use Illuminate\Support\Collection;

class NewsletterSubscriptionService extends CmsService
{
    protected $modelName = 'NewsletterSubscription';

    protected $omiLogin = 'Zerone01_BU5';
    protected $omiPass = 'Zer01bu5';
    protected $newsletterId = 6;
    protected $dealNewsletterId = 7;


    public function __construct(NewsletterSubscriptionRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
        if (in_array(config('app.env'), ['production', 'staging'])) {
            $this->omiLogin = 'Zerone01';
            $this->omiPass = 'Zerone01admin';
            $this->newsletterId = 8;
            $this->dealNewsletterId = 9;
        }
    }


    public function add(Collection $input)
    {
        $item = parent::add($input);

        //event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function featured(Collection $input)
    {
        $item = parent::featured($input);

        //event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function featuredOrdering(Collection $input)
    {
        $item = parent::featuredOrdering($input);

        //event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        //event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input)
    {
        $result = parent::ordering($input);

        //event(new Ordering($this->model_name, $result, $input, $orderingKey, $this->user));

        return $result;
    }


    public function orderingNested(Collection $input)
    {
        $result = parent::orderingNested($input);

        //event(new Ordering($this->model_name, $result, $input, $orderingKey, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::remove($input);

        //event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function restore(Collection $input)
    {
        $result = parent::restore($input);

        //event(new Checkout($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input)
    {
        $result = parent::state($input);

        //event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function edmProcessSubscription($email, $subscription)
    {
        $allCategories = Item::query()->whereHas('category', function ($q) {
                $q->where('content_type', 'newsletter_category');
        })->get()->pluck('alias');

        # 目前訂閱的
        $subCats = $subscription->newsletterCategories->pluck('alias');
        # 目前沒有訂閱的
        $unSubCats = $allCategories->diff($subCats);
        foreach ($subCats as $subCat) {
            if ($subCat == '01_deal_newsletter') {
                $newsletterId = $this->dealNewsletterId;
            } else {
                $newsletterId = $this->newsletterId;
            }
            $subscription->touch();
            $this->edmAddSubscription($email, $newsletterId);
        }

        foreach ($unSubCats as $unSubCat) {
            if ($unSubCat == '01_deal_newsletter') {
                $newsletterId = $this->dealNewsletterId;
            } else {
                $newsletterId = $this->newsletterId;
            }
            $subscription->touch();
            $this->edmRemoveSubscription($email, $newsletterId);
        }
    }


    public function edmAddSubscription($email, $id)
    {
        if (config('app.env') == 'local') {
            return;
        }
        $url = 'http://zcrm.itpison.com/WebAPI/Subscribe.aspx';
        return $this->processEdmSubscriptionApi($url, $email, $id);
    }


    public function edmRemoveSubscription($email, $id)
    {
        if (config('app.env') == 'local') {
            return;
        }
        $url = 'http://zcrm.itpison.com/WebAPI/UnSubscribe.aspx';

        return $this->processEdmSubscriptionApi($url, $email, $id);
    }


    protected function processEdmSubscriptionApi($url, $email, $id)
    {
        $postdata = array(
            'ManagerLoginName' => $this->omiLogin,
            'ManagerPassword' => $this->omiPass,
            'Option' => '1',
            'NewsLetterID' => $id,
            'EmailAddress' => $email
        );
        $opts = array( 'http' => array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($postdata)
        ) );
        $context = stream_context_create($opts);

        return file_get_contents($url, false, $context);
    }


    public function edmAddBlackList($email)
    {
        $url = 'http://zcrm.itpison.com/WebAPI/ListManager.aspx';
        $postdata = array(
            'ManagerLoginName' => $this->omiLogin,
            'ManagerPassword' => $this->omiPass,
            'Option' => '1',
            'ListName' => 'EmailSystemBlackList',
            'EmailAddress' => $email
        );
        $opts = array( 'http' => array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($postdata)
        ) );
        $context = stream_context_create($opts);

        return file_get_contents($url, false, $context);
    }
}
