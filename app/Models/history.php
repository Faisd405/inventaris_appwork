<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class history extends Model
{
    //
    protected $table = 'history';
    protected $fillable = ['id','pengguna_id','barang_id','tanggal_awal_penggunaan','tanggal_akhir_penggunaan','keterangan','status'];

    public function barang()
    {
        return $this->belongsTo('App\Models\barang','barang_id');
    }

    public function pengguna()
    {
        return $this->belongsTo('App\Models\pengguna','pengguna_id');
    }
}
