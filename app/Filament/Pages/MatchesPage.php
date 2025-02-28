<?php

namespace App\Filament\Pages;

use App\Helpers\MatchAlgorithm;
use App\Models\Answer;
use App\Models\Profile;
use App\Models\Question;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Pages\Page;
use Filament\Tables\Columns\Summarizers\Sum;
use Filament\Tables\Columns\Summarizers\Summarizer;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Contracts\View\View;

use Livewire\Attributes\On;

class MatchesPage extends Page implements HasForms, HasTable
{
    use InteractsWithForms, InteractsWithTable;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static string $view = 'filament.pages.matches';

    protected static ?string $navigationLabel = "Calculation";

    protected static ?string $title = "Calculation";
    protected static ?int $navigationSort = 3;


    public $data = [];

    public $self;
    public $seek;

    public $persons1=[];
    public $persons2=[];

    public $isResetButton = false;

    public $selfTotalAdj = 0;
    public $selfTotalMax = 0;

    public $showSelfTable = false;

    public $result1;
    public $result2;

    public $final_result ;


    #[On('result')]
    public function getResults($data)
    {

        if($data[1]==$this->self->id){
            $this->result1 = $data[0];
        }else{
            $this->result2 = $data[0];
        }

//        $this->final_result = round(pow(($this->result1 * $this->result2), 0.5));

        $self = Profile::find($this->self);
        $seek = Profile::find($this->seek);

        ray($self,$seek);



        $this->final_result = MatchAlgorithm::v2MatchOverall($self,$seek);

    }

    public function form(Form $form): Form
    {
        return $form->schema([
            Grid::make([])->schema([
                Select::make('self')
                    ->options(Profile::pluck('name', 'id'))
//                    ->searchable()
                    ->label('Person 01')
                    ->after(fn () => $this->dispatch('refresh'))
                    ->required(),
                Select::make('seeking')
                    ->options(Profile::all()->pluck('name', 'id'))
//                    ->searchable()
                    ->after(fn () => $this->dispatch('refresh'))
                    ->required()
                    ->label('Person 02'),
            ])->columns(2),
        ])->statePath('data');
    }

    public function setEverything()
    {
        $this->self = Profile::find($this->data["self"]);
        $this->seek = Profile::find($this->data["seeking"]);

        $this->persons1 = [$this->self,$this->seek];
        $this->persons2 = [$this->seek,$this->self];
    }

    public function create()
    {
        $this->setEverything();
        $this->isResetButton = true;

//        $self = Profile::find($this->self)->first();
//        $seek = Profile::find($this->seek)->first();

        ray($this->self,$this->seek);
//        dd($this->self,$this->seek);

        $this->final_result = MatchAlgorithm::v2MatchOverall($this->self,$this->seek);


//        dd($this->data);
    }

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Answer::query()
                    ->when($this->self?->id, function (Builder $query) {
                        $query
                            ->where('profile_id', $this->self->id);
                    })
                    ->with('question')
            )
            ->columns([
                TextColumn::make('Sr #')->rowIndex(),
                TextColumn::make('question.question'),
                TextColumn::make('seeking_answer')->label('Seeking Answer Value'),
                TextColumn::make('seek_multiplier')->label('Seek Multiplier'),
                TextColumn::make('self_answer')->label('Self Answer Value'),
                TextColumn::make('delta')->label('Delta'),
                TextColumn::make('adj')->label('Adj')->summarize([Summarizer::make()->using(fn()=>$this->selfTotalAdj)]),
                TextColumn::make('max')->label('Max')->summarize([Summarizer::make()->using(fn()=>$this->selfTotalMax)]),
            ])

            ->paginated(false)
            ->filters([])
            ->actions([])
            ->bulkActions([]);
    }


}
