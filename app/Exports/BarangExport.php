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
use App\Models\Barang;
use Maatwebsite\Excel\Events\AfterSheet;

class BarangExport implements
    WithColumnFormatting,
    FromQuery,
    WithMapping,
    WithHeadings,
    ShouldAutoSize,
    WithEvents
{
    use Exportable;
    private $rows = 0;

    public function query()
    {
        return Barang::orderBy('pengguna_id', 'asc');
    }

    public function map($barang): array
    {
        ++$this->rows;
        return [
            $this->rows,
            $barang->nama_barang,
            $barang->detail_barang,
            $barang->kategori->nama_kategori,
            $barang->fungsi,
            $barang->harga_barang,
            $barang->lokasi->lokasi,
            $barang->detail_lokasi,
            $barang->pengguna->name,
            $barang->year,
            $barang->jumlah_barang,
        ];
    }

    public function headings(): array
    {
        return [
            'No',
            'Nama Barang',
            'Detail Barang',
            'Kategori',
            'Fungsi',
            'Harga Barang',
            'Lokasi',
            'Detail Lokasi',
            'Nama Pemakai',
            'Tahun',
            'Jumlah Barang',
        ];
    }

    public function title(): string
    {

        $name = 'Laporan Barang ' . date('d-m-Y');
        return $name;
    }

    // afterSheet total harga_barang dan total barang
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                ++$this->rows;
                $totalHargaBarang = $this->rows + 1;
                $totalBarang = $this->rows + 2;
                $event->sheet->getDelegate()->setCellValue('A' . $totalHargaBarang, 'Total Harga Barang');
                $event->sheet->getDelegate()->setCellValue('A' . $totalBarang, 'Total Barang');
                $event->sheet->mergeCells('B' . $totalHargaBarang . ':K' . $totalHargaBarang);
                $event->sheet->mergeCells('B' . $totalBarang . ':K' . $totalBarang);
                $event->sheet->getDelegate()->setCellValue('B' . $totalHargaBarang, '=SUM(F2:F' . $this->rows . ')');
                $event->sheet->getDelegate()->setCellValue('B' . $totalBarang, '=COUNT(F2:F' . $this->rows . ')');

                // format harga_barang dan total barang
                $event->sheet->getDelegate()->getStyle('B' . $totalHargaBarang)->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_CURRENCY_IDR);
                $event->sheet->getDelegate()->getStyle('B' . $totalBarang)->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_NUMBER);
            },
        ];
    }

    public function columnFormats(): array
    {
        return [
            'F' => NumberFormat::FORMAT_CURRENCY_IDR,
        ];
    }
}
