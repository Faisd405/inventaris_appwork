<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jenis;

class JenisController extends Controller
{
    protected $jenis;

    public function __construct(Jenis $jenis)
    {
        $this->jenis = $jenis;
    }

    //index json
    public function index()
    {
        $jenis = $this->jenis->getJenis();
        return response()->json([
            'jenis' => $jenis
        ], 200);
    }

    //show json
    public function show($id)
    {
        $jenis = $this->jenis->getJenisById($id);
        return response()->json([
            'jenis' => $jenis
        ], 200);
    }

    //store json
    public function store(Request $request)
    {
        $request['jumlah'] = 0;
        $jenis = $this->jenis->postJenis($request);
        return response()->json([
            'jenis' => $jenis
        ], 200);
    }

    //update json
    public function update(Request $request, $id)
    {
        $jenis = $this->jenis->putJenis($request, $id);
        return response()->json([
            'jenis' => $jenis
        ], 200);
    }

    //destroy json
    public function destroy($id)
    {
        $jenis = $this->jenis->deleteJenis($id);
        return response()->json([
            'jenis' => $jenis
        ], 200);
    }

    public function indexNama()
    {
        $jenis = $this->jenis->pluck('jenis_buku');
        $jumlah = $this->jenis->pluck('jumlah');
        return response()->json([
            'jenis' => $jenis,
            'jumlah' => $jumlah
        ], 200);
    }
}
