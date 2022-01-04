<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\barang;
use App\Models\history;
use PDF;

class HistoryController extends Controller
{
    //
    public function index()
    {
        $history = history::with('pengguna', 'barang')->get();
        return response([
            'success' => true,
            'message' => 'List Semua history',
            'history' => $history,
        ], 200);
    }

    public function show($id)
    {
        $history = history::where('barang_id', $id)->with('pengguna', 'barang')->get();
        return response([
            'success' => true,
            'message' => 'List Semua history',
            'history' => $history,
        ], 200);
    }

    public function HistoryPDFDetail($id)
    {
        $history = history::where('barang_id', $id)->with('pengguna', 'barang')->latest()->get();
        $pdf = PDF::loadView('barang.riwayatbarangdetail_pdf', compact('history'));
        $name = 'Laporan Riwayat Detail Barang ' . date('d-m-Y') . '.pdf';
        return $pdf->stream($name);
    }

    public function HistoryPDF()
    {
        $history = history::with('pengguna', 'barang')->latest()->get();
        $pdf = PDF::loadView('barang.riwayatbarang_pdf', compact('history'));
        $name = 'Laporan Riwayat Barang ' . date('d-m-Y') . '.pdf';
        return $pdf->stream($name);
    }

    public function update(Request $request, $id)
    {
        $barang = barang::find($id);
        $barang->update($request->all());

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

        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Diupdate!',
            'barang'    => $barang,
            'history'    => $history
        ], 200);
    }

    public function destroy($id)
    {
        $history = history::find($id);
        $history->delete();

        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Dihapus!',
            'data'    => $history
        ], 200);
    }
}
