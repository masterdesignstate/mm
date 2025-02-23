<?php

namespace App\Filament\Widgets;

use App\Models\Profile;
use App\Models\ProfileResponse;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class TotalActiveProfilesStats extends BaseWidget
{
    protected static ?int $sort = 1;

//    protected int | string | array $columnSpan = [1,2];
//    protected int | string | array $columnStart = 0;


    protected function getStats(): array
    {

        $profilesActive = Profile::whereBetween('created_at', [now()->subDays(90), now()])
                            ->get()->count();
        $profilesCreated = Profile::whereBetween('created_at', [now()->subDays(30), now()])
                            ->get()->count();
        $profileResponse = ProfileResponse::where('response','positive')->count();

        return [
            Stat::make('Total Active Profiles', $profilesActive)
                ->description('0 increase')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->chart([2, 2])
                ->color('success'),
            Stat::make('New Registrations', $profilesCreated)
                ->description('0% decrease')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->chart([2, 2])
                ->color('danger'),

            Stat::make('New Matches Created', $profileResponse)
                ->description('0% increase')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->chart([2, 2, 2])
                ->color('success'),
        ];
    }
}
