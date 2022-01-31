<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\barang;
use App\Models\history;
use PDF;

class HistoryController extends Controller
{
    //
    public function __construct(history $history, barang $barang)
    {
        $this->history = $history;
        $this->barang = $barang;
    }

    public function index()
    {
        $history = $this->history->getHistory();
        return response([
            'success' => true,
            'message' => 'List Semua history',
            'history' => $history,
        ], 200);
    }

    public function show($id)
    {
        $history = $this->history->getHistoryDetail($id);
        return response([
            'success' => true,
            'message' => 'List Semua history',
            'history' => $history,
        ], 200);
    }

    public function HistoryPDFDetail($id)
    {
        $history = $this->history->getHistoryDetail($id);
        $pdf = PDF::loadView('barang.riwayatbarangdetail_pdf', compact('history'));
        $name = 'Laporan Riwayat Detail Barang ' . date('d-m-Y') . '.pdf';
        return $pdf->stream($name);
    }

    public function HistoryPDF()
    {
        $history = $this->history->getHistory();
        $pdf = PDF::loadView('barang.riwayatbarang_pdf', compact('history'));
        $name = 'Laporan Riwayat Barang ' . date('d-m-Y') . '.pdf';
        return $pdf->stream($name);
    }

    public function update(Request $request, $id)
    {
        $barangs = $this->barang->getBarangById($id);
        if ($barangs->pengguna_id != $request->pengguna_id) {
            $barang = $this->barang->putBarang($request, $id);
            $history = $this->history->putHistory($request, $barang);
        }

        return response()->json([
            'success' => true,
            'barang' => $barang,
            'history'    => $history
        ], 200);
    }

    public function destroy($id)
    {
        $history = $this->history->deleteHistory($id);

        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Dihapus!',
            'data'    => $history
        ], 200);
    }
}
