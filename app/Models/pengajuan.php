<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class pengajuan extends Model
{
    //
    protected $table = 'pengajuan';

    protected $fillable = [
        'nama_barang', 'detail_barang', 'fungsi', 'harga_barang', 'jumlah_barang', 'status', 'pengguna_id', 'image'
    ];

    public function pengguna()
    {
        return $this->belongsTo('App\Models\pengguna');
    }

    public function getPengajuan(){
        return pengajuan::with('pengguna')->get();
    }

    public function getPengajuanById($id){
        return pengajuan::with('pengguna')->find($id);
    }

    public function postPengajuan($request, $imageName){
        $pengajuan = new pengajuan;
        $pengajuan->nama_barang = $request->nama_barang;
        $pengajuan->detail_barang = $request->detail_barang;
        $pengajuan->fungsi = $request->fungsi;
        $pengajuan->harga_barang = $request->harga_barang;
        $pengajuan->jumlah_barang = $request->jumlah_barang;
        $pengajuan->status = 'Belum diterima';
        $pengajuan->pengguna_id = $request->pengguna_id;
        $pengajuan->image = $imageName;
        $pengajuan->save();
        return $pengajuan;
    }

    public function putPengajuan($request, $id){
        $pengajuan = pengajuan::find($id);
        return $pengajuan->update($request->all());
    }

    public function deletePengajuan($id){
        $pengajuan = pengajuan::find($id);
        return $pengajuan->delete();
    }

    public function getPengajuanBypenggunaId($id){
        return pengajuan::where('pengguna_id', $id)->get();
    }
}
