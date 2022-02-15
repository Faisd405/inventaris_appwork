<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\barang;
use App\Models\kategori;
use App\Models\pengguna;
use App\Models\history;
use App\Models\buku;

class InventarisController extends Controller
{
    //construct
    public function __construct(barang $barang, kategori $kategori, pengguna $pengguna, history $history, buku $buku)
    {
        $this->barang = $barang;
        $this->kategori = $kategori;
        $this->pengguna = $pengguna;
        $this->history = $history;
        $this->buku = $buku;
    }

    public function lengthBarangdanBuku()
    {
        $barang = $this->barang->getLengthBarang();
        $buku = $this->buku->getLengthBuku();
        return response()->json([
            'inventaris' => ['barang', 'buku'],
            'total' => [$barang, $buku]
        ], 200);
    }

    public function inventarisTidakDipakai()
    {
        // $kategori = $this->history->getHistoryByPenggunaId(1)->where('tanggal_akhir_penggunaan', 'Masih Terpakai')->pluck('barang.kategori.nama_kategori');
        // length kategori1 kategori2
        $kategori = $this->history->getHistoryByPenggunaId(1)->where('tanggal_akhir_penggunaan', 'Masih Terpakai')->pluck('barang.kategori.nama_kategori');
        $tanggal = history::with('pengguna', 'barang')->where('pengguna_id', 1)->where('tanggal_akhir_penggunaan','Masih Terpakai')->distinct()->select('tanggal_awal_penggunaan')->pluck('tanggal_awal_penggunaan');
        $kategori_barang = $this->kategori->getKategori()->pluck('nama_kategori');

        return response()->json([
            'kategori' => $kategori,
            'kategori_barang' => $kategori_barang,
            'tanggal' => $tanggal,
        ], 200);
    }
}
