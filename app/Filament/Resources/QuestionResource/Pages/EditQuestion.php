<?php

namespace App\Filament\Resources\QuestionResource\Pages;

use App\Filament\Resources\QuestionResource;
use App\Models\Question;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditQuestion extends EditRecord
{
    protected static string $resource = QuestionResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
    protected function getHeaderActions(): array
    {
        $resource = $this->getResource();
        return [
            Action::make('Approve')
            ->action(function(Question $record) use ($resource) {
                $record->is_approved = now()->toDateTimeString();
                $record->save();
                return redirect()->to($this->getRedirectUrl());
            })->visible(fn ($record): bool => !$record->is_approved),
            DeleteAction::make(),
        ];
    }
}
