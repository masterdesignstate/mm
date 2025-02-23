<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Models\User;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Log;

class ListUsers extends ListRecords
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];

    }

    public function mount(): void
    {
        parent::mount(); // Call parent mount method

        // Your custom method to run when the page loads
        $this->runOnPageLoad();
    }

    private function runOnPageLoad(): void
    {
        // Example: Reset 'is_new' flag for all users
        User::where('is_new', true)->update(['is_new' => false]);

        // Example: Log an event
    }

}
