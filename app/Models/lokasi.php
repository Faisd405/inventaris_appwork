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

    public function buku()
    {
        return $this->belongsTo('App\Models\buku');
    }

    public function getLokasi(){
        return lokasi::all();
    }

    public function getLokasiById($id){
        return lokasi::find($id);
    }

    public function postLokasi($request){
        return lokasi::create($request->all());
    }

    public function putLokasi($request, $id){
        $lokasi = lokasi::find($id);
        return $lokasi->update($request->all());
    }

    public function deleteLokasi($id){
        $lokasi = lokasi::find($id);
        return $lokasi->delete();
    }
}
