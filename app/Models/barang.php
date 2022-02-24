<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    protected $table = 'barang';
    protected $fillable = [
        'nama_barang',
        'kode_barang',
        'detail_barang',
        'kategori_id',
        'fungsi',
        'harga_barang',
        'lokasi_id',
        'detail_lokasi',
        'pengguna_id',
        'year',
        'image',
        'jumlah_barang',
        'lampiran'
    ];

    public function kategori()
    {
        return $this->hasOne('App\Models\kategori', 'id', 'kategori_id');
    }

    public function pengguna()
    {
        return $this->hasOne('App\Models\pengguna', 'id', 'pengguna_id');
    }

    public function lokasi()
    {
        return $this->hasOne('App\Models\lokasi', 'id', 'lokasi_id');
    }

    public function history()
    {
        return $this->belongsTo('App\Models\history', 'barang_id', 'id');
    }

    public function scopeWithBarang()
    {
        return $this->with('pengguna', 'kategori', 'lokasi');
    }

    public function getBarang()
    {
        return $this->scopeWithBarang()->get();
    }

    public function getBarangByNoPengguna($id)
    {
        return self::where('pengguna_id', '!=', $id)->with('pengguna', 'kategori', 'lokasi')->get();
    }

    public function getBarangByKategoriId($id)
    {
        return $this->scopeWithBarang()->where('kategori_id', $id)->get();
    }

    public function getBarangbyPengguna($id)
    {
        return self::where('pengguna_id', $id)->scopeWithBarang()->get();
    }

    public function getBarangByLokasiId($id)
    {
        return $this->scopeWithBarang()->where('lokasi_id', $id)->get();
    }

    public function getBarangById($id)
    {
        return $this->scopeWithBarang()->find($id);
    }

    public function postBarang($request, $imageName, $lampiranName)
    {
        //mass asignment
        $barang = $this->create([
            'nama_barang' => $request->nama_barang,
            'kode_barang' => $request->kode_barang,
            'detail_barang' => $request->detail_barang,
            'kategori_id' => $request->kategori_id,
            'fungsi' => $request->fungsi,
            'harga_barang' => $request->harga_barang,
            'lokasi_id' => $request->lokasi_id,
            'detail_lokasi' => $request->detail_lokasi,
            'pengguna_id' => $request->pengguna_id,
            'year' => $request->year,
            'image' => $imageName,
            'lampiran' => $lampiranName,
            'jumlah_barang' => $request->jumlah_barang,
        ]);

        return $barang;
    }

    public function putBarang($request, $id)
    {
        $barang = self::find($id);
        $barang->update($request->all());
        return $barang;
    }

    public function updateBarang($request, $barang, $imageName, $LampiranName)
    {
        $barang->update($request->all());
        $barang->image = $imageName;
        $barang->lampiran = $LampiranName;
        $barang->save();
        return $barang;
    }

    public function deleteBarang($id)
    {
        $barang = self::find($id);
        $barang->delete();
        return $barang;
    }

    public function getHarga()
    {
        $harga_barang = self::selectRaw('sum(harga_barang) as total, year(year) as year')
            ->groupBy('year')->pluck('total');

        return $harga_barang;
    }

    public function getYear()
    {
        $year = self::selectRaw('sum(harga_barang) as total, year(year) as year')
            ->groupBy('year')->pluck('year');

        return $year;
    }

    public function getTotalHarga()
    {
        $barang = self::sum('harga_barang');

        return $barang;
    }

    //Length Barang By all Lokasi
    public function getLengthBarangByLokasi()
    {
        $barang = self::selectRaw('count(*) as total, lokasi_id')
            ->groupBy('lokasi_id')->pluck('total');

        return $barang;
    }

    //Length Barang
    public function getLengthBarang()
    {
        $barang = Barang::count();

        return $barang;
    }

    //Length Barang By Pengguna
    public function getLengthBarangByPengguna($id)
    {
        $barang = Barang::where('pengguna_id', $id)->count();

        return $barang;
    }

    public function getBarangByPenggunaId($id)
    {
        return $this->scopeWithBarang()->where('pengguna_id', $id)->get();
    }
}
