<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permintaan;
use App\Models\Barang;
use App\Models\Pengguna;

class PermintaanController extends Controller
{
    //
    protected $permintaan;
    protected $barang;
    protected $pengguna;

    public function __construct(Permintaan $permintaan, Barang $barang, Pengguna $pengguna)
    {
        $this->permintaan = $permintaan;
        $this->barang = $barang;
        $this->pengguna = $pengguna;
    }

    public function index()
    {
        $permintaan = $this->permintaan->getPermintaan();

        return response()->json([
            'status' => 'success',
            'permintaan' => $permintaan
        ], 200);
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function show($id)
    {
        $permintaan = $this->permintaan->getPermintaanById($id);

        return response()->json([
            'status' => 'success',
            'permintaan' => $permintaan
        ], 200);
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function showByBarangId($id)
    {
        $permintaan = $this->permintaan->getPermintaanByBarangId($id);

        return response()->json([
            'status' => 'success',
            'permintaan' => $permintaan
        ], 200);
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function showByPenggunaId($id)
    {
        $permintaan = $this->permintaan->getPermintaanByPenggunaId($id);

        return response()->json([
            'status' => 'success',
            'permintaan' => $permintaan
        ], 200);
    }

    public function store(Request $request)
    {
        $permintaan = $this->permintaan->postPermintaan($request);

        return response()->json([
            'status' => 'success',
            'permintaan' => $permintaan
        ], 200);
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function update(Request $request, $id)
    {
        $permintaan = $this->permintaan->putPermintaan($request, $id);

        return response()->json([
            'status' => 'success',
            'permintaan' => $permintaan
        ], 200);
    }

    /**
     * @SuppressWarnings(ShortVariable)
     */
    public function destroy($id)
    {
        $permintaan = $this->permintaan->deletePermintaan($id);

        return response()->json([
            'status' => 'success',
            'permintaan' => $permintaan
        ], 200);
    }

    public function setuju(Request $request)
    {
        $data = $this->permintaan->getPermintaanById($request->id);

        $setuju = $this->barang->setujuPermintaanBarang($data);

        $this->permintaan->deletePermintaanByBarangId($data->barang_id);

        return response()->json([
            'status' => 'success',
            'permintaan' => $setuju
        ], 200);
    }
}
