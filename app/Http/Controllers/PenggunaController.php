<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\barang;
use App\Models\pengguna;
use App\Models\buku;
use App\Http\Requests\PenggunaRequest;

class PenggunaController extends Controller
{
    public function __construct(pengguna $pengguna, barang $barang)
    {
        $this->pengguna = $pengguna;
        $this->barang = $barang;
    }

    public function respons($pengguna){
        return response()->json([
            'pengguna' => $pengguna,
        ]);
    }

    public function index() {
        $pengguna = $this->pengguna->getPengguna();
        return $this->respons($pengguna);
    }

    //Index barang where pengguna_id = 1
    public function nopengguna()
    {
        $barang = $this->pengguna->getBarangbyPengguna(1);
        return response()->json([
            'success' => true,
            'message' => 'List Semua barang',
            'barang' => $barang,
        ], 200);
    }

    public function pengguna()
    {
        $barang = $this->pengguna->getBarangbyNoPengguna(1);
        return response()->json([
            'success' => true,
            'message' => 'List Semua barang',
            'barang' => $barang,
        ], 200);
    }

    // show json
    public function show($id) {
        $pengguna = $this->pengguna->getPenggunaById($id);
        $barang = $this->pengguna->getBarangbyPengguna($id);
        $buku = $this->pengguna->getBukuByPengguna($id);

        if ($barang && $pengguna) {
            return response()->json([
                'barang'    => $barang,
                'pengguna' => $pengguna,
                'buku' => $buku,

            ], 200);
        }
    }

    // create json
    public function store(PenggunaRequest $request) {
        $pengguna = $this->pengguna->postPengguna($request);
        return $this->respons($pengguna);
    }

    // update json
    public function update(PenggunaRequest $request, $id) {
        $pengguna = $this->pengguna->putPengguna($request, $id);
        return $this->respons($pengguna);
    }

    // delete json
    public function destroy($id) {
        $pengguna = $this->pengguna->deletePengguna($id);
        return $this->respons($pengguna);
    }

}
