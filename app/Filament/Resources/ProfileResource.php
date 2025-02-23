<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProfileResource\Pages;
use App\Models\Answer;
use App\Models\Profile;
use App\Models\User;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class ProfileResource extends Resource
{
    protected static ?string $model = Profile::class;

    protected static ?string $slug = 'profiles';

    protected static ?int $navigationSort = 2;

    protected static ?string $navigationIcon = 'heroicon-o-user';

    public static function getNavigationBadge(): ?string
    {
        return Profile::where('is_new', true)->count() ?: null;
    }


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required(),

                TextInput::make('uname'),

                Checkbox::make('age'),

                TextInput::make('zip'),


                TextInput::make('commitment'),

                TextInput::make('bio'),

                TextInput::make('tag_line'),

                Placeholder::make('created_at')
                    ->label('Created Date')
                    ->content(fn(?Profile $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                Placeholder::make('updated_at')
                    ->label('Last Modified Date')
                    ->content(fn(?Profile $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->getStateUsing(fn($record) => $record->id)
                    ->hidden(),
                ImageColumn::make('dp')->circular(),
                TextColumn::make('created_at')->date('M d, Y')
                    ->label('Creation Date')
                    ->toggleable()
                    ->sortable(),

                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('uname')->sortable()->toggledHiddenByDefault()->toggleable(),

                TextColumn::make('age')->sortable(query: function (Builder $query, string $direction) {
                    $query->orderByRaw("TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) $direction");
                })->formatStateUsing(fn($record) => $record->age . ' years'),

                TextColumn::make('gender')
                    ->label('Gender')
                    ->sortable(),

                TextColumn::make('zip')->sortable()->searchable(),

                TextColumn::make('commitment')
                    ->label('Relationship')
                    ->sortable(),


                TextColumn::make('answers_count')->sortable(query: function (Builder $query, string $direction) {
                    $query->withCount('my_answers')
                        ->orderBy('my_answers_count', $direction);
                })
                    ->label('Answers'),

                TextColumn::make('tag_line')
                    ->toggledHiddenByDefault()->toggleable(),

            ])
            ->filters([
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

    public static function canCreate(): bool
    {
        return false;
    }

    public static function canEdit(Model $record): bool
    {
        return false;
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProfiles::route('/'),
            'create' => Pages\CreateProfile::route('/create'),
            'edit' => Pages\EditProfile::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name'];
    }
}
