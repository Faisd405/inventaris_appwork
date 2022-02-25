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
    public function scopeWithHistory($query)
    {
        return $query->with('barang', 'pengguna');
    }

    public function getHistory()
    {
        return $this->WithHistory()->get();
    }

    public function getHistoryById($id)
    {
        return $this->WithHistory()->find($id);
    }

    public function getHistoryByPenggunaId($id)
    {
        return $this->WithHistory()->where('pengguna_id', $id)->get();
    }

    public function getHistoryDetailByBarangId($id)
    {
        return $this->WithHistory()->where('barang_id', $id)->get();
    }

    public function getTanggalAwalUnique()
    {
        return $this->distinct()->select('tanggal_awal_penggunaan')->get();
    }

    public function getHistoryDetailByBarangIdAndDate($barangId, $tanggalAwal, $tanggalAkhir)
    {
        if ($barangId && $tanggalAwal && $tanggalAkhir) {
            $history = $this->WithHistory()
                ->where('barang_id', $barangId)
                ->where('tanggal_awal_penggunaan', $tanggalAwal)
                ->where('tanggal_akhir_penggunaan', $tanggalAkhir)->get();
        } elseif ($barangId && $tanggalAwal) {
            $history = $this->WithHistory()
                ->where('barang_id', $barangId)
                ->where('tanggal_awal_penggunaan', $tanggalAwal)->get();
        } elseif ($barangId && $tanggalAkhir) {
            $history = $this->WithHistory()
                ->where('barang_id', $barangId)
                ->where('tanggal_akhir_penggunaan', $tanggalAkhir)->get();
        } elseif ($barangId) {
            $history = $this->WithHistory()
                ->where('barang_id', $barangId)->get();
        }
        return $history;
    }

    public function putHistory($request, $barang)
    {
        $historyUpdate = self::find($request->id_history);
        if ($historyUpdate) {
            $historyUpdate->tanggal_akhir_penggunaan = date('d-m-Y');
            if ($request->keterangan) {
                $historyUpdate->keterangan = $request->keterangan;
            }
            if (!$request->keterangan) {
                $historyUpdate->keterangan = "Pengguna " . $barang->nama_barang . " Diganti pada tanggal " . date('d-m-Y');
            }
            $historyUpdate->status = "Tidak Digunakan";
            $historyUpdate->update();
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
