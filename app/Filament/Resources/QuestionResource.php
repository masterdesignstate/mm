<?php

namespace App\Filament\Resources;

use App\Filament\Resources\QuestionResource\Pages;
use App\Models\Question;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Support\Enums\Alignment;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class QuestionResource extends Resource
{
    protected static ?string $model = Question::class;

    protected static ?string $slug = 'questions';

    protected static ?string $navigationIcon = 'heroicon-o-question-mark-circle';

    protected static ?int $navigationSort = 4;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Textarea::make('question')
                    ->required()->columnSpanFull(),

                Grid::make(3)->schema([

                    Toggle::make('is_mandatory')->label('Is Mandatory ?'),

                    Toggle::make('meta.skip_self')->label('Skip Self ?'),

                    Toggle::make('meta.skip_seeking')->label('Skip Seeking ?'),
                ]),

                Repeater::make('answers')
                    ->schema(
                        [
                            TextInput::make('value')
                                ->integer()
                                ->minValue(1)
                                ->maxValue(5)
                                ->placeholder(
                                    fn() => "Enter Value"
                                ),
                            TextInput::make('answer')->placeholder(
                                fn() => "Enter Answer"
                            )->columnSpan(3),
                        ]
                    )
                    ->reorderable(false)
                    ->columns(4)
                    ->columnSpanFull()
                    ->defaultItems(3)
                    ->minItems(2)
                    ->maxItems(5),


                Select::make('tags')
                    ->options(Question::$tags)
                    ->columnSpanFull()
                    ->minItems(1)
                    ->maxItems(3)
                    ->multiple(),

                DateTimePicker::make('is_approved')->label('Is Approved ?')->native(false),
//                TextInput::make('is_approved')->label('Is Approved')->date,

                Placeholder::make('profile.name')
                    ->label('Created By Profile')
                    ->content(fn(?Question $record): string => $record?->profile?->name ?? 'N/A or Created By Admin'),

                Placeholder::make('created_at')
                    ->label('Created Date')
                    ->content(fn(?Question $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                Placeholder::make('updated_at')
                    ->label('Last Modified Date')
                    ->content(fn(?Question $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('id')
                    ->label('Sr #')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('question')
                    ->wrap()
                    ->width('800px')
                    ->searchable(),


                TextColumn::make('tags')
                    ->badge()
                    ->alignment(Alignment::Center)
                    ->toggleable(),

                IconColumn::make('is_mandatory')
                    ->boolean()
                    ->toggleable()
                    ->alignment(Alignment::Center)
                    ->label('Is Mandatory ?'),

                IconColumn::make('meta.skip_self')->label('Skip Self ?')
                    ->boolean()
                    ->toggleable()
                    ->toggledHiddenByDefault()
                    ->alignment(Alignment::Center),

                IconColumn::make('meta.skip_seeking')->label('Skip Seeking ?')
                    ->boolean()
                    ->toggleable()
                    ->toggledHiddenByDefault()
                    ->alignment(Alignment::Center),

                TextColumn::make('times_answered')
                    ->alignment(Alignment::Center)
                    ->toggleable()
                    ->sortable(query: function (Builder $query, string $direction) {
                        $query->withCount('my_answers')
                            ->orderBy('my_answers_count', $direction);
                    })
                    ->label('Times Answered'),

                TextColumn::make('is_approved')
                    ->date('M d, Y')
                    ->toggledHiddenByDefault()
                    ->toggleable(),

                TextColumn::make('created_at')
                    ->date('M d, Y')
                    ->toggledHiddenByDefault()
                    ->sortable()
                    ->toggleable(),

                TextColumn::make('profile.name')


            ])
            ->filters([
                SelectFilter::make('Tags')
                    ->options(Question::$tags)
                    ->multiple()
                    ->query(function (Builder $query, array $data) {
                        return $query->whereJsonContains('tags', $data['values']);
                    }),

                TernaryFilter::make('is_approved')
                    ->nullable(),
                TernaryFilter::make('is_mandatory')
                    ->nullable(),
                Filter::make('created_at')
                    ->form([
                        DatePicker::make('created_from')->label('Question Created From')
                            ->placeholder('Select Start Date')
                            ->native(false),
                        DatePicker::make('created_until')
                            ->placeholder('Select Until Date')
                            ->label('Question Created Until')->native(false),
                    ])->columns(2)
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['created_from'],
                                fn(Builder $query, $date): Builder => $query->whereDate('created_at', '>=', $date),
                            )
                            ->when(
                                $data['created_until'],
                                fn(Builder $query, $date): Builder => $query->whereDate('created_at', '<=', $date),
                            );
                    })->columnSpan(2)


            ], FiltersLayout::AboveContent)
            ->actions([
                EditAction::make()->iconButton(),
                DeleteAction::make()->iconButton(),
            ]);
    }


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListQuestions::route('/'),
            'create' => Pages\CreateQuestion::route('/create'),
            'edit' => Pages\EditQuestion::route('/{record}/edit'),
        ];
    }


    public static function getGloballySearchableAttributes(): array
    {
        return [];
    }
}
