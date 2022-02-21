<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\role_user;
use App\Models\lokasi;
use App\Models\pengguna;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call([ RolesTableSeeder::class ]);
        // Seeder User
        User::create([
            'name' => '4VM',
            'email' => '4vm@gmail.com',
            'password' => Hash::make('12345678')
        ]);

        role_user::create([
            'user_id' => 1,
            'role_id' => 2
        ]);

        pengguna::create([
            'name' => '4VM',
            'ktp' => 0,
            'jabatan' => 'Kantor',
            'surat_komitmen' => 'default.pdf',
            'email' => 'dev@4visionmedia.com',
            'password' => Hash::make('12345678'),
            'id_api' => '1',
        ]);

        lokasi::create([
            'lokasi' => 'Four Vision Media - Office 1',
        ]);

        lokasi::create([
            'lokasi' => 'Four Vision Media - Office 2',
        ]);

    }
}
