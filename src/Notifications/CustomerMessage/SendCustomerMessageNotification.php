<?php

namespace DaydreamLab\Cms\Notifications\CustomerMessage;

use DaydreamLab\User\Notifications\BaseNotification;
use Illuminate\Bus\Queueable;

class SendCustomerMessageNotification extends BaseNotification
{
    use Queueable;

    protected $category = 'CustomerMessage';

    protected $type = 'send';

    protected $view = 'emails.CustomerMessage.Send';

    protected $message;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($message, $creatorId = null)
    {
        parent::__construct($creatorId);
        $this->message = $message;
    }


    public function defaultSubject()
    {
        return '['. config('app.name') . ']已收到您的留言';
    }


    public function defaultMailContent()
    {
        return $this->content;
    }


    public function defaultSmsContent($channelType)
    {
        return $this->content;
    }



    public function getMailParams()
    {
        return [
            'content' => $this->content
        ];
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return parent::via($notifiable);
    }
}
