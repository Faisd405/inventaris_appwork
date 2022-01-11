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

    public function barangHistory($barang)
    {
        $history = new history;
        $history->pengguna_id = $barang->pengguna_id;
        $history->barang_id = $barang->id;
        $history->tanggal_awal_penggunaan = date('d-m-Y');
        $history->tanggal_akhir_penggunaan = "Masih Terpakai";
        $history->keterangan = "Barang " . $barang->nama_barang . " dipakai pada tanggal " . date('d-m-Y');
        $history->status = "Masih Digunakan";
        $history->save();
    }
}
