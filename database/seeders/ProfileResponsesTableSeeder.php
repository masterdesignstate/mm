<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProfileResponsesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('profile_responses')->delete();
        
        \DB::table('profile_responses')->insert(array (
            0 => 
            array (
                'id' => 11,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 1,
                'from_id' => 4,
                'response' => 'positive',
                'created_at' => '2025-02-09 02:07:37',
                'updated_at' => '2025-02-09 02:07:37',
            ),
            1 => 
            array (
                'id' => 12,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 5,
                'from_id' => 4,
                'response' => 'positive',
                'created_at' => '2025-02-09 02:07:45',
                'updated_at' => '2025-02-09 02:07:45',
            ),
            2 => 
            array (
                'id' => 14,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 3,
                'from_id' => 2,
                'response' => 'positive',
                'created_at' => '2025-02-09 02:25:05',
                'updated_at' => '2025-02-09 02:25:05',
            ),
            3 => 
            array (
                'id' => 15,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 4,
                'from_id' => 2,
                'response' => 'positive',
                'created_at' => '2025-02-09 02:25:06',
                'updated_at' => '2025-02-09 02:25:06',
            ),
            4 => 
            array (
                'id' => 16,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 5,
                'from_id' => 2,
                'response' => 'positive',
                'created_at' => '2025-02-09 02:25:07',
                'updated_at' => '2025-02-09 02:25:07',
            ),
            5 => 
            array (
                'id' => 17,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 5,
                'from_id' => 2,
                'response' => 'positive',
                'created_at' => '2025-02-09 02:25:13',
                'updated_at' => '2025-02-09 02:25:13',
            ),
            6 => 
            array (
                'id' => 18,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 2,
                'from_id' => 3,
                'response' => 'positive',
                'created_at' => '2025-02-09 02:25:36',
                'updated_at' => '2025-02-09 02:25:36',
            ),
            7 => 
            array (
                'id' => 19,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 4,
                'from_id' => 3,
                'response' => 'positive',
                'created_at' => '2025-02-09 02:25:41',
                'updated_at' => '2025-02-09 02:25:41',
            ),
            8 => 
            array (
                'id' => 29,
                'meta' => NULL,
                'tags' => '["Interest"]',
                'profile_id' => 3,
                'from_id' => 1,
                'response' => 'positive',
                'created_at' => '2025-02-09 03:47:09',
                'updated_at' => '2025-02-10 21:06:36',
            ),
            9 => 
            array (
                'id' => 32,
                'meta' => NULL,
                'tags' => '["Interest", "Look", "Required", "Trait"]',
                'profile_id' => 2,
                'from_id' => 1,
                'response' => 'positive',
                'created_at' => '2025-02-09 04:01:53',
                'updated_at' => '2025-02-10 21:05:51',
            ),
            10 => 
            array (
                'id' => 33,
                'meta' => NULL,
                'tags' => '["Interest", "Trait"]',
                'profile_id' => 4,
                'from_id' => 1,
                'response' => NULL,
                'created_at' => '2025-02-10 21:16:30',
                'updated_at' => '2025-02-10 21:16:30',
            ),
            11 => 
            array (
                'id' => 34,
                'meta' => NULL,
                'tags' => '["Interest", "Look"]',
                'profile_id' => 5,
                'from_id' => 1,
                'response' => NULL,
                'created_at' => '2025-02-10 21:16:43',
                'updated_at' => '2025-02-10 21:16:43',
            ),
            12 => 
            array (
                'id' => 35,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 5,
                'from_id' => 1,
                'response' => 'positive',
                'created_at' => '2025-02-10 21:16:47',
                'updated_at' => '2025-02-10 21:16:47',
            ),
            13 => 
            array (
                'id' => 36,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 5,
                'from_id' => 1,
                'response' => 'positive',
                'created_at' => '2025-02-10 21:17:07',
                'updated_at' => '2025-02-10 21:17:07',
            ),
            14 => 
            array (
                'id' => 38,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 5,
                'from_id' => 1,
                'response' => 'positive',
                'created_at' => '2025-02-10 21:17:21',
                'updated_at' => '2025-02-10 21:17:21',
            ),
            15 => 
            array (
                'id' => 39,
                'meta' => NULL,
                'tags' => '["Required"]',
                'profile_id' => 1,
                'from_id' => 2,
                'response' => 'positive',
                'created_at' => '2025-02-10 21:34:44',
                'updated_at' => '2025-02-10 21:40:56',
            ),
            16 => 
            array (
                'id' => 40,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 6,
                'from_id' => 1,
                'response' => 'positive',
                'created_at' => '2025-02-11 03:26:00',
                'updated_at' => '2025-02-11 03:26:00',
            ),
            17 => 
            array (
                'id' => 41,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 5,
                'from_id' => 1,
                'response' => 'positive',
                'created_at' => '2025-02-11 03:26:02',
                'updated_at' => '2025-02-11 03:26:02',
            ),
            18 => 
            array (
                'id' => 42,
                'meta' => NULL,
                'tags' => NULL,
                'profile_id' => 4,
                'from_id' => 1,
                'response' => 'positive',
                'created_at' => '2025-02-11 03:26:04',
                'updated_at' => '2025-02-11 03:26:04',
            ),
        ));
        
        
    }
}