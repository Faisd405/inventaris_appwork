<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\Kategori;
use App\Models\Pengguna;
use App\Models\History;
use App\Models\Buku;

class InventarisController extends Controller
{
    protected $barang;
    protected $kategori;
    protected $pengguna;
    protected $history;
    protected $buku;

    //construct
    public function __construct(
        Barang $barang,
        Kategori $kategori,
        Pengguna $pengguna,
        History $history,
        Buku $buku
    ) {
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
        $tanggal = History::with('pengguna', 'barang')->where('pengguna_id', 1)->
            where('tanggal_akhir_penggunaan', 'Masih Terpakai')->
            distinct()->select('tanggal_awal_penggunaan')->
            pluck('tanggal_awal_penggunaan');
        
            $kategoriBarang = $this->kategori->getKategori()->pluck('nama_kategori');

        for ($i = 0; $i < count($kategoriBarang); $i++) {
            for ($j = 0; $j < count($tanggal); $j++) {
                $kategori[$i][$j] = $this->history->getHistoryByPenggunaId(1)->
                    where('tanggal_awal_penggunaan', $tanggal[$j])->
                    where('tanggal_akhir_penggunaan', 'Masih Terpakai')->
                    where('barang.kategori_id', $i + 1)->count();
            }
        }

        return response()->json([
            'kategori' => $kategori,
            'kategori_barang' => $kategoriBarang,
            'tanggal' => $tanggal,
        ], 200);
    }

    public function hargaPerPengguna()
    {
        // $barang = $this->barang->getBarangByPenggunaId();

        for ($i = 0; $i < count($this->pengguna->getPengguna()); $i++) {
            $pengguna[$i] = $this->pengguna->getPengguna()[$i]->name;
            $harga[$i] = $this->barang->getBarangByPenggunaId(
                $this->pengguna->getPengguna()[$i]->id)->sum('harga_barang');
        }

        return response()->json([
            'pengguna' => $pengguna,
            'harga' => $harga,

        ], 200);
    }
}
