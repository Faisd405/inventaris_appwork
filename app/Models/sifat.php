<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class sifat extends Model
{
    protected $table = 'sifat';

    protected $fillable = ['sifat_kategori'];

    public function kategori()
    {
        return $this->belongsTo('App\Models\kategori');
    }

    public function getSifat()
    {
        return sifat::all();
    }

    public function getSifatById($id)
    {
        return sifat::find($id);
    }

    public function postSifat($request){
        return sifat::create($request->all());
    }

    public function updateSifat($request, $id){
        $sifat = sifat::find($id);
        return $sifat->update($request->all());
    }

    public function deleteSifat($id){
        $sifat = sifat::find($id);
        return $sifat->delete();
    }
}
