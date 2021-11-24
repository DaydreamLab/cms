<?php

namespace DaydreamLab\Cms\Notifications\CustomerMessage;

use DaydreamLab\User\Notifications\BaseNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;

class SendCustomerMessageNotification extends BaseNotification
{
    use Queueable;

    protected $category = 'CustomerMessage';

    protected $type = 'send';

    protected $view = 'emails.CustomerMessage.New';

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
        return '感謝您的留言，我們會儘速回覆您，謝謝。';
    }


    public function defaultSmsContent($channelType)
    {
        return $this->content;
    }



    public function getMailParams()
    {
        return [
            'customerMessage'   => $this->message,
            'subject'   => $this->defaultSubject(),
            'content'   => $this->defaultMailContent()
        ];
    }


    public function toMail($notifiable)
    {
        return (new MailMessage)
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
