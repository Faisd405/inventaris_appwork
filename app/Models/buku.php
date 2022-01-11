<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class buku extends Model
{
    protected $table = 'buku';
    protected $fillable = ['judul', 'penulis', 'penerbit', 'tanggal', 'jumlah','kondisi','lokasi_id'];

    public function lokasi()
    {
        return $this->hasOne('App\Models\lokasi', 'id', 'lokasi_id');
    }

    public function getBuku() {
        $buku = buku::with('lokasi')->get();
        return $buku;
    }

    public function getBukuById($id) {
        $buku = buku::with('lokasi')->find($id);
        return $buku;
    }

    public function postBuku($request) {
        $buku = buku::create($request->all());
        return $buku;
    }

    public function putBuku($request, $id) {
        $buku = buku::find($id);
        $buku->update($request->all());
        return $buku;
    }

    public function deleteBuku($id) {
        $buku = buku::find($id);
        $buku->delete();
        return $buku;
    }
}
