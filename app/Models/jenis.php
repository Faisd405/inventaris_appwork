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

    public function getJenis() {
        $jenis = jenis::with('barang')->get();
        return $jenis;
    }

    public function getJenisById($id) {
        $jenis = jenis::with('barang')->find($id);
        return $jenis;
    }

    public function postJenis($request) {
        $jenis = jenis::create($request->all());
        return $jenis;
    }

    public function putJenis($request, $id) {
        $jenis = jenis::find($id);
        $jenis->update($request->all());
        return $jenis;
    }

    public function deleteJenis($id) {
        $jenis = jenis::find($id);
        $jenis->delete();
        return $jenis;
    }

}
