<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\barang;
use App\Models\kategori;
use App\Models\pengguna;
use PDF;
use Illuminate\Support\Facades\File;
use App\Exports\BarangExport;
use App\Models\history;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;

class BarangController extends Controller
{
    protected $barang;
    protected $kategori;
    protected $pengguna;
    protected $history;
    public function __construct(barang $barang, kategori $kategori, pengguna $pengguna, history $history)
    {
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
    public function total_harga()
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

    public function image($request)
    {
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        } else {
            $imageName = "default.jpg";
        }
        return $imageName;
    }

    public function lampiran($request)
    {
        if ($request->hasFile('lampiran')) {
            $request->validate([
                'lampiran' => 'required|mimes:pdf|max:2048',
            ]);
            $lampiranName = time() . '.' . $request->lampiran->extension();
            $request->lampiran->move(public_path('lampiran'), $lampiranName);
        } else {
            $lampiranName = "default.pdf";
        }

        return $lampiranName;
    }

    public function store(Request $request)
    {
        $imageName = $this->image($request);
        $lampiranName = $this->lampiran($request);
        $barang = $this->barang->postBarang($request, $imageName, $lampiranName);

        $this->kategori->add($barang->kategori_id);

        $this->history->barangHistory($barang);

        return response()->json([
            'barang' => $barang
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
        $pengguna_barang = barang::find($id);

        if ($request->pengguna_id != $pengguna_barang->pengguna_id) {
            $this->history->updateHistory($request, $barang, $id);
        }
        $this->barang->putBarang($request, $id);


        return response()->json([
            'barang' => $barang,
        ], 200);
    }

    public function gantifoto($request, $barang)
    {
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
            if ($barang->image != "default.jpg") {
                File::delete('images/' . $barang->image);
            }
        } else {
            $imageName = $barang->image;
        }

        return $imageName;
    }

    public function updateLampiran($request, $barang)
    {

        if ($request->hasFile('lampiran')) {
            $request->validate([
                'lampiran' => 'required|file|mimes:pdf|max:2048'
            ]);
            $lampiranName = time() . '.' . $request->lampiran->extension();
            $request->lampiran->move(public_path('lampiran'), $lampiranName);
            if ($barang->lampiran != "default.pdf") {
                File::delete('lampiran/' . $barang->lampiran);
            }
        } else {
            $lampiranName = $barang->lampiran;
        }

        return $lampiranName;
    }

    public function destroyLampiran($id){
        $barang = $this->barang->getBarangById($id);
        if ($barang->lampiran != "default.pdf") {
            File::delete('lampiran/' . $barang->lampiran);
            $barang->lampiran = "default.pdf";
            $barang->save();
        }

    }

    public function destroyImage($id){
        $barang = $this->barang->getBarangById($id);
        if ($barang->image != "default.jpg") {
            File::delete('images/' . $barang->image);
            $barang->image = "default.jpg";
            $barang->save();
        }
    }

    public function update(Request $request, $id)
    {
        $barang = $this->barang->getBarangById($id);
        $pengguna_barang = barang::find($id);

        if ($request->pengguna_id != $pengguna_barang->pengguna_id) {
            $this->history->updateHistory($request, $barang, $id);
        }

        $this->barang->putBarang($request, $id);

        $imageName = $this->gantifoto($request, $barang);
        $updateLampiran = $this->updateLampiran($request, $barang);

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

    public function barang_pdf()
    {
        $name = 'Laporan Barang ' . date('d-m-Y') . '.pdf';
        $barang = barang::all();
        $pdf = PDF::loadView('barang.barang_pdf', compact('barang'))
            ->setPaper('a4', 'landscape');
        return $pdf->stream($name);
    }

    public function qrbarang_pdf()
    {
        $name = 'Laporan QR Barang ' . date('d-m-Y') . '.pdf';
        $barang = barang::with('pengguna', 'kategori')->get();
        $pdf = PDF::loadView('barang.qrbarang_pdf', compact('barang'))
            ->setPaper('a4', 'landscape');
        return $pdf->stream($name);
    }

    public function detailbarang_pdf($id)
    {
        $name = 'Laporan Detail Barang ' . date('d-m-Y') . '.pdf';
        $barang = barang::find($id);

        $pdf = PDF::loadview('barang.detailbarang_pdf', compact('barang'));
        return $pdf->stream($name);
    }

    public function barang_excel()
    {
        $name = 'Laporan Barang ' . date('d-m-Y') . '.xlsx';
        return Excel::download(new BarangExport, $name);
    }
}
