<?php

namespace DaydreamLab\Cms\Notifications\CustomerMessageReply;

use DaydreamLab\User\Notifications\BaseNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;

class ReplyCustomerMessageNotification extends BaseNotification
{
    use Queueable;

    protected $category = 'CustomerMessageReply';

    protected $type = 'reply';

    protected $view = 'emails.CustomerMessageReply.Reply';

    protected $reply;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($reply, $creatorId = null)
    {
        parent::__construct($creatorId);
        $this->reply = $reply;
    }


    public function defaultSubject()
    {
        return $this->reply->subject;
    }


    public function defaultMailContent()
    {
        return $this->reply->content;
    }


    public function defaultSmsContent($channelType)
    {
        return $this->reply->content;
    }



    public function getMailParams()
    {
        return [
            'subject' => $this->subject,
            'customerMessage' => $this->reply->message,
            'customerMessageReply' => $this->reply
        ];
    }



    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->cc(config('mail.from.address'))
            ->subject($this->defaultSubject())
            ->view($this->view, $this->getMailParams());
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
