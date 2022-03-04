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
}
