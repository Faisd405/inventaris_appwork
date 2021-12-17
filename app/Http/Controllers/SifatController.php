<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\sifat;

class SifatController extends Controller
{
    //index json
    public function index()
    {
        $sifat = sifat::all();
        return response([
            'success' => true,
            'message' => 'List Semua kategori',
            'sifat' => $sifat,
        ], 200);
    }
}
