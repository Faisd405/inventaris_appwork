<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use App\Models\barang;

// custom export barang with headings and data from database

class BarangExport implements FromQuery, WithMapping, WithColumnFormatting,WithHeadings, ShouldAutoSize
{
    use Exportable;
    private $rows = 0;

    public function query()
    {
        return barang::query();
    }

    public function map($barang): array
    {
        ++$this->rows;
        return [
            $this->rows,
            $barang->nama_barang,
            $barang->kode_barang,
            $barang->detail_barang,
            $barang->kategori->nama_kategori,
            $barang->jenis->jenis_barang,
            $barang->fungsi,
            $barang->harga_barang,
            $barang->lokasi->lokasi,
            $barang->user->name,
        ];
    }

    public function columnFormats(): array
    {
        return [
            'H' => '"RP. "#,##0.00_-',
        ];
    }

    public function headings(): array
    {
        return [
            'No',
            'Nama Barang',
            'Kode Barang',
            'Detail Barang',
            'Kategori',
            'Jenis',
            'Fungsi',
            'Harga Barang',
            'Lokasi',
            'User',
        ];
    }

    public function title(): string
    {
        return 'Barang';
    }


}
