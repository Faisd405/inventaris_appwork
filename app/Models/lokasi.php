<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class lokasi extends Model
{
    //
    protected $table = 'lokasi';

    protected $fillable = [
        'lokasi',
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
        $lokasi = new lokasi;
        $lokasi->lokasi = $request->lokasi;
        $lokasi->save();
    }

    public function putLokasi($request, $id){
        $lokasi = lokasi::find($id);
        return $lokasi->update($request->all());
    }

    public function deleteLokasi($id){
        $lokasi = lokasi::find($id);
        return $lokasi->delete();
    }

    //selectRaw Lokasi and pluck lokasi
    public function selectLokasi(){
        return lokasi::selectRaw('lokasi')->pluck('lokasi');
    }
}
