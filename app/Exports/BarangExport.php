<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use App\Models\barang;
use Maatwebsite\Excel\Events\AfterSheet;

class BarangExport implements FromQuery, WithMapping, WithHeadings, ShouldAutoSize, WithEvents
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
            $barang->fungsi,
            $barang->harga_barang,
            $barang->lokasi->lokasi,
            $barang->pengguna->name,
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
            'Fungsi',
            'Harga Barang',
            'Lokasi',
            'Nama Pemakai',
        ];
    }

    public function title(): string
    {

        $name='Laporan Barang '.date('d-m-Y');
        return $name;
    }

    // afterSheet total harga_barang dan total barang
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function(AfterSheet $event){
                ++$this->rows;
                $total_harga_barang = $this->rows+1;
                $total_barang = $this->rows+2;
                $event->sheet->getDelegate()->setCellValue('A'. $total_harga_barang, 'Total Harga Barang');
                $event->sheet->getDelegate()->setCellValue('A'. $total_barang, 'Total Barang');
                $event->sheet->mergeCells('B'. $total_harga_barang.':J'. $total_harga_barang);
                $event->sheet->mergeCells('B'. $total_barang.':J'. $total_barang);
                $event->sheet->getDelegate()->setCellValue('B'. $total_harga_barang, '=SUM(G2:G'.$this->rows.')');
                $event->sheet->getDelegate()->setCellValue('B'. $total_barang, '=COUNT(G2:G'.$this->rows.')');
            },
        ];
    }
}
