<?php

namespace App\Filament\Resources\QuestionResource\Pages;

use App\Filament\Resources\QuestionResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;

class CreateQuestion extends CreateRecord
{
    protected static string $resource = QuestionResource::class;

    protected function getHeaderActions(): array
    {
        return [

        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {

        return $data;
    }
}
