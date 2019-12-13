<?php

namespace DaydreamLab\Cms\Notifications;

use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class FormAdminNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $input;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($input)
    {
        $this->input = $input;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $template = config('daydreamlab.cms.form.email.template.admin');

        return $template == 'default'
            ? (new MailMessage)
                ->subject('「管理者」網站收到使用者的聯繫表單！')
                ->line('有收到使用者表單，請到網站後台確認內容')
            : (new MailMessage)
                ->subject('「管理者」網站收到使用者的聯繫表單！')
                ->view($template, ['data'=> $this->input]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
