<?php

namespace DaydreamLab\Cms\Services\CustomerMessage\Front;

use DaydreamLab\Cms\Notifications\CustomerMessage\SendCustomerMessageNotification;
use DaydreamLab\Cms\Repositories\Brand\Front\BrandFrontRepository;
use DaydreamLab\Cms\Repositories\CustomerMessage\Front\CustomerMessageFrontRepository;
use DaydreamLab\Cms\Services\CustomerMessage\CustomerMessageService;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use DaydreamLab\User\Traits\CanSendNotification;
use Illuminate\Support\Collection;

class CustomerMessageFrontService extends CustomerMessageService
{
    use CanSendNotification;

    protected $brandFrontRepository;

    public function __construct(CustomerMessageFrontRepository $repo,
                                BrandFrontRepository$brandFrontRepository)
    {
        parent::__construct($repo);
        $this->repo = $repo;
        $this->brandFrontRepository = $brandFrontRepository;
    }


    public function add(Collection $input)
    {
        $brand = $this->brandFrontRepository->findBy('alias', '=', $input->get('brandAlias'))->first();
        if (!$brand) {
            throw new NotFoundException('ItemNotExist', null, null, 'Brand');
        }
        $input->put('brand_id', $brand->id);

        $message = parent::add($input);

        $this->sendNotification(
            'mail',
            $message->email,
            new SendCustomerMessageNotification($message)
        );

        return $message;
    }
}
