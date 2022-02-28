<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lokasi extends Model
{
    //
    protected $table = 'lokasi';

    protected $fillable = [
        'lokasi',
    ];

    public function Barang()
    {
        return $this->belongsTo('App\Models\Barang');
    }

    public function Buku()
    {
        return $this->belongsTo('App\Models\Buku');
    }

    public function getLokasi()
    {
        return self::all();
    }

    public function getLokasiById($id)
    {
        return self::find($id);
    }

    public function postLokasi($request)
    {
        $lokasi = new Lokasi;
        $lokasi->lokasi = $request->lokasi;
        $lokasi->save();
    }

    public function putLokasi($request, $id)
    {
        $lokasi = self::find($id);
        return $lokasi->update($request->all());
    }

    public function deleteLokasi($id)
    {
        $lokasi = self::find($id);
        return $lokasi->delete();
    }

    //selectRaw Lokasi and pluck lokasi
    public function selectLokasi()
    {
        return self::selectRaw('lokasi')->pluck('lokasi');
    }
}
