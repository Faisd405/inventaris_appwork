<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lokasi;

class LokasiController extends Controller
{
    //index json
    public function index()
    {
        $lokasi = lokasi::all();
        return response([
            'success' => true,
            'message' => 'List Semua Lokasi',
            'lokasi' => $lokasi,
        ], 200);
    }

    //show json
    public function show($id)
    {
        $lokasi = lokasi::find($id);
        return response([
            'success' => true,
            'message' => 'List Semua Lokasi',
            'lokasi' => $lokasi,
        ], 200);
    }

    //store json
    public function store(Request $request)
    {
        $request->validate([
            'lokasi' => 'required',
            'kordinat' => 'required',
        ]);

        $lokasi = new lokasi;
        $lokasi->lokasi = $request->lokasi;
        $lokasi->kordinat = $request->kordinat;
        $lokasi->save();

        return response([
            'success' => true,
            'message' => 'Lokasi Berhasil Ditambahkan!',
            'lokasi' => $lokasi,
        ], 200);
    }

    //update json
    public function update(Request $request, $id)
    {
        $request->validate([
            'lokasi' => 'required',
            'kordinat' => 'required',
        ]);

        $lokasi = lokasi::find($id);
        $lokasi->lokasi = $request->lokasi;
        $lokasi->kordinat = $request->kordinat;
        $lokasi->save();

        return response([
            'success' => true,
            'message' => 'Lokasi Berhasil Diubah!',
            'lokasi' => $lokasi,
        ], 200);
    }

    //destroy json
    public function destroy($id)
    {
        $lokasi = lokasi::find($id);
        $lokasi->delete();

        return response([
            'success' => true,
            'message' => 'Lokasi Berhasil Dihapus!',
            'lokasi' => $lokasi,
        ], 200);
    }
}
