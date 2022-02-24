<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Buku;
use App\Models\Jenis;

class BukuController extends Controller
{
    protected $buku;
    protected $jenis;

    public function __construct(Buku $buku, Jenis $jenis)
    {
        $this->buku = $buku;
        $this->jenis = $jenis;
    }

    //index with json
    public function index()
    {
        $buku = $this->buku->getBuku();
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function show($id)
    {
        $buku = $this->buku->getBukuById($id);
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function store(Request $request)
    {
        $buku = $this->buku->postBuku($request);
        $this->jenis->add($buku->jenis_id);
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $buku = $this->buku->getBukuById($id);
        $bukuUpdate = $this->buku->putBuku($request, $id);
        if ($buku->jenis_id != $request->jenis_id) {
            $this->jenis->minus($buku->jenis_id);
            $this->jenis->add($request->jenis_id);
        }
        return response()->json([
            'buku' => $bukuUpdate
        ], 200);
    }

    public function destroy($id)
    {
        $buku = $this->buku->deleteBuku($id);
        $this->jenis->minus($buku->jenis_id);
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    //get total harga
    public function getTotalHarga()
    {
        $total = $this->buku->getTotalHarga();
        //parse int
        $total = (int) $total;
        return response()->json([
            'total' => $total
        ], 200);
    }
}
