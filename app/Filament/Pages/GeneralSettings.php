<?php

namespace App\Filament\Pages;

use App\Settings\SystemSettings;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\SettingsPage;

class GeneralSettings extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static string $settings = SystemSettings::class;

    protected static ?int $navigationSort = 10;

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('upper_value')
                    ->label('Upper U Value')
                    ->integer()
                    ->minValue(1)
                    ->maxValue(10)
                    ->required(),
                TextInput::make('all_value')
                    ->label('All Value')
                    ->numeric()
                    ->step('0.1')
                    ->minValue(0.0)
                    ->maxValue(1.0)
                    ->required(),

            ]);
    }
}
