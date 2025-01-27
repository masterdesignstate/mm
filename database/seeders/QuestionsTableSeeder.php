<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('questions')->delete();
        
        \DB::table('questions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'question' => 'What type of relationship are you seeking?',
                'descriptor1' => 'Hookup',
                'descriptor2' => 'Dating',
                'descriptor3' => 'Partner',
                'tags' => '["Required", "Value", "Trait"]',
                'meta' => NULL,
                'created_at' => '2025-01-20 04:09:02',
                'updated_at' => '2025-01-20 04:21:47',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 1,
                'profile_id' => NULL,
                'question_number' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'question' => 'What gender do you identify with?',
                'descriptor1' => 'Feminine',
                'descriptor2' => NULL,
                'descriptor3' => 'Masculine',
                'tags' => '["Trait", "Required", "Misc"]',
                'meta' => NULL,
                'created_at' => '2025-01-20 04:27:03',
                'updated_at' => '2025-01-20 04:27:03',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 1,
                'profile_id' => NULL,
                'question_number' => 2,
            ),
            2 => 
            array (
                'id' => 3,
                'question' => 'Do you have kids?',
                'descriptor1' => 'Yes',
                'descriptor2' => NULL,
                'descriptor3' => 'No',
                'tags' => '["Required", "Trait", "Misc"]',
                'meta' => NULL,
                'created_at' => '2025-01-20 04:54:37',
                'updated_at' => '2025-01-20 04:54:37',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 1,
                'profile_id' => NULL,
                'question_number' => 3,
            ),
            3 => 
            array (
                'id' => 4,
                'question' => 'Do you want kids?',
                'descriptor1' => 'Yes',
                'descriptor2' => NULL,
                'descriptor3' => 'No',
                'tags' => '["Required", "Lifestyle", "Misc"]',
                'meta' => NULL,
                'created_at' => '2025-01-20 04:55:01',
                'updated_at' => '2025-01-20 04:55:01',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 4,
            ),
            4 => 
            array (
                'id' => 5,
                'question' => 'How much is religion part of your life?',
                'descriptor1' => 'Less',
                'descriptor2' => 'In mind only',
                'descriptor3' => 'More',
                'tags' => '["Interest", "Lifestyle", "Required"]',
                'meta' => NULL,
                'created_at' => '2025-01-20 04:55:24',
                'updated_at' => '2025-01-20 04:55:24',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 5,
            ),
            5 => 
            array (
                'id' => 6,
                'question' => 'How much formal eduction do you have?',
                'descriptor1' => 'Less',
                'descriptor2' => 'Undergraduate',
                'descriptor3' => 'More',
                'tags' => '["Look", "Interest", "Lifestyle"]',
                'meta' => NULL,
                'created_at' => '2025-01-20 04:55:51',
                'updated_at' => '2025-01-20 04:55:51',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 6,
            ),
            6 => 
            array (
                'id' => 7,
                'question' => 'Do you eat meat?',
                'descriptor1' => 'Yes',
                'descriptor2' => NULL,
                'descriptor3' => 'No',
                'tags' => '["Lifestyle", "Interest", "Misc"]',
                'meta' => NULL,
                'created_at' => '2025-01-20 04:56:18',
                'updated_at' => '2025-01-20 04:56:18',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 1,
                'profile_id' => NULL,
                'question_number' => 7,
            ),
            7 => 
            array (
                'id' => 8,
                'question' => 'How often do you exercise?',
                'descriptor1' => 'Less',
                'descriptor2' => 'Multi per week',
                'descriptor3' => 'More',
                'tags' => '["Required", "Trait", "Lifestyle"]',
                'meta' => NULL,
                'created_at' => '2025-01-20 04:56:46',
                'updated_at' => '2025-01-20 04:56:46',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 8,
            ),
        ));
        
        
    }
}