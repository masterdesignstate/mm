<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class TotalProfilesOverTimeChart extends ChartWidget
{
    protected static ?string $heading = 'Total Profiles Over Time';
    protected static ?int $sort = 3;
//    protected int | string | array $columnSpan = 'full';

//    protected int | string | array $columnStart = 0;


    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Profiles',
                    'data' => [0, 10, 5, 2, 21, 32, 45, 74, 65, 45, 77, 89],
                    'fill' => 'start',
                ],
            ],
            'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
