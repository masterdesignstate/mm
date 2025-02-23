<?php

namespace App\Traits;

use Filament\Panel;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

trait LoadAdmin
{

    public function canAccessPanel(Panel $panel): bool
    {
        return $this->is_admin || str_ends_with($this->email, '@yt.co.kl');
    }

}
