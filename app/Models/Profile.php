<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'uname',
        'age',
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
            'age' => 'integer',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function avatarUrl()
    {

        return 'https://api.dicebear.com/7.x/initials/svg?seed=' . $this->name;
    }
    public function getAvatarAttribute(){
        ray($this->avatarUrl());
        return $this->avatarUrl();
    }
}
