<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;
use App\Models\History;
use PDF;
use Maatwebsite\Excel\Facades\Excel;

class HistoryController extends Controller
{
    //
    protected $history;
    protected $barang;

    public function __construct(History $history, Barang $barang)
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
        $history = $this->history->getHistoryDetailByBarangId($id);
        return response([
            'success' => true,
            'message' => 'List Semua history',
            'history' => $history,
        ], 200);
    }

    public function historyPDFDetail($id)
    {
        $history = $this->history->getHistoryDetailByBarangId($id);
        $pdf = PDF::loadView('barang.riwayatbarangdetail_pdf', compact('history'));
        $name = 'Laporan Riwayat Detail Barang ' . date('d-m-Y') . '.pdf';
        return $pdf->stream($name);
    }


    public function historyPDF()
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


    public function historyDetailBarangPDF($barang_id, $tanggal_awal = NULL, $tanggal_akhir = NULL)
    {
        $history = $this->history->getHistoryDetailByBarangIdAndDate(
            $barang_id,
            $tanggal_awal,
            $tanggal_akhir
        );

        $pdf = PDF::loadView(
            'history.riwayatbarangdetail_pdf',
            compact('history', 'tanggal_awal', 'tanggal_akhir')
        );

        $name = 'Laporan Riwayat Detail Barang ' . date('d-m-Y') . '.pdf';
        return $pdf->stream($name);
    }

    public function historyDetailBarangExcel($barang_id, $tanggal_awal = NULL, $tanggal_akhir = NULL)
    {
        $name = 'Laporan Riwayat Detail Barang ' . date('d-m-Y') . '.xlsx';
        return Excel::download(new \App\Exports\RiwayatExport(
            $barang_id,
            $tanggal_awal,
            $tanggal_akhir
        ), $name);
    }
}
