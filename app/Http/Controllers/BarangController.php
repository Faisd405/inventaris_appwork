<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\barang;
use App\Models\kategori;
use App\Models\User;
use PDF;
use Illuminate\Support\Facades\File;

class BarangController extends Controller
{
    //index with json
    public function index()
    {
        $barang = barang::with('user', 'kategori')->get();
        return response([
            'success' => true,
            'message' => 'List Semua barang',
            'barang' => $barang,
        ], 200);
    }

    //Index barang where user_id = 4VM
    public function indexUser()
    {
        $barang = barang::where('user_id', '1')->get();
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'barang'    => $barang
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_barang' => 'required',
            'kode_barang' => 'required',
            'detail_barang' => 'required',
            'kategori_id' => 'required',
            'fungsi' => 'required',
            'harga_barang' => 'required',
            'lokasi' => 'required',
            'user_id' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        $barang = new barang;
        $barang->image = $imageName;
        $barang->nama_barang = $request->nama_barang;
        $barang->kode_barang = $request->kode_barang;
        $barang->detail_barang = $request->detail_barang;
        $barang->kategori_id = $request->kategori_id;
        $barang->fungsi = $request->fungsi;
        $barang->harga_barang = $request->harga_barang;
        $barang->lokasi = $request->lokasi;
        $barang->user_id = $request->user_id;

        $kategori = kategori::find($request->kategori_id);
        $kategori->jumlah = $kategori->jumlah + 1;

        $barang->save();
        $kategori->update();

        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditambahkan!',
            'barang'    => $barang,
            'kategori'    => $kategori
        ], 200);
    }

    public function destroy($id)
    {
        $barang = barang::find($id);
        $kategori = kategori::find($barang->kategori_id);
        $kategori->jumlah = $kategori->jumlah - 1;
        $kategori->update();
        File::delete('images/' . $barang->image);

        $barang->delete();
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Dihapus!',
            'data'    => $barang
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $barang = barang::find($id);
        $barang->update($request->all());
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Diupdate!',
            'barang'    => $barang
        ], 200);
    }

    public function show($id)
    {
        $barang = barang::with('user', 'kategori')->find($id);
        $kategori = kategori::all();
        $user = User::all();
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'barang'    => $barang,
            'kategori' => $kategori,
            'user' => $user,
        ], 200);
    }

    public function barang_pdf()
    {
        $barang = barang::with('user', 'kategori')->get();
        $pdf = PDF::loadView('barang.barang_pdf', compact('barang'));
        return $pdf->stream('barang.pdf');
    }
    public function qrbarang_pdf()
    {
        $barang = barang::with('user', 'kategori')->get();
        $pdf = PDF::loadView('barang.qrbarang_pdf', compact('barang'));
        return $pdf->stream('barang.pdf');
    }
}
