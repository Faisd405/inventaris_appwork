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
        return $this->belongsTo('App\Models\Barang');
    }

    public function pengguna()
    {
        return $this->belongsTo('App\Models\Pengguna');
    }

    public function scopeWithPermintaan($query)
    {
        return $query->with('barang.kategori', 'pengguna');
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

    public function postPermintaan($request)
    {
        $permintaan = $this->create($request->all());
        return $permintaan;
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function putPermintaan($request, $id)
    {
        $permintaan = $this->find($id);
        $permintaan->update($request->all());
        return $permintaan;
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function deletePermintaan($id)
    {
        $permintaan = $this->find($id);
        $permintaan->delete();
    }
}
