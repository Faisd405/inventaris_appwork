<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class barang extends Model
{
    protected $table = 'barang';
    protected $fillable = ['nama_barang', 'kode_barang', 'detail_barang', 'kategori_id', 'fungsi', 'harga_barang', 'lokasi_id','detail_lokasi', 'pengguna_id', 'year', 'image', 'jumlah_barang','lampiran'];

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

    public function getBarang()
    {
        return barang::with('pengguna', 'kategori', 'lokasi')->get();
    }

    public function getBarangByKategoriId($id)
    {
        return barang::with('pengguna', 'kategori', 'lokasi')->where('kategori_id', $id)->get();
    }

    public function getBarangByLokasiId($id)
    {
        return barang::with('pengguna', 'kategori', 'lokasi')->where('lokasi_id', $id)->get();
    }

    public function getBarangById($id)
    {
        return barang::with('pengguna', 'kategori', 'lokasi')->find($id);
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
        $barang = barang::find($id);
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
        $barang = barang::find($id);
        $barang->delete();
        return $barang;
    }

    public function getHarga(){
        $harga_barang = barang::selectRaw('sum(harga_barang) as total, year(year) as year')
            ->groupBy('year')->pluck('total');

        return $harga_barang;
    }

    public function getYear(){
        $year = barang::selectRaw('sum(harga_barang) as total, year(year) as year')
            ->groupBy('year')->pluck('year');

        return $year;
    }

    public function getTotalHarga(){
        $barang = barang::sum('harga_barang');

        return $barang;
    }

    //Length Barang By all Lokasi
    public function getLengthBarangByLokasi(){
        $barang = barang::selectRaw('count(*) as total, lokasi_id')
            ->groupBy('lokasi_id')->pluck('total');

        return $barang;
    }
}
