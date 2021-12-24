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
        User::create([
            'name' => 'Faisal Dz',
            'email' => 'faisd405@gmail.com',
            'password' => Hash::make('12345678')
        ]);
        User::create([
            'name' => 'Giffa',
            'email' => 'giffa@gmail.com',
            'password' => Hash::make('12345678')
        ]);

        // Seeder Sifat
        sifat::create([
            'sifat_kategori' => 'Biasa',
        ]);
        sifat::create([
            'sifat_kategori' => 'Berkualitas',
        ]);

        // Seeder Kategori
        kategori::create([
            'nama_kategori' => 'PC',
            'jumlah' => '2',
            'fungsi' => 'Mengoding',
            'sifat_id' => '1',
        ]);

        kategori::create([
            'nama_kategori' => 'Furniture',
            'jumlah' => '1',
            'fungsi' => 'dipake',
            'sifat_id' => '2',
        ]);

        // Seeder Jenis
        jenis::create([
            'jenis_barang' => 'Laptop',
        ]);

        jenis::create([
            'jenis_barang' => 'Komputer',
        ]);

        // Seeder Lokasi
        lokasi::create([
            'lokasi' => 'Monas Jakarta',
            'kordinat' => '-6.22, 106.8',
        ]);

        lokasi::create([
            'lokasi' => 'Four Vision Media - Office 1',
            'kordinat' => '-7.0331861,107.5943322'
        ]);

        lokasi::create([
            'lokasi' => 'Four Vision Media - Office 2',
            'kordinat' => '-6.9557103,107.6367724'
        ]);

        // Seeder Barang
        barang::create([
            'nama_barang' => 'Laptop',
            'kode_barang' => 'LAP-001',
            'detail_barang' => 'Laptop Lenovo',
            'fungsi' => 'Mengoding',
            'harga_barang' => '1000000',
            'lokasi_id' => '1',
            'jenis_id' => '1',
            'kategori_id' => '1',
            'user_id' => '1',
            'year' => '2020',
            'image' => 'laptop.jpg',
        ]);

        barang::create([
            'nama_barang' => 'Meja',
            'kode_barang' => 'MEJ-001',
            'detail_barang' => 'Meja',
            'fungsi' => 'dipake',
            'harga_barang' => '1000000',
            'lokasi_id' => '2',
            'jenis_id' => '1',
            'kategori_id' => '2',
            'user_id' => '2',
            'year' => '2020',
            'image' => 'meja.jpg',
        ]);

        barang::create([
            'nama_barang' => 'Kursi',
            'kode_barang' => 'Kurs-001',
            'detail_barang' => 'Kursi',
            'fungsi' => 'dipake',
            'harga_barang' => '500000',
            'lokasi_id' => '3',
            'jenis_id' => '1',
            'kategori_id' => '2',
            'user_id' => '1',
            'year' => '2021',
            'image' => 'kursi.jpg',
        ]);

        // Seeder Buku
        buku::create([
            'judul' => 'PROGRAM ABSENSI SISWA REALTIME DENGAN PHP DAN SMS GATEWAY',
            'penulis' => 'AMINUDIN',
            'penerbit' => 'CV.LOKOMEDIA',
            'tanggal' => 'Desember 2014',
            'kondisi' => 'Bagus',
            'jumlah' => '1',
            'lokasi_id' => '1',
        ]);

        buku::create([
            'judul' => 'PROYEK MEMBUAT WEBSITE PERIKLANAN DENGAN PHP',
            'penulis' => 'AGUS SAPUTRA',
            'penerbit' => 'CV. ASFA SOLUTION',
            'tanggal' => 'JUNI 2014',
            'kondisi' => 'Bagus',
            'jumlah' => '1',
            'lokasi_id' => '2',
        ]);
        $this->call([ RolesTableSeeder::class ]);
    }
}
