<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class history extends Model
{
    //
    protected $table = 'history';
    protected $fillable = ['id', 'pengguna_id', 'barang_id', 'tanggal_awal_penggunaan', 'tanggal_akhir_penggunaan', 'keterangan', 'status'];

    public function barang()
    {
        return $this->belongsTo('App\Models\barang', 'barang_id');
    }

    public function pengguna()
    {
        return $this->belongsTo('App\Models\pengguna', 'pengguna_id');
    }

    public function barangHistory($barang)
    {
        $history = new history;
        $history->pengguna_id = $barang->pengguna_id;
        $history->barang_id = $barang->id;
        $history->tanggal_awal_penggunaan = date('d-m-Y');
        $history->tanggal_akhir_penggunaan = "Masih Terpakai";
        $history->keterangan = "Barang " . $barang->nama_barang . " dipakai pada tanggal " . date('d-m-Y');
        $history->status = "Masih Digunakan";
        $history->save();
    }

    public function getHistory()
    {
        return $this->with('pengguna', 'barang')->get();
    }

    public function getHistoryDetailByBarangId($id)
    {
        return $this->with('pengguna', 'barang')->where('barang_id', $id)->get();
    }

    public function putHistory($request, $barang)
    {
        $historyupdate = history::find($request->id_history);
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

        $history = new history;
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
        $history = history::where('barang_id', $id)->orderBy('id', 'desc')->first();
        if ($history) {
            $history->tanggal_akhir_penggunaan = date('d-m-Y');
            if ($request->keterangan != "undefined") {
                $history->keterangan = $request->keterangan;
            }
            if ($request->keterangan == "undefined") {
                $history->keterangan = "Pengguna " . $barang->nama_barang . " Diganti pada tanggal " . date('d-m-Y');
            }
            else {
                $history->keterangan = "Pengguna " . $barang->nama_barang . " Diganti pada tanggal " . date('d-m-Y');
            }
            $history->status = "Tidak Digunakan";
            $history->update();
        }

        $history = new history;
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
        $history = history::find($id);
        $history->delete();
    }
}
