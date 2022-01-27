<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lokasi;
use App\Models\barang;
use App\Models\buku;

class LokasiController extends Controller
{
    public function __construct(lokasi $lokasi, barang $barang, buku $buku)
    {
        $this->lokasi = $lokasi;
        $this->barang = $barang;
        $this->buku = $buku;
    }
    //index json
    public function index()
    {
        $lokasi = $this->lokasi->getLokasi();
        return response()->json([
            'lokasi' => $lokasi
        ], 200);
    }

    //show json
    public function show($id)
    {
        $lokasi = $this->lokasi->getLokasiById($id);
        $barang = $this->barang->getBarangByLokasiId($id);
        $buku = $this->buku->getBukuByLokasiId($id);
        return response()->json([
            'lokasi' => $lokasi,
            'barang' => $barang,
            'buku' => $buku
        ], 200);
    }

    //store json
    public function store(Request $request)
    {
        $lokasi = $this->lokasi->postLokasi($request);
        return response()->json([
            'lokasi' => $lokasi
        ], 200);
    }

    //update json
    public function update(Request $request, $id)
    {
        $lokasi = $this->lokasi->putLokasi($request, $id);
        return response()->json([
            'lokasi' => $lokasi
        ], 200);
    }

    //destroy json
    public function destroy($id)
    {
        $lokasi = $this->lokasi->deleteLokasi($id);
        return response()->json([
            'lokasi' => $lokasi
        ], 200);
    }
}
