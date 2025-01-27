<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class QuestionsAnsweredPerMonthChart extends ChartWidget
{
    protected static ?int $sort = 2;
    protected static ?string $heading = 'Questions Answered per month';
//    protected int | string | array $columnSpan = 'full';

//    protected int | string | array $columnStart = 0;




    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Questions',
                    'data' => [0, 10, 5, 2, 21, 32, 45, 74, 65, 45, 77, 89],
                    'fill' => true,
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
