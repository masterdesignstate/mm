<?php

namespace Database\Seeders;

use App\Models\Profile;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

//        $admin_user = User::factory()->create([
//            'name' => 'Admin',
//            'email' => 'admin@admin.com',
//            'password' => bcrypt('password'),
//            'is_admin' => true
//        ]);
//
//        $test_user = User::factory()->create([
//            'name' => 'Test',
//            'email' => 'test@test.com',
//            'password' => bcrypt('password'),
//        ]);
//
//        Profile::factory()->create([
//            'name' => 'Test',
//            'user_id' => $test_user->id,
//            'uname' => 'test'
//        ]);


        $this->call(UsersTableSeeder::class);
        $this->call(ProfilesTableSeeder::class);
        $this->call(QuestionsTableSeeder::class);
        $this->call(AnswersTableSeeder::class);
        $this->call(SettingsTableSeeder::class);
        $this->call(ChatMessagesTableSeeder::class);
        $this->call(ProfileResponsesTableSeeder::class);
    }
}
