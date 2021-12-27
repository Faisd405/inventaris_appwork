<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\barang;
use App\Models\kategori;
use App\Models\sifat;
use App\Models\jenis;
use App\Models\buku;
use App\Models\lokasi;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Seeder User
        User::create([
            'name' => '4VM',
            'email' => '4vm@gmail.com',
            'password' => Hash::make('12345678')
        ]);

        lokasi::create([
            'lokasi' => 'Four Vision Media - Office 1',
            'kordinat' => '-7.0331861,107.5943322'
        ]);

        lokasi::create([
            'lokasi' => 'Four Vision Media - Office 2',
            'kordinat' => '-6.9557103,107.6367724'
        ]);

        $this->call([ RolesTableSeeder::class ]);
    }
}
