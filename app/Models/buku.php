<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    protected $table = 'buku';
    protected $fillable = [
        'judul',
        'penulis',
        'penerbit',
        'tanggal',
        'jumlah',
        'kondisi',
        'jenis_id',
        'pengguna_id',
        'lokasi_id',
        'harga'
    ];

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

    public function scopeWithBuku()
    {
        return $this->with('lokasi', 'jenis', 'pengguna');
    }

    public function getBuku()
    {
        $buku = self::scopeWithBuku()->get();
        return $buku;
    }

    public function getBukuById($id)
    {
        $buku = self::scopeWithBuku()->find($id);
        return $buku;
    }

    public function getBukuByPengguna($id)
    {
        return self::where('pengguna_id', $id)->scopeWithBuku()->get();
    }

    public function getBukuByLokasiId($id)
    {
        return self::scopeWithBuku()->where('lokasi_id', $id)->get();
    }

    public function postBuku($request)
    {
        $buku = self::create($request->all());
        return $buku;
    }

    public function putBuku($request, $id)
    {
        $buku = self::find($id);
        $buku->update($request->all());
        return $buku;
    }

    public function deleteBuku($id)
    {
        $buku = self::find($id);
        $buku->delete();
        return $buku;
    }

    //Lenth Buku
    public function getLengthBuku()
    {
        $buku = self::count();
        return $buku;
    }

    //get length by pengguna
    public function getLengthBukuByPengguna($id)
    {
        $buku = self::where('pengguna_id', $id)->count();
        return $buku;
    }

    //get total harga
    public function getTotalHarga()
    {
        $buku = self::sum('harga');
        return $buku;
    }


    public function getBukuByJenisId($id)
    {
        return self::scopeWithBuku()->where('jenis_id', $id)->get();
    }
}
