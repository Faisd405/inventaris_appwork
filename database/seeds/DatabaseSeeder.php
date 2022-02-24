<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\RoleUser;
use App\Models\Lokasi;
use App\Models\Pengguna;

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

        RoleUser::create([
            'user_id' => 1,
            'role_id' => 2
        ]);

        Pengguna::create([
            'name' => '4VM',
            'ktp' => 0,
            'jabatan' => 'Kantor',
            'surat_komitmen' => 'default.pdf',
            'email' => 'dev@4visionmedia.com',
            'password' => Hash::make('12345678'),
            'id_api' => '1',
        ]);

        Lokasi::create([
            'lokasi' => 'Four Vision Media - Office 1',
        ]);

        Lokasi::create([
            'lokasi' => 'Four Vision Media - Office 2',
        ]);

    }
}
