<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\jenis;

class JenisController extends Controller
{
    public function __construct(jenis $jenis)
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
}
