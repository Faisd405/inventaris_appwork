<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\jenis;

class JenisController extends Controller
{
    //index json
    public function index()
    {
        $jenis = Jenis::all();
        return response([
            'success' => true,
            'message' => 'List Semua Jenis',
            'jenis' => $jenis,
        ], 200);
    }

    //show json
    public function show($id)
    {
        $jenis = Jenis::find($id);
        return response([
            'success' => true,
            'message' => 'List Semua Jenis',
            'jenis' => $jenis,
        ], 200);
    }

    //store json
    public function store(Request $request)
    {
        $request->validate([
            'jenis_barang' => 'required',
        ]);

        $jenis = new Jenis;
        $jenis->jenis_barang = $request->jenis_barang;
        $jenis->save();

        return response([
            'success' => true,
            'message' => 'Jenis Berhasil Ditambahkan!',
            'jenis' => $jenis,
        ], 200);
    }

    //update json
    public function update(Request $request, $id)
    {
        $request->validate([
            'jenis_barang' => 'required',
        ]);

        $jenis = Jenis::find($id);
        $jenis->jenis_barang = $request->jenis_barang;
        $jenis->save();

        return response([
            'success' => true,
            'message' => 'Jenis Berhasil Diubah!',
            'jenis' => $jenis,
        ], 200);
    }

    //destroy json
    public function destroy($id)
    {
        $jenis = Jenis::find($id);
        $jenis->delete();

        return response([
            'success' => true,
            'message' => 'Jenis Berhasil Dihapus!',
            'jenis' => $jenis,
        ], 200);
    }
}
