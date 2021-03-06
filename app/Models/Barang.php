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
        return $this->hasOne('App\Models\Kategori', 'id', 'kategori_id');
    }

    public function pengguna()
    {
        return $this->hasOne('App\Models\Pengguna', 'id', 'pengguna_id');
    }

    public function lokasi()
    {
        return $this->hasOne('App\Models\Lokasi', 'id', 'lokasi_id');
    }

    public function history()
    {
        return $this->belongsTo('App\Models\History', 'barang_id', 'id');
    }

    public function permintaan()
    {
        return $this->hasMany('App\Models\Permintaan', 'barang_id', 'id');
    }

    public function scopeWithBarang($query)
    {
        return $query->with('Kategori', 'Pengguna', 'Lokasi');
    }

    public function getBarang()
    {
        return self::WithBarang()->get();
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getBarangByNoPengguna($id)
    {
        return self::where('pengguna_id', '!=', $id)->WithBarang()->get();
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getBarangByKategoriId($id)
    {
        return self::WithBarang()->where('kategori_id', $id)->get();
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getBarangbyPengguna($id)
    {
        return self::where('pengguna_id', $id)->WithBarang()->get();
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getBarangByLokasiId($id)
    {
        return self::WithBarang()->where('lokasi_id', $id)->get();
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getBarangById($id)
    {
        return self::WithBarang()->find($id);
    }

    public function kodeBarang($kategori_id,$year,$id){
        $kodeBarang = sprintf("%03d", $kategori_id) . '-' . $year . '-' . sprintf("%03d", $id);
        return $kodeBarang;
    }

    public function postBarang($request, $imageName, $lampiranName)
    {
        //mass asignment
        $barang = self::create([
            'nama_barang' => $request->nama_barang,
            'kode_barang' => $request->kategori_id . '-' . $request->year . '-',
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

        $idBarang = $barang->id;
        $kodeBarang = $this->kodeBarang($request->kategori_id, $request->year, $idBarang);
        $barang->kode_barang = $kodeBarang;
        $barang->save();

        return $barang;
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function putBarang($request, $id)
    {
        $barang = self::find($id);
        $kodeBarang = $this->kodeBarang($request->kategori_id, $request->year, $id);
        $barang->kode_barang = $kodeBarang;
        $barang->update($request->all());
        return $barang;
    }

    public function updateBarang($request, $barang, $imageName, $lampiranName)
    {
        $barang->update($request->all());
        $kodeBarang = $this->kodeBarang($request->kategori_id, $request->year, $barang->id);
        $barang->kode_barang = $kodeBarang;
        $barang->image = $imageName;
        $barang->lampiran = $lampiranName;
        $barang->save();
        return $barang;
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function deleteBarang($id)
    {
        $barang = self::find($id);
        $barang->delete();
        return $barang;
    }

    public function getHarga()
    {
        $hargaBarang = self::selectRaw('sum(harga_barang) as total, year(year) as year')
            ->groupBy('year')->pluck('total');

        return $hargaBarang;
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
        $barang = self::count();

        return $barang;
    }

    //Length Barang By Pengguna
    public function getLengthBarangByPengguna($id)
    {
        $barang = self::where('pengguna_id', $id)->count();

        return $barang;
    }

    public function getBarangByPenggunaId($id)
    {
        return self::WithBarang()->where('pengguna_id', $id)->get();
    }
    
    public function setujuPermintaanBarang($data){
        $barang = self::find($data['barang_id']);

        $barang->update([
            'pengguna_id' => $data['pengguna_id'],
        ]);

        return $barang;
    }
}
