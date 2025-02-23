<?php

namespace App\Filament\Widgets;

use App\Models\Answer;
use App\Models\Profile;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class TotalProfilesOverTimeChart extends ChartWidget
{
    protected static ?string $heading = 'Total Profiles Over Time';
    protected static ?int $sort = 3;
//    protected int | string | array $columnSpan = 'full';

//    protected int | string | array $columnStart = 0;


    protected function getData(): array
    {
        $data = Trend::model(Profile::class)
            ->between(
                start: now()->startOfYear(),
                end: now()->endOfYear(),
            )
            ->perMonth()
            ->count();

        return [
            'datasets' => [
                [
                    'label' => 'Profiles over time',
                    'data' => $data->map(fn (TrendValue $value) => $value->aggregate),
                ],
            ],
            'labels' => $data->map(fn (TrendValue $value) => $value->date),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
