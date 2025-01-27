<?php

namespace App\Filament\Resources;

use App\Filament\Resources\QuestionResource\Pages;
use App\Models\Question;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class QuestionResource extends Resource
{
    protected static ?string $model = Question::class;

    protected static ?string $slug = 'questions';

    protected static ?string $navigationIcon = 'heroicon-o-question-mark-circle';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Textarea::make('question')
                    ->required()->columnSpanFull(),

                TextInput::make('descriptor1')->required()->columnSpanFull(),

                TextInput::make('descriptor2')->columnSpanFull(),

                TextInput::make('descriptor3')->required()->columnSpanFull(),

                Select::make('tags')
                    ->options(Question::$tags)
                    ->columnSpanFull()
                    ->minItems(1)
                    ->maxItems(3)
                    ->multiple(),

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

                TextColumn::make('question_number')
                    ->label('Q#')
                    ->searchable(),

                TextColumn::make('question')
                    ->wrap()
                    ->width('800px')
                    ->searchable(),


                TextColumn::make('descriptor1')->toggleable(),

                TextColumn::make('descriptor2')->toggleable(),

                TextColumn::make('descriptor3')->toggleable(),


                TextColumn::make('tags')->toggleable(),

                ToggleColumn::make('is_mandatory')->label('Is Required ?'),

                TextColumn::make('times_answered')
                    ->label('Times Answered'),
                TextColumn::make('created_at')
                    ->date('M d, Y')
                ->toggledHiddenByDefault()
                ->toggleable()


            ])
            ->filters([
                //
            ])
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
