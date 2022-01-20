<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class jenis extends Model
{
    //
    protected $table = 'jenis';
    protected $fillable = ['jenis_buku'];

    public function buku()
    {
        return $this->hasMany('App\Models\buku', 'jenis_id', 'id');
    }

    public function getJenis() {
        $jenis = jenis::with('buku')->get();
        return $jenis;
    }

    public function getJenisById($id) {
        $jenis = jenis::with('buku')->find($id);
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
