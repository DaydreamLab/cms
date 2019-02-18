<?php


namespace DaydreamLab\Cms\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class FormUserNotification extends Notification implements ShouldQueue
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
        $template = config('cms.form.email.template.user');

        return $template === 'default'
            ? (new MailMessage)
                ->subject('親愛的客戶您好，已收到你的聯絡表單')
                ->line('感謝您的寶貴意見，我們已經收到你的需求，會盡快回覆或聯繫您！')
            : (new MailMessage)
                ->subject('「使用者」使用者有來信喔')
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
