<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\barang;

class pengguna extends Model
{
    //
    protected $table = 'pengguna';

    protected $fillable = [
        'name','ktp','jabatan','surat_komitmen'
    ];

    public function barang()
    {
        return $this->belongsTo('App\Models\barang');
    }

    public function buku()
    {
        return $this->belongsTo('App\Models\buku');
    }

    public function getPengguna()
    {
        return pengguna::all();
    }

    public function getPenggunaById($id)
    {
        return pengguna::find($id);
    }

    public function postPengguna($request){
        // Merge surat_komitmen with request
        $request->merge(['surat_komitmen' => 'default.pdf']);
        // Create new pengguna
        $pengguna = pengguna::create($request->all());
        // Return new pengguna
        return $pengguna;
    }

    public function putPengguna($request, $id){
        $pengguna = pengguna::find($id);

        $request->merge(['surat_komitmen' => $pengguna->surat_komitmen]);

        $pengguna->update($request->all());

        return $pengguna;
    }

    public function deletePengguna($id){
        $pengguna = pengguna::find($id);
        return $pengguna->delete();
    }

    public function getBarangbyPengguna($id)
    {
        return barang::where('pengguna_id', $id)->with('pengguna', 'kategori', 'lokasi')->get();
    }

    public function getBukuByPengguna($id)
    {
        return buku::where('pengguna_id', $id)->with('pengguna', 'jenis', 'lokasi')->get();
    }

    public function getBarangByNoPengguna($id)
    {
        return barang::where('pengguna_id','!=' , $id)->with('pengguna', 'kategori', 'lokasi')->get();
    }
}
