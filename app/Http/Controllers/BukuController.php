<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\buku;

class BukuController extends Controller
{
    //index with json
    public function index()
    {
        $buku = buku::all();
        return response([
            'success' => true,
            'message' => 'List Semua buku',
            'buku' => $buku,
        ], 200);
    }

    public function show($id)
    {
        $buku = buku::find($id);

        if ($buku) {
            return response()->json([
                'success' => true,
                'message' => 'buku ditemukan!',
                'buku'    => $buku,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'barangs Tidak Ditemukan!',
                'data'    => ''
            ], 404);
        }
    }

    public function store(Request $request)
    {
        $buku = buku::create($request->all());
        return response()->json([
            'success' => true,
            'message' => 'buku Berhasil Ditambahkan!',
            'buku'    => $buku
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $buku = buku::find($id);
        $buku->update($request->all());
        return response()->json([
            'success' => true,
            'message' => 'buku Berhasil Diupdate!',
            'buku'    => $buku
        ], 200);
    }

    public function destroy($id)
    {
        $buku = buku::find($id);
        $buku->delete();
        return response()->json([
            'success' => true,
            'message' => 'buku Berhasil Dihapus!',
            'buku'    => $buku
        ], 200);
    }
}
