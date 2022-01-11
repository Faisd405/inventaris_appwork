<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\kategori;
use App\Models\barang;

class KategoriController extends Controller
{
    public function __construct(kategori $kategori, barang $barang)
    {
        $this->kategori = $kategori;
        $this->barang = $barang;
    }

    //index json
    public function index()
    {
        $kategori = $this->kategori->getKategori();
        return response()->json([
            'kategori' => $kategori
        ], 200);
    }

    public function store(Request $request)
    {
        $kategori = $this->kategori->postKategori($request);

        if ($kategori) {
            return response()->json([
                'kategori'    => $kategori
            ], 200);
        }
    }

    public function indexnama()
    {
        $kategori = $this->kategori->pluck('nama_kategori');
        $jumlah = $this->kategori->pluck('jumlah');
        return response()->json([
            'kategori' => $kategori,
            'jumlah' => $jumlah
        ], 200);
    }

    public function destroy($id)
    {
        $kategori = $this->kategori->deleteKategori($id);

        if ($kategori) {
            return response()->json([
                'kategori'    => $kategori
            ], 200);
        }
    }

    public function update(Request $request, $id)
    {
        $kategori = $this->kategori->putKategori($request, $id);

        if ($kategori) {
            return response()->json([
                'kategori'    => $kategori
            ], 200);
        }
    }

    public function show($id)
    {
        $kategori = $this->kategori->getKategoriById($id);
        $barang = $this->barang->getBarangByKategoriId($id);
        return response()->json([
            'kategori'    => $kategori,
            'barang' => $barang
        ], 200);
    }
}
