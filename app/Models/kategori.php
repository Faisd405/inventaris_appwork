<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class kategori extends Model
{
    protected $table = 'kategori';

    protected $fillable = [
        'nama_kategori', 'fungsi', 'sifat_id','jumlah'
    ];


    public function sifat()
    {
        return $this->hasone('App\Models\sifat','id','sifat_id');
    }

    public function barang(){
        return $this->belongsTo('App\Models\barang');
    }
}
