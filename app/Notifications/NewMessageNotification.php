<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Notifications\Notification;

class NewMessageNotification extends Notification
{
    protected $message;
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
        $to_profile = User::find($this->message->to_user_id)->profile;
        $from_profile = User::find($this->message->from_user_id)->profile;
        return [
            'profile_id' => $to_profile->id,
            'from_profile_id' => $from_profile->id,
            'chat_message_id' => $this->message->id,
            'content' => $this->message->message,
            'from_name'=>$from_profile->name,
            'users'=>[
                'from'=>$from_profile->user,
                'to'=>$to_profile->user,
            ]
        ];
    }

    public function toArray($notifiable): array
    {
        return [];
    }
}
