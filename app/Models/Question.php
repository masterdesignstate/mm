<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Question extends Model
{
    use HasFactory;

    static $tags = [
//        'Required' => 'Required',
        'Value' => 'Value',
        'Look' => 'Look',
        'Trait' => 'Trait',
        'Hobby' => 'Hobby',
        'Interest' => 'Interest',
        'Lifestyle' => 'Lifestyle',
        'Misc' => 'Misc',
        'Type_A' => 'Type_A',
        'Type_B' => 'Type_B'
    ];

    protected $fillable = [
        'question',
        'answers',
        'profile_id',
        'tags',
        'meta',
        'is_approved', 'is_mandatory', 'question_number'
    ];

    protected function casts(): array
    {
        return [
            'tags' => 'array',
            'meta' => 'array',
            'answers' => 'array',
        ];
    }

    protected $appends = [
        'human_date'
    ];

    // Getter method for the status options
    public static function getTagsOptions(): array
    {
        ray(Question::$tags);
        return Question::$tags;
    }

    public function getHumanDateAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function answer(): HasOne
    {
        return $this->hasOne(Answer::class, 'question_id')
            ->when(auth()->user()->profile, function ($query) {
                $query->where('profile_id', auth()->user()->profile->id);
            });
    }

    public function answers()
    {
        return $this->hasMany(Answer::class, 'question_id');
    }

    public function my_answers()
    {
        return $this->hasMany(Answer::class, 'question_id',)
            ->when(auth()->user()->profile, function ($query) {
                $query->where('profile_id', auth()->user()->profile->id);
            });
    }

    public function getTimesAnsweredAttribute()
    {
        return count($this->answers()->get());
    }

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
    }
}

