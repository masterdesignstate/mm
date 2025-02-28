<?php

namespace App\Livewire;

use App\Helpers\MatchAlgorithm;
use App\Http\Controllers\ProfileController;
use App\Models\Answer;
use App\Models\Profile;
use App\Settings\SystemSettings;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Tables\Columns\Summarizers\Summarizer;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;
use Illuminate\Database\Query\Builder;

use Livewire\Component;


class SelfTable extends Component implements HasTable, HasForms
{

    use InteractsWithForms, InteractsWithTable;

//    TODO: To Change Upper in Settings
    public $upper = 4;

    public $persons = [];
    public $totAdj = 1;
    public $totMax = 1;

    public $seek = null;
    public $self = null;


    public $individualMatch = 0;

    public function mount($self, $seek)
    {

        $this->self = $self;
        $this->seek = $seek;

        $me = Profile::find($self);
        $partner = Profile::find($seek);

        $this->upper = app(SystemSettings::class)->upper_value;
        $this->totAdj = MatchAlgorithm::v2TotalAdj($me, $partner);
        $this->totMax = MatchAlgorithm::v2TotalMax($me, $partner);
        $this->individualMatch = MatchAlgorithm::v2IndividualMatch($me, $partner);

        ray($this->totAdj,$this->totMax,$this->individualMatch);
    }

    public function getQuery()
    {
        return Answer::query()
            ->leftJoin("answers as seek", "answers.question_id", "=", "seek.question_id")
            ->where("answers.profile_id", $this->self)
            ->where("seek.profile_id", $this->seek)
//            ->whereNot('answers.question_id', 1)
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
                "q.question as qu",
                "q.*"
            );
    }

    public function self_seek_answer($answer)
    {
        return json_decode($answer->sf_answer)->seekAnswer;
    }

  public function seek_self_answer($answer)
    {
        return json_decode($answer->sk_answer)->selfAnswer;
    }

    public function table(Table $table): Table
    {

        return $table
            ->query(
                $this->getQuery()
            )
            ->columns([
//                TextColumn::make('Sr #')->rowIndex(),
                TextColumn::make('qu')->label('Question'),
                TextColumn::make('sf_answer')->label('P1->Seek Answer Value')
                    ->state(function ($record) {
                        return $this->self_seek_answer($record)->value;
                        //                        if (isset(json_decode($record->sf_answer)->seekAnswer->value)) {
//                            ray($record, json_decode($record->sf_answer));
//                            return json_decode($record?->sf_answer)?->seekAnswer?->value ?? 0;
//                        } else return;
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
                        $set = app(SystemSettings::class);

                        if(json_decode($record->sf_answer)->seekAnswer->value === 6 || json_decode($record->sk_answer)->selfAnswer->value === 6){
                           return $set->upper_value;
                       }
                       else if (isset(json_decode($record->sf_answer)->seekAnswer->value)) {
                            return abs((json_decode($record->sf_answer)?->seekAnswer?->value - json_decode($record->sk_answer)?->selfAnswer?->value));
                        } else return 0;
                    }),
                TextColumn::make('adj')->label('Adj')
                    ->state(function ($record) {
                        $value = MatchAlgorithm::v2SingleAdj($record);
                        return $value;
                    })
                    ->summarize([Summarizer::make()->label('Total Adj')
                        ->using(fn() => $this->totAdj)]),
                TextColumn::make('max')->label('Max')
                    ->state(function ($record) {
                        $value = MatchAlgorithm::v2SingleMax($record);
                        return $value;
                    })
                    ->summarize([Summarizer::make()->label('Total Max')
                    ->using(fn() => $this->totMax)]),
            ])
            ->paginated(false);
    }


    public function render()
    {
        return view('livewire.self-table');
    }

    public function rendered($view, $html)
    {

//        $result = round($this->totAdj / $this->totMax * 100);
//        ray($this->totAdj,$this->totMax);
//        $this->dispatch('result', data: [$result, $this->self]);

    }
}
