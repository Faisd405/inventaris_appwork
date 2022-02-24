<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;
use App\Models\Kategori;
use App\Models\Pengguna;
use PDF;
use Illuminate\Support\Facades\File;
use App\Exports\BarangExport;
use App\Models\History;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;
use App\Services\BarangServices;

class BarangController extends Controller
{
    protected $barang;
    protected $kategori;
    protected $pengguna;
    protected $history;

    public function __construct(
        Barang $barang,
        Kategori $kategori,
        Pengguna $pengguna,
        History $history
    ) {
        $this->barang = $barang;
        $this->kategori = $kategori;
        $this->pengguna = $pengguna;
        $this->history = $history;
    }

    public function respons($barang)
    {
        return response()->json([
            'barang' => $barang,
        ]);
    }

    //index with json
    public function index()
    {
        $barang = $this->barang->getBarang();
        return response([
            'barang' => $barang,
        ], 200);
    }

    public function indexHarga()
    {
        $harga_barang = $this->barang->getHarga();
        $year = $this->barang->getYear();

        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'harga_barang' => $harga_barang,
            'year'    => $year
        ], 200);
    }

    //total harga barang
    public function totalHarga()
    {
        $total_harga = $this->barang->getTotalHarga();
        // parse int
        $total_harga = (int) $total_harga;
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'total'    => $total_harga
        ], 200);
    }

    public function store(Request $request, BarangServices $barangServices)
    {
        $imageName = $barangServices->image($request);
        $lampiranName = $barangServices->lampiran($request);
        $barang = $this->barang->postBarang($request, $imageName, $lampiranName);

        $this->kategori->add($barang->kategori_id);

        $this->history->barangHistory($barang);

        return response()->json([
            'barang' => $barang,
        ], 200);
    }

    public function destroy($id)
    {
        $barang = $this->barang->deleteBarang($id);
        $this->kategori->minus($barang->kategori_id);

        if ($barang->image != "default.jpg") {
            File::delete('images/' . $barang->image);
        }

        if ($barang->lampiran != "default.pdf") {
            File::delete('lampiran/' . $barang->lampiran);
        }

        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Dihapus!',
            'data'    => $barang
        ], 200);
    }

    public function relasi(Request $request, $id)
    {
        $barang = $this->barang->getBarangById($id);
        $pengguna_barang = Barang::find($id);

        if ($request->pengguna_id != $pengguna_barang->pengguna_id) {
            $this->history->updateHistory($request, $barang, $id);
        }
        $this->barang->putBarang($request, $id);


        return response()->json([
            'barang' => $barang,
        ], 200);
    }

    public function destroyLampiran($id)
    {
        $barang = $this->barang->getBarangById($id);
        if ($barang->lampiran != "default.pdf") {
            File::delete('lampiran/' . $barang->lampiran);
            $barang->lampiran = "default.pdf";
            $barang->save();
        }
    }

    public function destroyImage($id)
    {
        $barang = $this->barang->getBarangById($id);
        if ($barang->image != "default.jpg") {
            File::delete('images/' . $barang->image);
            $barang->image = "default.jpg";
            $barang->save();
        }
    }

    public function update(Request $request, $id, BarangServices $barangServices)
    {
        $barang = $this->barang->getBarangById($id);
        $pengguna_barang = Barang::find($id);

        if ($request->pengguna_id != $pengguna_barang->pengguna_id) {
            $this->history->updateHistory($request, $barang, $id);
        }

        $this->barang->putBarang($request, $id,);

        $imageName = $barangServices->gantiFoto($request, $barang);
        $updateLampiran = $barangServices->updateLampiran($request, $barang);

        if ($barang->kategori_id != $request->kategori_id) {
            $this->kategori->minus($barang->kategori_id);
            $this->kategori->add($request->kategori_id);
        }

        $this->barang->updateBarang($request, $barang, $imageName, $updateLampiran);

        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Diupdate!',
            'barang'    => $barang,
        ], 200);
    }

    public function show($id)
    {
        $barang = $this->barang->getBarangById($id);
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'barang'    => $barang,
        ], 200);
    }

    public function detailBarangPDF($id)
    {
        $name = 'Laporan Detail Barang ' . date('d-m-Y') . '.pdf';
        $barang = Barang::find($id);

        $pdf = PDF::loadview('barang.detailbarang_pdf', compact('barang'));
        return $pdf->stream($name);
    }

    public function barangExcel()
    {
        $name = 'Laporan Barang ' . date('d-m-Y') . '.xlsx';
        return Excel::download(new BarangExport, $name);
    }
}
