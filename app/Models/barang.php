<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class barang extends Model
{
    protected $table = 'barang';
    protected $fillable = ['nama_barang', 'kode_barang', 'detail_barang', 'kategori_id', 'fungsi', 'harga_barang', 'lokasi_id','jenis_id', 'user_id','year','image'];

    public function kategori()
    {
        return $this->hasOne('App\Models\kategori', 'id', 'kategori_id');
    }

    public function user()
    {
        return $this->hasOne('App\Models\user', 'id', 'user_id');
    }

    public function lokasi()
    {
        return $this->hasOne('App\Models\lokasi', 'id', 'lokasi_id');
    }

    public function jenis()
    {
        return $this->hasOne('App\Models\jenis', 'id', 'jenis_id');
    }
}
