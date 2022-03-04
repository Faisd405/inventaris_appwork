<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permintaan extends Model
{
    //
    protected $table = 'permintaan';
    protected $fillable = ['barang_id', 'pengguna_id', 'keterangan'];

    public function barang()
    {
        return $this->belongsTo('App\Barang');
    }

    public function pengguna()
    {
        return $this->belongsTo('App\Pengguna');
    }

    public function scopeWithPermintaan($query)
    {
        return $query->with('barang', 'pengguna');
    }

    public function getPermintaan()
    {
        return $this->WithPermintaan()->get();
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getPermintaanById($id)
    {
        return $this->WithPermintaan()->find($id);
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getPermintaanByBarangId($id)
    {
        return $this->WithPermintaan()->where('barang_id', $id)->get();
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getPermintaanByPenggunaId($id)
    {
        return $this->WithPermintaan()->where('pengguna_id', $id)->get();
    }
}
