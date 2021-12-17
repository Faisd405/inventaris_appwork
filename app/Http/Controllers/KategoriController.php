<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\kategori;
use App\Models\barang;

class KategoriController extends Controller
{
    //index json
    public function index()
    {
        $kategori = kategori::with('sifat')->get();
        return response([
            'success' => true,
            'message' => 'List Semua kategori',
            'kategori' => $kategori,
        ], 200);
    }

    public function store(Request $request)
    {
        $request->merge([
            'jumlah' => 0
        ]);
        $kategori = kategori::create($request->all());

        if ($kategori){
            return response()->json([
            'success' => true,
            'message' => 'kategori Berhasil Ditambahkan!',
            'kategori'    => $kategori
        ], 200); }
        else {
            return response()->json([
                'success' => false,
                'message' => 'kategori Tidak Berhasil Ditambahkan!',
                'kategori'    => $kategori
            ], 404);
        }
    }

    public function indexnama(){
        $namakategori = kategori::pluck('nama_kategori');
        $jumlah = kategori::pluck('jumlah');
        return response([
            'success' => true,
            'message' => 'List Semua kategori',
            'kategori' => $namakategori,
            'jumlah' => $jumlah,
        ], 200);
    }

    public function destroy($id)
    {
        $kategori = kategori::find($id);
        if ($kategori->delete()) {
            return response()->json([
                'success' => true,
                'message' => 'kategori Berhasil Dihapus!'
            ], 200);
        }
    }

    public function update(Request $request, $id)
    {
        $kategori = kategori::find($id);
        $kategori->update($request->all());
        return response()->json([
            'success' => true,
            'message' => 'kategori Berhasil Diupdate!'
        ], 200);
    }

    public function show($id)
    {
        $kategori = kategori::find($id);
        $barang = barang::where('kategori_id', $id)->get();
        return response()->json([
            'success' => true,
            'message' => 'kategori Berhasil Ditampilkan!',
            'kategori'    => $kategori,
            'barang' => $barang
        ], 200);
    }
}
