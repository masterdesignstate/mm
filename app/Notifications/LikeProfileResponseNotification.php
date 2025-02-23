<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;

class LikeProfileResponseNotification extends Notification
{
    public $message;
    public function __construct($message)
    {
        $this->message = $message;
    }

    public function via($notifiable): array
    {
        return ['database'];
    }

    public function toDatabase($notifiable): array
    {
        return $this->message;
    }

    public function toArray($notifiable): array
    {
        return [];
    }
}
