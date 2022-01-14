<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class barang extends Model
{
    protected $table = 'barang';
    protected $fillable = ['nama_barang', 'kode_barang', 'detail_barang', 'kategori_id', 'fungsi', 'harga_barang', 'lokasi_id', 'jenis_id', 'pengguna_id', 'year', 'image', 'jumlah_barang','lampiran'];

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

    public function jenis()
    {
        return $this->hasOne('App\Models\jenis', 'id', 'jenis_id');
    }

    public function history()
    {
        return $this->belongsTo('App\Models\history', 'barang_id', 'id');
    }

    public function getBarang()
    {
        return barang::with('pengguna', 'kategori', 'lokasi', 'jenis')->get();
    }

    public function getBarangByKategoriId($id)
    {
        return barang::with('pengguna', 'kategori', 'lokasi', 'jenis')->where('kategori_id', $id)->get();
    }

    public function getBarangById($id)
    {
        return barang::with('pengguna', 'kategori', 'lokasi', 'jenis')->find($id);
    }

    public function postBarang($request, $imageName, $lampiranName)
    {

        $barang = new barang;
        $barang->image = $imageName;
        $barang->lampiran = $lampiranName;
        $barang->nama_barang = $request->nama_barang;
        $barang->kode_barang = $request->kode_barang;
        $barang->detail_barang = $request->detail_barang;
        $barang->kategori_id = $request->kategori_id;
        $barang->fungsi = $request->fungsi;
        $barang->harga_barang = $request->harga_barang;
        $barang->lokasi_id = $request->lokasi_id;
        $barang->jenis_id = $request->jenis_id;
        $barang->pengguna_id = $request->pengguna_id;
        $barang->jumlah_barang = $request->jumlah_barang;
        $barang->year = $request->year;

        $barang->save();

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
}
