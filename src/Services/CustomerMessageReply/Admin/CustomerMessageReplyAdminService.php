<?php

namespace DaydreamLab\Cms\Services\CustomerMessageReply\Admin;

use DaydreamLab\Cms\Notifications\CustomerMessageReply\ReplyCustomerMessageNotification;
use DaydreamLab\Cms\Repositories\CustomerMessage\Admin\CustomerMessageAdminRepository;
use DaydreamLab\Cms\Repositories\CustomerMessageReply\Admin\CustomerMessageReplyAdminRepository;
use DaydreamLab\Cms\Services\CustomerMessageReply\CustomerMessageReplyService;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use DaydreamLab\User\Traits\CanSendNotification;
use Illuminate\Support\Collection;

class CustomerMessageReplyAdminService extends CustomerMessageReplyService
{
    use LoggedIn, CanSendNotification;

    protected $customerMessageAdminRepository;

    public function __construct(CustomerMessageReplyAdminRepository $repo,
                                CustomerMessageAdminRepository $customerMessageAdminRepository)
    {
        parent::__construct($repo);
        $this->repo = $repo;
        $this->customerMessageAdminRepository = $customerMessageAdminRepository;
    }


    public function add(Collection $input)
    {
        $message = $this->customerMessageAdminRepository->find(collect(['id' => $input->get('messageId')]));
        if (!$message) {
            throw new NotFoundException('ItemNotExist');
        }

        $reply = parent::add($input);
/*
        foreach ($input->get('channels') as $channel) {
            if ($channel == 'mail') {
                $to = $message->backupEmail
                    ? [$message->email, $message->backupEmail]
                    : [$message->backupEmail];
            } else {
                $to = $message->mobilePhoneCode . '-' . $message->mobilePhone;
            }
            $this->sendNotification(
                $channel,
                $to,
                new ReplyCustomerMessageNotification(
                    $message,
                    $input->get('subject'),
                    $input->get('content'),
                    $this->getUser()->id
                )
            );
        }
*/
        return $this->response;
    }
}
