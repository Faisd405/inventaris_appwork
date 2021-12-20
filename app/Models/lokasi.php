<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class lokasi extends Model
{
    //
    protected $table = 'lokasi';

    protected $fillable = [
        'lokasi', 'kordinat'
    ];

    public function barang()
    {
        return $this->belongsTo('App\Models\barang');
    }
}
