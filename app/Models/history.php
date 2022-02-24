<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    //
    protected $table = 'history';
    protected $fillable = [
        'id',
        'pengguna_id',
        'barang_id',
        'tanggal_awal_penggunaan',
        'tanggal_akhir_penggunaan',
        'keterangan',
        'status'
    ];

    public function barang()
    {
        return $this->belongsTo('App\Models\Barang', 'barang_id');
    }

    public function pengguna()
    {
        return $this->belongsTo('App\Models\pengguna', 'pengguna_id');
    }

    public function barangHistory($barang)
    {
        $history = new History;
        $history->pengguna_id = $barang->pengguna_id;
        $history->barang_id = $barang->id;
        $history->tanggal_awal_penggunaan = date('d-m-Y');
        $history->tanggal_akhir_penggunaan = "Masih Terpakai";
        $history->keterangan = "Barang " . $barang->nama_barang . " dipakai pada tanggal " . date('d-m-Y');
        $history->status = "Masih Digunakan";
        $history->save();
    }

    //scopeWithHistory
    public function scopeWithHistory()
    {
        return $this->with('barang', 'pengguna');
    }

    public function getHistory()
    {
        return $this->scopeWithHistory()->get();
    }

    public function getHistoryById($id)
    {
        return $this->scopeWithHistory()->find($id);
    }

    public function getHistoryByPenggunaId($id)
    {
        return $this->scopeWithHistory()->where('pengguna_id', $id)->get();
    }

    public function getHistoryDetailByBarangId($id)
    {
        return $this->scopeWithHistory()->where('barang_id', $id)->get();
    }

    public function getTanggalAwalUnique()
    {
        return $this->distinct()->select('tanggal_awal_penggunaan')->get();
    }

    public function getHistoryDetailByBarangIdAndDate($barang_id, $tanggal_awal, $tanggal_akhir)
    {
        if ($barang_id && $tanggal_awal && $tanggal_akhir) {
            $history = $this->scopeWithHistory()
                ->where('barang_id', $barang_id)
                ->where('tanggal_awal_penggunaan', $tanggal_awal)
                ->where('tanggal_akhir_penggunaan', $tanggal_akhir)->get();
        } elseif ($barang_id && $tanggal_awal) {
            $history = $this->scopeWithHistory()
                ->where('barang_id', $barang_id)
                ->where('tanggal_awal_penggunaan', $tanggal_awal)->get();
        } elseif ($barang_id && $tanggal_akhir) {
            $history = $this->scopeWithHistory()
                ->where('barang_id', $barang_id)
                ->where('tanggal_akhir_penggunaan', $tanggal_akhir)->get();
        } elseif ($barang_id) {
            $history = $this->scopeWithHistory()
                ->where('barang_id', $barang_id)->get();
        }
        return $history;
    }

    public function putHistory($request, $barang)
    {
        $historyupdate = self::find($request->id_history);
        if ($historyupdate) {
            $historyupdate->tanggal_akhir_penggunaan = date('d-m-Y');
            if ($request->keterangan) {
                $historyupdate->keterangan = $request->keterangan;
            }
            if (!$request->keterangan) {
                $historyupdate->keterangan = "Pengguna " . $barang->nama_barang . " Diganti pada tanggal " . date('d-m-Y');
            }
            $historyupdate->status = "Tidak Digunakan";
            $historyupdate->update();
        }

        $history = new History;
        $history->pengguna_id = $request->pengguna_id;
        $history->barang_id = $barang->id;
        $history->tanggal_awal_penggunaan = date('d-m-Y');
        $history->tanggal_akhir_penggunaan = "Masih Terpakai";
        $history->keterangan = "Barang " . $barang->nama_barang . " dipakai pada tanggal " . date('d-m-Y');
        $history->status = "Masih Digunakan";
        $history->save();
    }

    public function updateHistory($request, $barang, $id)
    {
        $history = self::where('barang_id', $id)->orderBy('id', 'desc')->first();
        if ($history) {
            $history->tanggal_akhir_penggunaan = date('d-m-Y');
            if ($request->keterangan != "undefined") {
                $history->keterangan = $request->keterangan;
            }
            if ($request->keterangan == "undefined") {
                $history->keterangan = "Pengguna " . $barang->nama_barang . " Diganti pada tanggal " . date('d-m-Y');
            } else {
                $history->keterangan = "Pengguna " . $barang->nama_barang . " Diganti pada tanggal " . date('d-m-Y');
            }
            $history->status = "Tidak Digunakan";
            $history->update();
        }

        $history = new History;
        $history->pengguna_id = $request->pengguna_id;
        $history->barang_id = $id;
        $history->tanggal_awal_penggunaan = date('d-m-Y');
        $history->tanggal_akhir_penggunaan = "Masih Terpakai";
        $history->keterangan = "Barang " . $barang->nama_barang . " dipakai pada tanggal " . date('d-m-Y');
        $history->status = "Masih Digunakan";
        $history->save();
    }

    public function deleteHistory($id)
    {
        $history = self::find($id);
        $history->delete();
    }
}
