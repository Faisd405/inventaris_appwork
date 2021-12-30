<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class pengguna extends Model
{
    //
    protected $table = 'pengguna';

    protected $fillable = [
        'name'
    ];

    public function barang()
    {
        return $this->belongsTo('App\Models\barang');
    }
}
