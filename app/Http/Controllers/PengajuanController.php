<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pengajuan;
use Illuminate\Support\Facades\File;
use App\Services\PengajuanServices;

class PengajuanController extends Controller
{
    //
    protected $pengajuan;

    public function __construct(Pengajuan $pengajuan)
    {
        $this->pengajuan = $pengajuan;
    }
    public function index()
    {
        return response()->json([
            'pengajuan' => $this->pengajuan->getPengajuan(),
        ], 200);
    }

    public function show($id)
    {
        return response()->json([
            'pengajuan' => $this->pengajuan->getPengajuanById($id),
        ], 200);
    }

    public function store(Request $request, PengajuanServices $pengajuanServices)
    {
        $imageName = $pengajuanServices->image($request);
        return response()->json([
            'pengajuan' => $this->pengajuan->postPengajuan($request, $imageName),
        ], 200);
    }

    public function update(Request $request, $id)
    {
        return response()->json([
            'pengajuan' => $this->pengajuan->putPengajuan($request, $id),
        ], 200);
    }

    public function destroy($id)
    {
        $pengajuan = $this->pengajuan->getPengajuanById($id);
        $this->deleteImage($pengajuan->image);
        return response()->json([
            'pengajuan' => $this->pengajuan->deletePengajuan($id),
        ], 200);
    }

    public function showByUserId($id)
    {
        return response()->json([
            'pengajuan' => $this->pengajuan->getPengajuanBypenggunaId($id),
        ], 200);
    }

    public function deleteImage($image)
    {
        if ($image != "default.jpg") {
            File::delete('pengajuan/' . $image);
        }
    }
}
