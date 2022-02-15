<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\pengajuan;
use Illuminate\Support\Facades\File;

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
        $imageName = $this->image($request);
        return response()->json([
            'pengajuan' => $this->pengajuan->postPengajuan($request, $imageName),
        ], 200);
    }

    public function update(Request $request, $id){
        return response()->json([
            'pengajuan' => $this->pengajuan->putPengajuan($request, $id),
        ], 200);
    }

    public function destroy($id){
        $pengajuan = $this->pengajuan->getPengajuanById($id);
        $this->deleteImage($pengajuan->image);
        return response()->json([
            'pengajuan' => $this->pengajuan->deletePengajuan($id),
        ], 200);
    }

    public function showByUserId($id){
        return response()->json([
            'pengajuan' => $this->pengajuan->getPengajuanByUserId($id),
        ], 200);
    }


    public function image($request){
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:6048',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('pengajuan'), $imageName);
        } else {
            $imageName = "default.jpg";
        }
        return $imageName;
    }

    public function deleteImage($image){
        if ($image != "default.jpg") {
            File::delete('pengajuan/' . $image);
        }
    }
}
