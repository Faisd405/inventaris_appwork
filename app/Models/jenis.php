<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class jenis extends Model
{
    //
    protected $table = 'jenis';
    protected $fillable = ['jenis_barang'];

    public function barang()
    {
        return $this->hasMany('App\Models\barang', 'jenis_id', 'id');
    }
}
