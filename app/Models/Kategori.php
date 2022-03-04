<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    protected $table = 'kategori';

    protected $fillable = [
        'nama_kategori', 'fungsi', 'sifat_id', 'jumlah'
    ];


    public function sifat()
    {
        return $this->hasone('App\Models\Sifat', 'id', 'sifat_id');
    }

    public function barang()
    {
        return $this->belongsTo('App\Models\Barang');
    }

    public function getKategori()
    {
        $kategori = self::with('sifat')->get();
        return $kategori;
    }

    //selectRaw
    public function getKategoriRawNama()
    {
        $kategori = self::selectRaw('nama_kategori')->get();
        return $kategori;
    }

    public function getKategoriById($id)
    {
        $kategori = self::with('sifat')->find($id);
        return $kategori;
    }

    public function postKategori($request)
    {
        $request->merge([
            'jumlah' => 0
        ]);
        $kategori = self::create($request->all());
        return $kategori;
    }

    public function putKategori($request, $id)
    {
        $kategori = self::find($id);
        $kategori->update($request->all());
        return $kategori;
    }

    public function deleteKategori($id)
    {
        $kategori = self::find($id);
        $kategori->delete();
        return $kategori;
    }

    // pluck nama kategori dan jumlah
    public function indexNama()
    {
        $namakategori = self::pluck('nama_kategori');
        $jumlah = self::pluck('jumlah');
        return $namakategori . $jumlah;
    }


    public function add($id)
    {
        $kategori = self::find($id);
        $kategori->jumlah = $kategori->jumlah + 1;
        $kategori->save();
    }

    public function minus($id)
    {
        $kategori = self::find($id);
        $kategori->jumlah = $kategori->jumlah - 1;
        $kategori->save();
    }
}
