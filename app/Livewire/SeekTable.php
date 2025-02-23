<?php

namespace App\Livewire;

use App\Models\Answer;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Tables\Columns\Summarizers\Summarizer;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Table;
use Illuminate\Contracts\Database\Query\Builder;
use Livewire\Component;

class SeekTable extends Component
{
    use InteractsWithForms,InteractsWithTable;


    //    TODO: To Change Upper in Settings
    public $upper = 4;

    public $self = null;
    public $totAdj = 1;
    public $totMax = 1;

    public $seek = null;

    public function mount()
    {
        ray($this->totAdj,$this->totMax);
        $this->totAdj = $this->totalAdj();
        $this->totMax = $this->totalMax();
    }
    public function totalAdj()
    {
        $answers = Answer::query()
            ->leftJoin("answers as seek", "answers.question_id", "=", "seek.question_id")
            ->where("answers.profile_id", $this->self)
            ->where("seek.profile_id", $this->seek)
            ->leftJoin("questions as q", "answers.question_id", "=", "q.id")
            ->select(
                "answers.id",
                "answers.question_id as sf_question_id",
                "answers.profile_id as sf_profile_id",
                "answers.answer as sf_answer",
                "seek.id as sk_id",
                "seek.question_id as sk_question_id",
                "seek.profile_id as sk_profile_id",
                "seek.answer as sk_answer",
                "q.*"
            )->get();

        return $answers->reduce(function ($total, $answer) {
            $delta = max((json_decode($answer->sf_answer)?->seekAnswer?->value - json_decode($answer->sk_answer)?->selfAnswer?->value), 0);
            $multiplier = json_decode($answer->sf_answer)?->seekAnswer?->multiplier;
            $adj = ($this->upper - $delta) * $multiplier;
            return $total + $adj;
        }, 0);

    }

    public function totalMax()
    {
        $answers = Answer::query()
            ->leftJoin("answers as seek", "answers.question_id", "=", "seek.question_id")
            ->where("answers.profile_id", $this->self)
            ->where("seek.profile_id", $this->seek)
            ->leftJoin("questions as q", "answers.question_id", "=", "q.id")
            ->select(
                "answers.id",
                "answers.question_id as sf_question_id",
                "answers.profile_id as sf_profile_id",
                "answers.answer as sf_answer",
                "seek.id as sk_id",
                "seek.question_id as sk_question_id",
                "seek.profile_id as sk_profile_id",
                "seek.answer as sk_answer",
                "q.*"
            )->get();

        return $answers->reduce(function ($total, $answer) {
            $multiplier = json_decode($answer->sf_answer)?->seekAnswer?->multiplier;
            $mul = $this->upper * $multiplier;
            return $total + $mul;
        }, 0);

    }


    public function table(Table $table): Table
    {
        return $table
            ->query(
                Answer::query()
                    ->leftJoin("answers as seek", "answers.question_id", "=", "seek.question_id")
                    ->where("answers.profile_id", $this->self)
                    ->where("seek.profile_id", $this->seek)
                    ->leftJoin("questions as q", "answers.question_id", "=", "q.id")
                    ->select(
                        "answers.id",
                        "answers.question_id as sf_question_id",
                        "answers.profile_id as sf_profile_id",
                        "answers.answer as sf_answer",
                        "seek.id as sk_id",
                        "seek.question_id as sk_question_id",
                        "seek.profile_id as sk_profile_id",
                        "seek.answer as sk_answer",
                        "q.question as qu"
                    )
            )
            ->columns([
//                TextColumn::make('Sr #')->rowIndex(),
                TextColumn::make('qu')->label('Question'),
                TextColumn::make('sf_answer')->label('P1->Seek Answer Value')
                    ->state(function ($record) {
                        return json_decode($record->sf_answer)?->seekAnswer?->value;
                    }),
                TextColumn::make('sk_answer')->label('P2->Self Answer Value')
                    ->state(function ($record) {
                        return json_decode($record->sk_answer)?->selfAnswer?->value;
                    }),
                TextColumn::make('multiplier')->label('P1->Seek Multiplier')
                    ->state(function ($record) {
                        return json_decode($record->sf_answer)?->seekAnswer?->multiplier;
                    }),
                TextColumn::make('delta')->label('Delta')
                    ->state(function ($record) {
                        return max((json_decode($record->sf_answer)?->seekAnswer?->value - json_decode($record->sk_answer)?->selfAnswer?->value), 0);
                    }),
                TextColumn::make('adj')->label('Adj')
                    ->state(function ($record) {
                        $delta = max((json_decode($record->sf_answer)?->seekAnswer?->value - json_decode($record->sk_answer)?->selfAnswer?->value), 0);
                        $multiplier = json_decode($record->sf_answer)?->seekAnswer?->multiplier;
                        return ($this->upper - $delta) * $multiplier;
                    })
                    ->summarize([Summarizer::make()->using(fn() => $this->totalAdj())]),
                TextColumn::make('max')->label('Max')
                    ->state(function ($record) {
                        $multiplier = json_decode($record->sf_answer)?->seekAnswer?->multiplier;
                        return $this->upper * $multiplier;
                    })
                    ->summarize([Summarizer::make()->using(fn() => $this->totalMax())]),
            ])
            ->paginated(false)
            ->filters([])
            ->actions([])
            ->bulkActions([]);
    }


    public function render()
    {
        return view('livewire.seek-table');
    }
}
