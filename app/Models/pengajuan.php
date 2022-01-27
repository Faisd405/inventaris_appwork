<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class pengajuan extends Model
{
    //
    protected $table = 'pengajuan';

    protected $fillable = [
        'nama_barang', 'detail_barang', 'fungsi', 'harga_barang', 'jumlah_barang', 'status', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\user');
    }

    public function getPengajuan(){
        return pengajuan::with('user')->get();
    }

    public function getPengajuanById($id){
        return pengajuan::with('user')->find($id);
    }

    public function postPengajuan($request){
        $pengajuan = $request->merge(['status' => 'Belum diterima']);
        return pengajuan::create($pengajuan->all());
    }

    public function putPengajuan($request, $id){
        $pengajuan = pengajuan::find($id);
        return $pengajuan->update($request->all());
    }

    public function deletePengajuan($id){
        $pengajuan = pengajuan::find($id);
        return $pengajuan->delete();
    }

    public function getPengajuanByUserId($id){
        return pengajuan::where('user_id', $id)->get();
    }
}
