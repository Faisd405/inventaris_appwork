<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class kategori extends Model
{
    protected $table = 'kategori';

    protected $fillable = [
        'nama_kategori', 'fungsi', 'sifat_id','jumlah'
    ];


    public function sifat()
    {
        return $this->hasone('App\Models\sifat','id','sifat_id');
    }

    public function barang(){
        return $this->belongsTo('App\Models\barang');
    }

    public function getKategori(){
        $kategori = kategori::with('sifat')->get();
        return $kategori;
    }

    public function getKategoriById($id){
        $kategori = kategori::with('sifat')->find($id);
        return $kategori;
    }

    public function postKategori($request){
        $request->merge([
            'jumlah' => 0
        ]);
        $kategori = kategori::create($request->all());
        return $kategori;
    }

    public function putKategori($request, $id){
        $kategori = kategori::find($id);
        $kategori->update($request->all());
        return $kategori;
    }

    public function deleteKategori($id){
        $kategori = kategori::find($id);
        $kategori->delete();
        return $kategori;
    }

    // pluck nama kategori dan jumlah
    public function indexnama(){
        $namakategori = kategori::pluck('nama_kategori');
        $jumlah = kategori::pluck('jumlah');
        return $namakategori . $jumlah;
    }


    public function add($id)
    {
        $kategori = kategori::find($id);
        $kategori->jumlah = $kategori->jumlah + 1;
        $kategori->save();
    }
}
