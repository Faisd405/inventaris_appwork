<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\barang;
use App\Models\kategori;
use App\Models\User;
use PDF;
use Illuminate\Support\Facades\File;
use App\Exports\BarangExport;
use App\Exports\UserBarangExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;

class BarangController extends Controller
{
    //index with json
    public function index()
    {
        $barang = barang::with('user', 'kategori', 'jenis', 'lokasi')->get();
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

    public function indexHarga()
    {
        $harga_barang = barang::selectRaw('sum(harga_barang) as total, year(year) as year')->groupBy('year')->pluck('total');
        $year = barang::selectRaw('sum(harga_barang) as total, year(year) as year')->groupBy('year')->pluck('year');

        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'harga_barang'    => $harga_barang,
            'year'    => $year
        ], 200);
    }

    //total harga barang
    public function total_harga()
    {
        $barang = barang::sum('harga_barang');
        return response()->json([
            'success' => true,
            'message' => 'barang Berhasil Ditampilkan!',
            'total'    => $barang
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
            'lokasi_id' => 'required',
            'jenis_id' => 'required',
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
        $barang->lokasi_id = $request->lokasi_id;
        $barang->jenis_id = $request->jenis_id;
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
        $barang = barang::with('user', 'kategori', 'lokasi', 'jenis')->find($id);
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
        $barang = barang::all();
        $pdf = PDF::loadView('barang.barang_pdf', compact('barang'));
        return $pdf->stream('barang.pdf');
    }

    public function qrbarang_pdf()
    {
        $barang = barang::with('user', 'kategori')->get();
        $pdf = PDF::loadView('barang.qrbarang_pdf', compact('barang'));
        return $pdf->stream('barang.pdf');
    }

    public function detailbarang_pdf($id)
    {
        $barang = barang::find($id);

    	$pdf = PDF::loadview('barang.detailbarang_pdf', compact('barang'));
    	return $pdf->stream('detailbarang_pdf.pdf');
    }

    public function barang_excel()
    {
        return Excel::download(new BarangExport, 'barang.xlsx');
    }

    public function userbarang_excel()
    {
        return Excel::download(new UserBarangExport, 'userbarang.xlsx');
    }
}
