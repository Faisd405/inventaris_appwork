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
        // length kategori with getTanggalAwalUnique and kategori_barang
        // $kategori = $this->history->getHistoryByPenggunaId(1)->where('tanggal_akhir_penggunaan', 'Masih Terpakai')->where('barang.kategori_id', 2)->count();
        // $tanggal_awal = $this->history->getTanggalAwalUnique()->pluck('tanggal_awal_penggunaan');
        // $kategori = $this->history->getHistoryByPenggunaId(1)->where('tanggal_awal_penggunaan', '08-02-2022')->where('tanggal_akhir_penggunaan', 'Masih Terpakai')->where('barang.kategori_id', 1)->count();

        $tanggal = history::with('pengguna', 'barang')->where('pengguna_id', 1)->where('tanggal_akhir_penggunaan', 'Masih Terpakai')->distinct()->select('tanggal_awal_penggunaan')->pluck('tanggal_awal_penggunaan');
        $kategori_barang = $this->kategori->getKategori()->pluck('nama_kategori');


        // for ($i = 0; $i < count($tanggal); $i++) {
        //     $kategori[$i] = $this->history->getHistoryByPenggunaId(1)->where('tanggal_awal_penggunaan', $tanggal[$i])->where('tanggal_akhir_penggunaan', 'Masih Terpakai')->where('barang.kategori_id', 1)->count();
        // }

        for ($i = 0; $i < count($kategori_barang); $i++) {
            for ($j = 0; $j < count($tanggal); $j++) {
                $kategori[$i][$j] = $this->history->getHistoryByPenggunaId(1)->where('tanggal_awal_penggunaan', $tanggal[$j])->where('tanggal_akhir_penggunaan', 'Masih Terpakai')->where('barang.kategori_id', $i + 1)->count();
            }
        }

        return response()->json([
            'kategori' => $kategori,
            'kategori_barang' => $kategori_barang,
            'tanggal' => $tanggal,
        ], 200);
    }
}
