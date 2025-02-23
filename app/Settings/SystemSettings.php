<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class SystemSettings extends Settings
{

    public int $upper_value =4;
    public float $all_value =1;

    public static function group(): string
    {
        return 'general';
    }
}
