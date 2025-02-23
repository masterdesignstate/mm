<?php

namespace App\Models;

use App\Traits\InteractsWithLastMedia;
use Carbon\Carbon;
use DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Profile extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, InteractsWithLastMedia, Notifiable;


    static $tags = [
        'Like' => 'Like',
        'Maybe' => 'Maybe',
        'Save' => 'Save',
        'Later' => 'Later',
        'Hide' => 'Hide',
        'Pretty' => 'Pretty',
        'Cute' => 'Cute',
        'Hot' => 'Hot',
        'Group_1' => 'Group_1',
        'Group_2' => 'Group_2'
    ];
    protected $fillable = [
        'name',
        'uname',
        'date_of_birth',
        'zip',
        'gender',
        'commitment',
        'bio',
        'tag_line',
        'user_id',
    ];

    protected function casts(): array
    {
        return [
//            'age' => 'integer',
        ];
    }

    protected $appends = [
        'dp', 'last_login', 'age','gend','swiper'
    ];

    protected static function booted()
    {
        static::deleting(function ($profile) {
            $profile->media()->delete();
            $profile->user()->delete();
        });
    }


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class)->withDefault([]);
    }

    public function getAgeAttribute()
    {
        return Carbon::parse($this?->attributes['date_of_birth'])?->age;
    }

    public function getGendAttribute()
    {
        return $this->answers->where('question_id', 2)->first()?->answer["selfAnswer"]["value"] ?? "";
    }

    public function getDpAttribute(): string
    {
        $url = "";
        if ($this->getLastMediaUrl('dp') !== "") {
            $url = $this->getLastMediaUrl('dp');
        } else {
            $url = $this->avatarUrl();
        }
        return $url;
    }

    public function getGalleryAttribute()
    {
//        ray($this->getMedia('gallery'));
        return $this->getMedia('gallery')->map(function ($media) {
            return ["src" => $media->getUrl()];
        });
    }

    public function getSwiperAttribute()
    {
//        ray($this->getMedia('gallery'));
        $dp = $this->getMedia('dp');
        $gallery = $this->getMedia('gallery');

        // Merge both collections
        $mergedMedia = $dp->merge($gallery);

        return $mergedMedia->map(function ($media) {
            return ["src" => $media->getUrl()];
        });
    }

    public function avatarUrl(): string
    {

        return 'https://api.dicebear.com/7.x/initials/svg?seed=' . $this->uname;
    }

    public function getLastLoginAttribute(): string
    {
        $userLastActivity = DB::table('sessions')
            ->where('user_id', $this->user?->id)
            ->orderByDesc('last_activity')
            ->value('last_activity');

        return $userLastActivity
            ? Carbon::createFromTimestamp($userLastActivity)->diffForHumans()
            : 'Never logged in';

    }

    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class, 'profile_id');
    }

//    public function questions(): HasMany
//    {
//        return $this->hasMany(Question::class, 'profile_id');
//    }
    public function answersCount(): HasMany
    {
        return $this->hasMany(Answer::class, 'profile_id');
    }

    public function my_answers()
    {
        return $this->hasMany(Answer::class,)
            ->when(auth()->user()->profile, function ($query) {
                $query->where('profile_id', auth()->user()->profile->id);
            });
    }

    public function getAnswersCountAttribute()
    {
        return $this?->answersCount()?->count();
    }

    public function getRelationshipAttribute()
    {
        return $this->answers->where('question_id', 1)->first()?->answer["selfAnswer"] ?? ["value"];
    }


    public function like_from_current_user(): HasOne
    {
        return $this?->hasOne(ProfileResponse::class, 'profile_id')
            ?->where('from_id', auth()?->user()?->profile->id);
    }


    public static function canMessage($profile)
    {
        $meLikedThem = ProfileResponse::where('response', 'positive')
            ->where('from_id', auth()->user()->profile->id)
            ->where('profile_id', $profile->id)
            ->first();

        $theyLikedMe = ProfileResponse::where('response', 'positive')
            ->where('profile_id', auth()->user()->profile->id)
            ->where('from_id', $profile->id)
            ->first();


        if (isset($meLikedThem) && isset($theyLikedMe)) {
            return true;
        } else return false;
    }

}
