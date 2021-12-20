<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\sifat;

class SifatController extends Controller
{
    //index json
    public function index()
    {
        $sifat = sifat::all();
        return response([
            'success' => true,
            'message' => 'List Semua kategori',
            'sifat' => $sifat,
        ], 200);
    }

    //store json
    public function store(Request $request)
    {
        $sifat = sifat::create($request->all());
        return response()->json([
            'success' => true,
            'message' => 'sifat Berhasil Ditambahkan!',
            'sifat'    => $sifat
        ], 200);
    }

    //show json
    public function show($id)
    {
        $sifat = sifat::find($id);
        if (!$sifat) {
            return response()->json([
                'success' => false,
                'message' => 'sifat Tidak Ditemukan!'
            ], 404);
        }
        return response()->json([
            'success' => true,
            'message' => 'sifat Ditemukan!',
            'sifat'    => $sifat
        ], 200);
    }

    //update json
    public function update(Request $request, $id)
    {
        $sifat = sifat::find($id);
        $sifat->update($request->all());
        return response()->json([
            'success' => true,
            'message' => 'sifat Berhasil Diupdate!',
            'sifat'    => $sifat
        ], 200);
    }

    //destroy json
    public function destroy($id)
    {
        $sifat = sifat::find($id);
        if (!$sifat) {
            return response()->json([
                'success' => false,
                'message' => 'sifat Tidak Ditemukan!'
            ], 404);
        }
        $sifat->delete();
        return response()->json([
            'success' => true,
            'message' => 'sifat Berhasil Dihapus!',
            'sifat'    => $sifat
        ], 200);
    }

}
