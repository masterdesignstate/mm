<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AnswersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('answers')->delete();
        
        \DB::table('answers')->insert(array (
            0 => 
            array (
                'id' => 39,
                'profile_id' => 1,
                'question_id' => 1,
                'answer' => '{"seekAnswer": {"value": 6, "answers": [{"value": "1", "answer": "Hookup"}, {"value": "3", "answer": "Dating"}, {"value": "5", "answer": "Partner"}], "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Hookup"}, "isOkayWithAll": true}',
                'meta' => NULL,
                'created_at' => '2025-02-01 20:33:27',
                'updated_at' => '2025-02-01 20:33:27',
            ),
            1 => 
            array (
                'id' => 40,
                'profile_id' => 1,
                'question_id' => 3,
                'answer' => '{"seekAnswer": {"value": "5", "answer": "No", "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Yes"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-01 20:33:32',
                'updated_at' => '2025-02-01 20:33:32',
            ),
            2 => 
            array (
                'id' => 41,
                'profile_id' => 1,
                'question_id' => 7,
                'answer' => '{"seekAnswer": {"value": "1", "answer": "Yes", "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "No"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-01 20:33:36',
                'updated_at' => '2025-02-01 20:33:36',
            ),
            3 => 
            array (
                'id' => 42,
                'profile_id' => 2,
                'question_id' => 1,
                'answer' => '{"seekAnswer": {"value": "1", "answer": "Hookup", "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "Partner"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-01 22:25:06',
                'updated_at' => '2025-02-01 22:25:06',
            ),
            4 => 
            array (
                'id' => 43,
                'profile_id' => 2,
                'question_id' => 3,
                'answer' => '{"seekAnswer": {"value": "5", "answer": "No", "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Yes"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-01 22:25:22',
                'updated_at' => '2025-02-01 22:25:22',
            ),
            5 => 
            array (
                'id' => 44,
                'profile_id' => 2,
                'question_id' => 7,
                'answer' => '{"seekAnswer": {"value": "1", "answer": "Yes", "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Yes"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-01 22:25:26',
                'updated_at' => '2025-02-01 22:25:26',
            ),
            6 => 
            array (
                'id' => 45,
                'profile_id' => 1,
                'question_id' => 2,
                'answer' => '{"seekAnswer": {"value": "1", "answer": "Feminine", "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "Masculine"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-08 21:07:43',
                'updated_at' => '2025-02-08 21:07:43',
            ),
            7 => 
            array (
                'id' => 46,
                'profile_id' => 2,
                'question_id' => 2,
                'answer' => '{"seekAnswer": {"value": "1", "answer": "Feminine", "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "Masculine"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-08 21:09:31',
                'updated_at' => '2025-02-08 21:09:31',
            ),
            8 => 
            array (
                'id' => 47,
                'profile_id' => 3,
                'question_id' => 1,
                'answer' => '{"seekAnswer": {"value": 6, "answers": [{"value": "1", "answer": "Hookup"}, {"value": "3", "answer": "Dating"}, {"value": "5", "answer": "Partner"}], "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Hookup"}, "isOkayWithAll": true}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:58:40',
                'updated_at' => '2025-02-09 00:58:40',
            ),
            9 => 
            array (
                'id' => 48,
                'profile_id' => 3,
                'question_id' => 3,
                'answer' => '{"seekAnswer": {"value": "5", "answer": "No", "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Yes"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:58:44',
                'updated_at' => '2025-02-09 00:58:44',
            ),
            10 => 
            array (
                'id' => 49,
                'profile_id' => 3,
                'question_id' => 7,
                'answer' => '{"seekAnswer": {"value": 6, "answers": [{"value": "1", "answer": "Yes"}, {"value": "5", "answer": "No"}], "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Yes"}, "isOkayWithAll": true}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:58:49',
                'updated_at' => '2025-02-09 00:58:49',
            ),
            11 => 
            array (
                'id' => 50,
                'profile_id' => 3,
                'question_id' => 6,
                'answer' => '{"seekAnswer": {"value": 6, "answers": [{"value": "1", "answer": "Less"}, {"value": "3", "answer": "Undergraduate"}, {"value": "5", "answer": "More"}], "multiplier": 5}, "selfAnswer": {"value": "3", "answer": "Undergraduate"}, "isOkayWithAll": true}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:58:56',
                'updated_at' => '2025-02-09 00:58:56',
            ),
            12 => 
            array (
                'id' => 51,
                'profile_id' => 4,
                'question_id' => 1,
                'answer' => '{"seekAnswer": {"value": 6, "answers": [{"value": "1", "answer": "Hookup"}, {"value": "3", "answer": "Dating"}, {"value": "5", "answer": "Partner"}], "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Hookup"}, "isOkayWithAll": true}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:59:24',
                'updated_at' => '2025-02-09 00:59:24',
            ),
            13 => 
            array (
                'id' => 52,
                'profile_id' => 4,
                'question_id' => 3,
                'answer' => '{"seekAnswer": {"value": "5", "answer": "No", "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "No"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:59:31',
                'updated_at' => '2025-02-09 00:59:31',
            ),
            14 => 
            array (
                'id' => 53,
                'profile_id' => 4,
                'question_id' => 7,
                'answer' => '{"seekAnswer": {"value": "5", "answer": "No", "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "No"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:59:36',
                'updated_at' => '2025-02-09 00:59:36',
            ),
            15 => 
            array (
                'id' => 54,
                'profile_id' => 5,
                'question_id' => 1,
                'answer' => '{"seekAnswer": {"value": "5", "answer": "Partner", "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "Partner"}, "isOkayWithAll": false}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:59:50',
                'updated_at' => '2025-02-09 00:59:50',
            ),
            16 => 
            array (
                'id' => 55,
                'profile_id' => 5,
                'question_id' => 3,
                'answer' => '{"seekAnswer": {"value": 6, "answers": [{"value": "1", "answer": "Yes"}, {"value": "5", "answer": "No"}], "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "No"}, "isOkayWithAll": true}',
                'meta' => NULL,
                'created_at' => '2025-02-09 00:59:57',
                'updated_at' => '2025-02-09 00:59:57',
            ),
            17 => 
            array (
                'id' => 56,
                'profile_id' => 5,
                'question_id' => 7,
                'answer' => '{"seekAnswer": {"value": 6, "answers": [{"value": "1", "answer": "Yes"}, {"value": "5", "answer": "No"}], "multiplier": 5}, "selfAnswer": {"value": "5", "answer": "No"}, "isOkayWithAll": true}',
                'meta' => NULL,
                'created_at' => '2025-02-09 01:00:03',
                'updated_at' => '2025-02-09 01:00:03',
            ),
            18 => 
            array (
                'id' => 57,
                'profile_id' => 3,
                'question_id' => 2,
                'answer' => '{"seekAnswer": {"value": 6, "answers": [{"value": "1", "answer": "Feminine"}, {"value": "5", "answer": "Masculine"}], "multiplier": 5}, "selfAnswer": {"value": "1", "answer": "Feminine"}, "isOkayWithAll": true}',
                'meta' => NULL,
                'created_at' => '2025-02-09 01:49:45',
                'updated_at' => '2025-02-09 01:49:45',
            ),
        ));
        
        
    }
}