<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Traits\LoadAdmin;
use DB;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Lab404\Impersonate\Models\Impersonate;

class User extends Authenticatable implements FilamentUser
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory,LoadAdmin, Notifiable, Impersonate;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'oauth_id',
        'oauth_avatar',
        'oauth_platform',
        'is_new',
        'is_admin',
        'email_verified_at',
        'remember_token',
        'oauth_token',
        'last_login_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */

    protected $appends = [];

    protected static function booted()
    {
        static::deleting(function (User $user) {
            $user->profile()->delete();
        });
    }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_new' => 'boolean'
        ];
    }

    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class, 'user_id');
    }



    public function sent_messages(): HasMany
    {
        return $this->hasMany(ChatMessage::class, 'from_user_id');
    }

    public function received_messages(): HasMany
    {
        return $this->hasMany(ChatMessage::class, 'to_user_id');
    }

    public function isOnline()
    {
        $session = DB::table('sessions')->where('user_id', $this->id)->first();
        return $session && $session->last_activity > now()->subMinutes(5)->timestamp;
    }


}
