<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\pengajuan;

class PengajuanController extends Controller
{
    //
    public function __construct(pengajuan $pengajuan)
    {
        $this->pengajuan = $pengajuan;
    }
    public function index(){
        return response()->json([
            'pengajuan' => $this->pengajuan->getPengajuan(),
        ], 200);
    }

    public function show($id){
        return response()->json([
            'pengajuan' => $this->pengajuan->getPengajuanById($id),
        ], 200);
    }

    public function store(Request $request){
        return response()->json([
            'pengajuan' => $this->pengajuan->postPengajuan($request),
        ], 200);
    }

    public function update(Request $request, $id){
        return response()->json([
            'pengajuan' => $this->pengajuan->putPengajuan($request, $id),
        ], 200);
    }

    public function destroy($id){
        return response()->json([
            'pengajuan' => $this->pengajuan->deletePengajuan($id),
        ], 200);
    }

    public function showByUserId($id){
        return response()->json([
            'pengajuan' => $this->pengajuan->getPengajuanByUserId($id),
        ], 200);
    }



}
