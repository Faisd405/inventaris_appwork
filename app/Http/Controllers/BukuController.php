<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\buku;

class BukuController extends Controller
{
    public function __construct(buku $buku)
    {
        $this->buku = $buku;
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
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $buku = $this->buku->putBuku($request, $id);
        return response()->json([
            'buku' => $buku
        ], 200);
    }

    public function destroy($id)
    {
        $buku = $this->buku->deleteBuku($id);
        return response()->json([
            'buku' => $buku
        ], 200);
    }
}
