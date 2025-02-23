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
                'answers' => '[{"value": "1", "answer": "Hookup"}, {"value": "3", "answer": "Dating"}, {"value": "5", "answer": "Partner"}]',
                'tags' => '["Required", "Value", "Trait"]',
                'meta' => '{"skip_self": false, "skip_seeking": false}',
                'created_at' => '2025-01-20 04:09:02',
                'updated_at' => '2025-02-01 13:53:10',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 1,
                'profile_id' => NULL,
                'question_number' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'question' => 'What gender do you identify with?',
                'answers' => '[{"value": "1", "answer": "Feminine"}, {"value": "5", "answer": "Masculine"}]',
                'tags' => '["Trait", "Required", "Misc"]',
                'meta' => '{"skip_self": false, "skip_seeking": false}',
                'created_at' => '2025-01-20 04:27:03',
                'updated_at' => '2025-02-01 14:14:04',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 2,
            ),
            2 => 
            array (
                'id' => 3,
                'question' => 'Do you have kids?',
                'answers' => '[{"value": "1", "answer": "Yes"}, {"value": "5", "answer": "No"}]',
                'tags' => '["Required", "Trait", "Misc"]',
                'meta' => '{"skip_self": false, "skip_seeking": false}',
                'created_at' => '2025-01-20 04:54:37',
                'updated_at' => '2025-02-01 14:14:29',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 1,
                'profile_id' => NULL,
                'question_number' => 3,
            ),
            3 => 
            array (
                'id' => 4,
                'question' => 'Do you want kids?',
                'answers' => '[{"value": "1", "answer": "Yes"}, {"value": "3", "answer": "Open"}, {"value": "5", "answer": "No"}]',
                'tags' => '["Required", "Lifestyle", "Misc"]',
                'meta' => '{"skip_self": false, "skip_seeking": false}',
                'created_at' => '2025-01-20 04:55:01',
                'updated_at' => '2025-02-01 14:15:46',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 4,
            ),
            4 => 
            array (
                'id' => 5,
                'question' => 'How much is religion part of your life?',
                'answers' => '[{"value": "1", "answer": "Less"}, {"value": "3", "answer": "In mind only"}, {"value": "5", "answer": "More"}]',
                'tags' => '["Interest", "Lifestyle", "Required"]',
                'meta' => '{"skip_self": false, "skip_seeking": false}',
                'created_at' => '2025-01-20 04:55:24',
                'updated_at' => '2025-02-01 14:16:28',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 5,
            ),
            5 => 
            array (
                'id' => 6,
                'question' => 'How much formal eduction do you have?',
                'answers' => '[{"value": "1", "answer": "Less"}, {"value": "3", "answer": "Undergraduate"}, {"value": "5", "answer": "More"}]',
                'tags' => '["Look", "Interest", "Lifestyle"]',
                'meta' => '{"skip_self": false, "skip_seeking": false}',
                'created_at' => '2025-01-20 04:55:51',
                'updated_at' => '2025-02-01 14:18:55',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 6,
            ),
            6 => 
            array (
                'id' => 7,
                'question' => 'Do you eat meat?',
                'answers' => '[{"value": "1", "answer": "Yes"}, {"value": "5", "answer": "No"}]',
                'tags' => '["Lifestyle", "Interest", "Misc"]',
                'meta' => '{"skip_self": false, "skip_seeking": false}',
                'created_at' => '2025-01-20 04:56:18',
                'updated_at' => '2025-02-01 14:39:49',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 1,
                'profile_id' => NULL,
                'question_number' => 7,
            ),
            7 => 
            array (
                'id' => 8,
                'question' => 'How often do you exercise?',
                'answers' => '[{"value": "1", "answer": "Less"}, {"value": "3", "answer": "Multi per week"}, {"value": "5", "answer": "More"}]',
                'tags' => '["Required", "Trait", "Lifestyle"]',
                'meta' => '{"skip_self": false, "skip_seeking": false}',
                'created_at' => '2025-01-20 04:56:46',
                'updated_at' => '2025-02-01 14:40:28',
                'is_approved' => '2025-01-27 12:47:44',
                'is_mandatory' => 0,
                'profile_id' => NULL,
                'question_number' => 8,
            ),
            8 => 
            array (
                'id' => 9,
                'question' => 'Fuga Sapiente conse',
                'answers' => '[{"value": "1", "answer": "Sapiente aut nihil d"}, {"value": "5", "answer": "Maiores fuga Qui qu"}]',
                'tags' => '["Look", "Hobby"]',
                'meta' => NULL,
                'created_at' => '2025-02-10 22:10:27',
                'updated_at' => '2025-02-10 22:10:27',
                'is_approved' => NULL,
                'is_mandatory' => 0,
                'profile_id' => 1,
                'question_number' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'question' => 'Adipisicing iure cup',
                'answers' => '[{"value": "1", "answer": "Eligendi dolor volup"}, {"value": "5", "answer": "Assumenda ratione fu"}]',
                'tags' => '["Look", "Hobby", "Look"]',
                'meta' => NULL,
                'created_at' => '2025-02-10 22:13:53',
                'updated_at' => '2025-02-10 22:13:53',
                'is_approved' => NULL,
                'is_mandatory' => 0,
                'profile_id' => 1,
                'question_number' => NULL,
            ),
        ));
        
        
    }
}