<?php

namespace App\Exports;

use App\Models\barang;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class BarangExport implements WithHeadings,FromQuery,WithMapping
{
    /**
    * @return \Illuminate\Support\Collection
    */

    public function map($barang): array
    {
        return [
            $barang->nama_barang,
            $barang->detail_barang,
            $barang->kategori->kategori,
            $barang->fungsi,
            $barang->harga_barang,
            $barang->lokasi->lokasi,
            $barang->jenis->jenis,
            $barang->user->name,
            $barang->image,
        ];
    }

    public function headings(): array
    {
        return [
            'Nama Barang',
            'Detail Barang',
            'Kategori',
            'Fungsi',
            'Harga Barang',
            'Lokasi',
            'Jenis',
            'User',
            'Image',
        ];
    }
}
?>
