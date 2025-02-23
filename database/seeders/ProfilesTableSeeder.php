<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProfilesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('profiles')->delete();
        
        \DB::table('profiles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Test',
                'uname' => 'test',
                'date_of_birth' => '1993-08-01',
                'zip' => '11211',
                'gender' => '2',
                'commitment' => 'Short Term',
                'bio' => 'excepturi unde officia perspiciatis officia facere et error harum autem eius aspernatur velit dicta reprehenderit ut ducimus nisi qui aperiam',
                'tag_line' => 'Dicta Sequi Dicta Tempore Maxime',
                'user_id' => 2,
                'created_at' => '2024-07-13 15:24:46',
                'updated_at' => '2025-02-10 20:37:05',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Jimmy Wiegand',
                'uname' => 'jimmy_wiegand',
                'date_of_birth' => '1993-08-01',
                'zip' => '56964',
                'gender' => '2',
                'commitment' => 'Long Term',
                'bio' => 'natus ut est odit unde excepturi nisi sit consectetur vel et sed eos suscipit similique voluptatibus quia qui rem aut',
                'tag_line' => 'Non Ea Quisquam Esse Dolore',
                'user_id' => 3,
                'created_at' => '2024-02-17 22:21:29',
                'updated_at' => '2025-02-01 22:21:29',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Eden Dillon',
                'uname' => 'tykihyb',
                'date_of_birth' => '1993-08-01',
                'zip' => '12380',
                'gender' => NULL,
                'commitment' => NULL,
                'bio' => 'Consequatur qui pari',
                'tag_line' => 'Sit numquam non fug',
                'user_id' => 4,
                'created_at' => '2025-02-09 00:58:32',
                'updated_at' => '2025-02-09 00:58:35',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Rhea Nolan',
                'uname' => 'gosefav',
                'date_of_birth' => '1993-08-01',
                'zip' => '29688',
                'gender' => NULL,
                'commitment' => NULL,
                'bio' => 'Ut dolore quidem occ',
                'tag_line' => 'Dolore hic laboris a',
                'user_id' => 5,
                'created_at' => '2025-02-09 00:59:15',
                'updated_at' => '2025-02-09 00:59:17',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Delilah Head',
                'uname' => 'myzodywem',
                'date_of_birth' => '1993-08-01',
                'zip' => '37355',
                'gender' => NULL,
                'commitment' => NULL,
                'bio' => 'Sit unde obcaecati e',
                'tag_line' => 'Sed veritatis qui eo',
                'user_id' => 6,
                'created_at' => '2025-02-09 00:59:43',
                'updated_at' => '2025-02-09 00:59:45',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Kyla Ayers',
                'uname' => 'buxaluh',
                'date_of_birth' => '1986-12-31',
                'zip' => '12702',
                'gender' => NULL,
                'commitment' => NULL,
                'bio' => 'Corrupti molestias',
                'tag_line' => 'Dolore iure sunt in',
                'user_id' => 7,
                'created_at' => '2025-02-11 01:56:34',
                'updated_at' => '2025-02-11 01:59:31',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Ursa Whitney',
                'uname' => 'ruhuqofub',
                'date_of_birth' => '1999-06-17',
                'zip' => '30269',
                'gender' => NULL,
                'commitment' => NULL,
                'bio' => 'Dolorem nobis id re',
                'tag_line' => 'In voluptas nisi per',
                'user_id' => 8,
                'created_at' => '2025-02-11 03:58:08',
                'updated_at' => '2025-02-11 04:03:34',
            ),
        ));
        
        
    }
}