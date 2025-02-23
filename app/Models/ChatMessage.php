<?php

namespace App\Models;

use App\Notifications\NewMessageNotification;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ChatMessage extends Model implements  HasMedia
{
    use InteractsWithMedia;
    protected $fillable = [
        'from_user_id',
        'to_user_id',
        'message',
        'meta',
        'room_id',
        'message_type'
    ];

    protected function casts(): array
    {
        return [
            'meta' => 'array',
            'from_user_id' => 'integer',
            'to_user_id' => 'integer',
        ];
    }

    protected $appends = [
        'human_time','chat_images'
    ];


    protected static function booted()
    {
        static::created(function ($chat_message) {
            ray($chat_message);
            $to_profile = User::find($chat_message->to_user_id)->profile;
            $from_profile = User::find($chat_message->from_user_id)->profile;

            $to_profile->notify(new NewMessageNotification($chat_message));

            //            $profile->media()->delete();
//            $profile->user()->delete();
        });
    }


    public function getHumanTimeAttribute()
    {
        return $this->created_at->isToday() ?
            $this->created_at->format('h:i:a') :
            $this->created_at->format('h:i:A M d,Y');
    }

    public function getChatImagesAttribute()
    {
        // Only append if media exists
        if ($this->hasMedia('chat_messages')) {
            return $this->getMedia('chat_messages')->map(fn($media) => $media->getUrl());
        }

        return null; // Or return an empty array `[]` if preferred
    }

}
