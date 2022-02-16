<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class buku extends Model
{
    protected $table = 'buku';
    protected $fillable = ['judul', 'penulis', 'penerbit', 'tanggal', 'jumlah','kondisi','jenis_id','pengguna_id','lokasi_id','harga'];

    public function lokasi()
    {
        return $this->hasOne('App\Models\lokasi', 'id', 'lokasi_id');
    }

    public function jenis()
    {
        return $this->hasOne('App\Models\jenis', 'id', 'jenis_id');
    }

    public function pengguna()
    {
        return $this->hasOne('App\Models\pengguna', 'id', 'pengguna_id');
    }

    public function getBuku() {
        $buku = buku::with('lokasi','jenis','pengguna')->get();
        return $buku;
    }

    public function getBukuById($id) {
        $buku = buku::with('lokasi','jenis','pengguna')->find($id);
        return $buku;
    }

    public function getBukuByLokasiId($id)
    {
        return buku::with('lokasi','jenis','pengguna')->where('lokasi_id', $id)->get();
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

    //Lenth Buku
    public function getLengthBuku() {
        $buku = buku::count();
        return $buku;
    }

    //get total harga
    public function getTotalHarga() {
        $buku = buku::sum('harga');
        return $buku;
    }

    public function getBukuByJenisId($id)
    {
        return buku::with('lokasi','jenis','pengguna')->where('jenis_id', $id)->get();
    }
}
