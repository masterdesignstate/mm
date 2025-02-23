<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ChatMessagesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('chat_messages')->delete();
        
        
        
    }
}