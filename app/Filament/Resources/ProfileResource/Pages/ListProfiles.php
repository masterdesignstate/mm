<?php

namespace App\Filament\Resources\ProfileResource\Pages;

use App\Filament\Resources\ProfileResource;
use App\Models\Profile;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListProfiles extends ListRecords
{
    protected static string $resource = ProfileResource::class;

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
        Profile::where('is_new', true)->update(['is_new' => false]);

        // Example: Log an event
    }
}
