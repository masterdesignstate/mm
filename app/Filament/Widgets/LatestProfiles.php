<?php

namespace App\Filament\Widgets;

use App\Models\Profile;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestProfiles extends BaseWidget
{
    protected static ?int $sort = 4;
    protected int|string|array $columnSpan = 2;

    public function table(Table $table): Table
    {
        return $table
            ->query(Profile::query())
            ->columns([
                Tables\Columns\TextColumn::make('created_at')
                    ->date('M d, Y')
                    ->label('Profile Creation Date')
                    ->sortable(),
                Tables\Columns\TextColumn::make('name')
                    ->label('Display Name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('uname')
                    ->prefix('@')
                    ->label('User Handle')
                    ->sortable(),
                Tables\Columns\TextColumn::make('gender')
                    ->label('Gender')
                    ->sortable(),
                Tables\Columns\TextColumn::make('zip')
                    ->label('Location')
                    ->searchable()
                    ->sortable(),
//                Tables\Columns\TextColumn::make('country')
            ])->defaultSort('created_at','desc');
    }
}
