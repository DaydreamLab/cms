<?php

namespace DaydreamLab\Cms\Notifications\CustomerMessageReply;

use DaydreamLab\User\Notifications\BaseNotification;
use Illuminate\Bus\Queueable;

class ReplyCustomerMessageNotification extends BaseNotification
{
    use Queueable;

    protected $category = 'CustomerMessageReply';

    protected $type = 'reply';

    protected $view = 'emails.CustomerMessageReply.Reply';

    protected $message;

    protected $subject;

    protected $content;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($message, $subject, $content, $creatorId = null)
    {
        parent::__construct($creatorId);
        $this->message = $message;
        $this->subject = $subject;
        $this->content = $content;
    }


    public function defaultSubject()
    {
        return $this->subject;
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
