<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\barang;

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

    public function getPengguna()
    {
        return pengguna::all();
    }

    public function getPenggunaById($id)
    {
        return pengguna::find($id);
    }

    public function postPengguna($request){
        return pengguna::create($request->all());
    }

    public function putPengguna($request, $id){
        $pengguna = pengguna::find($id);
        return $pengguna->update($request->all());
    }

    public function deletePengguna($id){
        $pengguna = pengguna::find($id);
        return $pengguna->delete();
    }

    public function getBarangByPengguna($id)
    {
        return barang::where('pengguna_id', $id)->with('pengguna', 'kategori', 'lokasi', 'jenis')->get();
    }
}
