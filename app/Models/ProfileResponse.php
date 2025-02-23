<?php

namespace App\Models;

use App\Notifications\LikeProfileResponseNotification;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProfileResponse extends Model
{
    protected $fillable = [
        'meta',
        'profile_id',
        'from_id',
        'response',
        'tags'
    ];

    protected $casts = [
        'meta' => 'array',
        'tags' => 'array',
    ];

    protected static function booted()
    {
        static::created(function ($profile_response) {
            ray($profile_response)->color('purple');

            if($profile_response->response == 'positive') {
            $profile = Profile::find($profile_response->profile_id);
                ray("Working")->color('purple');

                $message = [
                    'from_name'=>Profile::find($profile_response->from_id)->name,
                    'from_id'=>$profile_response->from_id,
                ];

                $profile->notify(new LikeProfileResponseNotification($message));

            }


        });
    }

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
    }

    public function from(): BelongsTo
    {
        return $this->belongsTo(Profile::class, 'from_id')->where('from_id',auth()->user()->profile->id);
    }

    protected function casts(): array
    {
        return [
            'meta' => 'array',
        ];
    }
}
