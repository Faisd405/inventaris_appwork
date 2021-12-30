<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\barang;
use App\Models\pengguna;

class PenggunaController extends Controller
{
    public function index() {
        $pengguna = pengguna::with('barang')->get();
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'pengguna'    => $pengguna
        ], 200);
    }

    //Index barang where user_id = 4VM
    public function nopengguna()
    {
        $barang = barang::where('pengguna_id', '1')->get();
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'barang'    => $barang
        ], 200);
    }

    // show json with barang
    public function show($id) {
        $pengguna = pengguna::find($id);
        $barang = barang::where('pengguna_id', $id)->with('pengguna', 'kategori', 'jenis', 'lokasi')->get();

        if ($barang && $pengguna) {
            return response()->json([
                'success' => true,
                'message' => 'Barang dan User!',
                'barang'    => $barang,
                'pengguna' => $pengguna
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'barangs Tidak Ditemukan!',
                'data'    => ''
            ], 404);
        }
    }

    // create json
    public function store(Request $request) {
        $pengguna = new pengguna;
        $pengguna->name = $request->name;
        $pengguna->save();

        return response()->json([
            'success' => true,
            'message' => 'Pengguna Berhasil Ditambahkan!',
            'pengguna'    => $pengguna
        ], 200);
    }

    // update json
    public function update(Request $request, $id) {
        $pengguna = pengguna::find($id);
        $pengguna->name = $request->name;
        $pengguna->update();

        return response()->json([
            'success' => true,
            'message' => 'Pengguna Berhasil Diupdate!',
            'pengguna'    => $pengguna
        ], 200);
    }

    // delete json
    public function destroy($id) {
        $pengguna = pengguna::find($id);
        $pengguna->delete();

        return response()->json([
            'success' => true,
            'message' => 'Pengguna Berhasil Dihapus!',
            'pengguna'    => $pengguna
        ], 200);
    }

}
