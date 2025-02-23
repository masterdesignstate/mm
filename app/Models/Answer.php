<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Answer extends Model
{
    protected $fillable = [
        'profile_id',
        'question_id',
        'answer',
    ];

    protected $appends = [
//        'adj','max'
    ];
    protected function casts(): array
    {
        return [
            'answer' => 'array'
        ];
    }

    public function question(): BelongsTo
    {
        return $this->belongsTo(Question::class);
    }

    public function getSelfAnswerAttribute()
    {
//        ray($this->answer['selfAnswer']['value']);
        return $this?->answer['selfAnswer']['value'];

    }
    public function getSeekingAnswerAttribute()
    {
        return $this?->answer['seekAnswer']['value'];

    }

    public function getSeekMultiplierAttribute()
    {
        return $this?->answer['seekAnswer']['multiplier'];

    }
    public function getDeltaAttribute()
    {
        return max(($this->seeking_answer - $this->self_answer), 0);

    }

    public function getAdjAttribute()
    {
        return (4 - $this->delta) * $this->seek_multiplier;

    }
    public function getMaxAttribute()
    {
        return 4 * $this->seek_multiplier;

    }




}
