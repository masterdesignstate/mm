<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'email_verified_at' => '2025-02-01 15:24:45',
                'password' => '$2y$12$WuWbST8rq.HbUuqPT83HHO3cqi.nNHcb49LmI.4RjJfgXAso1nWu2',
                'last_login_at' => NULL,
                'is_admin' => 1,
                'remember_token' => 'gl0kfIY276u6OqwVpL2Dh9CsDTQNK7FFeHOqqZ9X5I4YB2JRWqit7wNLk0db',
                'created_at' => '2025-02-01 15:24:45',
                'updated_at' => '2025-02-08 21:09:19',
                'oauth_id' => NULL,
                'oauth_avatar' => NULL,
                'oauth_token' => NULL,
                'oauth_platform' => NULL,
                'is_new' => 0,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Test',
                'email' => 'test@test.com',
                'email_verified_at' => '2025-02-01 15:24:46',
                'password' => '$2y$12$umDhdUn1CyJdhbqk6QJUV.KUaHfFa/8E9OETNtcjWGQAdrFzmDaE.',
                'last_login_at' => NULL,
                'is_admin' => 0,
                'remember_token' => 'I408v9izegZfB50wpt3Et88K07N2VU1U591VV63Tm8hNkYVrAJ6JGxte9KpL',
                'created_at' => '2025-02-01 15:24:46',
                'updated_at' => '2025-02-08 21:09:19',
                'oauth_id' => NULL,
                'oauth_avatar' => NULL,
                'oauth_token' => NULL,
                'oauth_platform' => NULL,
                'is_new' => 0,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Jimmy Wiegand',
                'email' => 'fweissnat@example.net',
                'email_verified_at' => '2025-02-01 22:21:28',
                'password' => '$2y$12$u7HBCTfiM7694kmQwIN8N.gZpiBbT8gr90ZhLjnhjPGqfAHBA175q',
                'last_login_at' => NULL,
                'is_admin' => 0,
                'remember_token' => 'BlxSwfxI4d',
                'created_at' => '2025-02-01 22:21:29',
                'updated_at' => '2025-02-08 21:09:19',
                'oauth_id' => NULL,
                'oauth_avatar' => NULL,
                'oauth_token' => NULL,
                'oauth_platform' => NULL,
                'is_new' => 0,
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Eden Dillon',
                'email' => 'miwulexep@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$cF5Ef7CGR4z3Ty5xzUyZt.V8Zwgd9hX1qhsDZR9zf4rBbZ2N7Dkte',
                'last_login_at' => NULL,
                'is_admin' => 0,
                'remember_token' => NULL,
                'created_at' => '2025-02-09 00:58:31',
                'updated_at' => '2025-02-09 01:40:29',
                'oauth_id' => NULL,
                'oauth_avatar' => NULL,
                'oauth_token' => NULL,
                'oauth_platform' => NULL,
                'is_new' => 0,
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Rhea Nolan',
                'email' => 'lesa@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$36H1/VM4bNmU1DAeIY0e5uNzQ4m3YR3/o4yyNly4lbjMvYbnafzWO',
                'last_login_at' => NULL,
                'is_admin' => 0,
                'remember_token' => NULL,
                'created_at' => '2025-02-09 00:59:15',
                'updated_at' => '2025-02-09 01:40:29',
                'oauth_id' => NULL,
                'oauth_avatar' => NULL,
                'oauth_token' => NULL,
                'oauth_platform' => NULL,
                'is_new' => 0,
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Delilah Head',
                'email' => 'sasuzeba@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$d4/xlSkan03ma//gPdRyBuA/nwvp8TUM6hrrwveoecpkiJ2BtJOOm',
                'last_login_at' => NULL,
                'is_admin' => 0,
                'remember_token' => NULL,
                'created_at' => '2025-02-09 00:59:43',
                'updated_at' => '2025-02-09 01:40:29',
                'oauth_id' => NULL,
                'oauth_avatar' => NULL,
                'oauth_token' => NULL,
                'oauth_platform' => NULL,
                'is_new' => 0,
            ),
        ));
        
        
    }
}