<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sifat extends Model
{
    protected $table = 'sifat';

    protected $fillable = ['sifat_kategori'];

    public function Kategori()
    {
        return $this->belongsTo('App\Models\Kategori');
    }

    public function getSifat()
    {
        return self::all();
    }

    public function getSifatById($id)
    {
        return self::find($id);
    }

    public function postSifat($request)
    {
        return self::create($request->all());
    }

    public function updateSifat($request, $id)
    {
        $sifat = self::find($id);
        return $sifat->update($request->all());
    }

    public function deleteSifat($id)
    {
        $sifat = self::find($id);
        return $sifat->delete();
    }
}
