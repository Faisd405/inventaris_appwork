<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Buku;
use App\Models\Jenis;
use App\Services\BukuServices;
use Illuminate\Support\Facades\File;
use PDF;

class BukuController extends Controller
{
    protected $buku;
    protected $jenis;

    public function __construct(Buku $buku, Jenis $jenis)
    {
        $this->buku = $buku;
        $this->jenis = $jenis;
    }

    //index with json
    public function index()
    {
        $buku = $this->buku->getBuku();
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function show($id)
    {
        $buku = $this->buku->getBukuById($id);
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function store(Request $request, BukuServices $bukuServices)
    {
        $imageName = $bukuServices->image($request);
        $lampiranName = $bukuServices->lampiran($request);

        $buku = $this->buku->postBuku($request, $imageName, $lampiranName);
        $this->jenis->add($buku->jenis_id);
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function update(Request $request, $id, BukuServices $bukuServices)
    {
        $buku = $this->buku->getBukuById($id);

        $imageName = $bukuServices->gantiFoto($request, $buku);
        $lampiranName = $bukuServices->updateLampiran($request, $buku);

        $bukuUpdate = $this->buku->putBuku($request, $id, $imageName, $lampiranName);
        if ($buku->jenis_id != $request->jenis_id) {
            $this->jenis->minus($buku->jenis_id);
            $this->jenis->add($request->jenis_id);
        }
        return response()->json([
            'buku' => $bukuUpdate
        ], 200);
    }

    public function destroy($id)
    {
        $buku = $this->buku->deleteBuku($id);

        if ($buku->image != "default.jpg") {
            File::delete('gambarBuku/' . $buku->image);
        }
        if ($buku->lampiran != "default.pdf") {
            File::delete('lampiranBuku/' . $buku->lampiran);
        }

        $this->jenis->minus($buku->jenis_id);
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    //get total harga
    public function getTotalHarga()
    {
        $total = $this->buku->getTotalHarga();
        //parse int
        $total = (int) $total;
        return response()->json([
            'total' => $total
        ], 200);
    }

    public function destroyImage($id)
    {
        $buku = $this->buku->getBukuById($id);
        if ($buku->image != "default.jpg") {
            File::delete('gambarBuku/' . $buku->image);
        }
        $buku->image = "default.jpg";
        $buku->save();
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function destroyLampiran($id)
    {
        $buku = $this->buku->getBukuById($id);
        if ($buku->lampiran != "default.pdf") {
            File::delete('lampiranBuku/' . $buku->lampiran);
        }
        $buku->lampiran = "default.pdf";
        $buku->save();
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function detailBukuPDF($id){
        $name = 'Laporan Detail Buku ' . date('d-m-Y') . '.pdf';
        $buku = $this->buku->getBukuById($id);

        $pdf = \PDF::loadView('buku.detailbuku_pdf', compact('buku'));
        return $pdf->stream($name);
    }
}
