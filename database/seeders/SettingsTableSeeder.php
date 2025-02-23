<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('settings')->delete();
        
        \DB::table('settings')->insert(array (
            0 => 
            array (
                'id' => 1,
                'group' => 'general',
                'name' => 'upper_value',
                'locked' => 0,
                'payload' => '4',
                'created_at' => '2025-02-08 21:05:26',
                'updated_at' => '2025-02-08 21:05:26',
            ),
        ));
        
        
    }
}