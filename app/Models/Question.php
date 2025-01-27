<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Question extends Model
{
    use HasFactory;

    static $tags = [
        'Required'=>'Required',
        'Value'=>'Value',
        'Look'=>'Look',
        'Trait'=>'Trait',
        'Hobby'=>'Hobby',
        'Interest'=>'Interest',
        'Lifestyle'=>'Lifestyle',
        'Misc'=>'Misc',
        'Type_A'=>'Type_A',
        'Type_B'=>'Type_B'];

    protected $fillable = [
        'question',
        'descriptor1',
        'descriptor2',
        'descriptor3',
        'profile_id',
        'tags',
        'meta',
    ];

    protected function casts(): array
    {
        return [
            'tags' => 'array',
            'meta' => 'array',
        ];
    }

    protected $appends = [
        'human_date'
    ];

    public function getHumanDateAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function answer(): HasOne
    {
        return $this->hasOne(Answer::class, 'question_id')->where('profile_id',auth()->user()->profile->id);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class, 'question_id');
    }

    public function getTimesAnsweredAttribute()
    {
        return count($this->answers()->get());
    }
}

