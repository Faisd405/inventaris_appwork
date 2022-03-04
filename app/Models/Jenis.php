<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jenis extends Model
{
    //
    protected $table = 'jenis';
    protected $fillable = ['jenis_buku', 'jumlah'];

    public function buku()
    {
        return $this->hasMany('App\Models\Buku', 'jenis_id', 'id');
    }

    public function scopeWithJenis($query)
    {
        return $query->with('Buku');
    }

    public function getJenis()
    {
        $jenis = self::WithJenis()->get();
        return $jenis;
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function getJenisById($id)
    {
        $jenis = self::WithJenis()->find($id);
        return $jenis;
    }

    public function postJenis($request)
    {
        $jenis = self::create($request->all());
        return $jenis;
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function putJenis($request, $id)
    {
        $jenis = self::find($id);
        $jenis->update($request->all());
        return $jenis;
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function deleteJenis($id)
    {
        $jenis = self::find($id);
        $jenis->delete();
        return $jenis;
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function add($id)
    {
        $jenis = self::find($id);
        $jenis->jumlah = $jenis->jumlah + 1;
        $jenis->save();
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function minus($id)
    {
        $jenis = self::find($id);
        $jenis->jumlah = $jenis->jumlah - 1;
        $jenis->save();
    }
}
