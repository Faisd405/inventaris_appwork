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
use App\Models\History;
use Maatwebsite\Excel\Events\AfterSheet;

class RiwayatExport implements FromQuery, WithMapping, WithHeadings, ShouldAutoSize, WithEvents
{
    use Exportable;
    private $rows = 0;

    protected $barangId;
    protected $tanggalAwal;
    protected $tanggalAkhir;

    public function __construct($barangId, $tanggalAwal, $tanggalAkhir)
    {
        $this->barangId = $barangId;
        $this->tanggalAwal = $tanggalAwal;
        $this->tanggalAkhir = $tanggalAkhir;
    }

    public function query()
    {
        // if ($barang_id && $tanggal_awal && $tanggal_akhir) {
        //     $history = $this
        //         ->where('barang_id', $barang_id)
        //         ->where('tanggal_awal_penggunaan', $tanggal_awal)
        //         ->where('tanggal_akhir_penggunaan', $tanggal_akhir);
        // }
        // elseif ($barang_id && $tanggal_awal) {
        //     $history = $this
        //         ->where('barang_id', $barang_id)
        //         ->where('tanggal_awal_penggunaan', $tanggal_awal);
        // }
        // elseif ($barang_id && $tanggal_akhir) {
        //     $history = $this
        //         ->where('barang_id', $barang_id)
        //         ->where('tanggal_akhir_penggunaan', $tanggal_akhir);
        // }
        // elseif ($barang_id) {
        //     $history = $this
        //         ->where('barang_id', $barang_id);
        // }

        if ($this->barangId && $this->tanggalAwal && $this->tanggalAkhir) {
            return History::query()
                ->where('barang_id', $this->barangId)
                ->where('tanggal_awal_penggunaan', $this->tanggalAwal)
                ->where('tanggal_akhir_penggunaan', $this->tanggalAkhir);
        } elseif ($this->barangId && $this->tanggalAwal) {
            return History::query()
                ->where('barang_id', $this->barangId)
                ->where('tanggal_awal_penggunaan', $this->tanggalAwal);
        } elseif ($this->barangId && $this->tanggalAkhir) {
            return History::query()
                ->where('barang_id', $this->barangId)
                ->where('tanggal_akhir_penggunaan', $this->tanggalAkhir);
        } elseif ($this->barangId) {
            return History::query()
                ->where('barang_id', $this->barangId);
        }

    }

    public function map($history): array
    {
        ++$this->rows;
        return [
            $this->rows,
            $history->barang->nama_barang,
            $history->tanggal_awal_penggunaan,
            $history->tanggal_akhir_penggunaan,
            $history->pengguna->name,
            $history->keterangan,
            $history->status,
        ];
    }

    public function headings(): array
    {
        return [
            'No',
            'Nama Barang',
            'Tanggal Awal Penggunaan',
            'Tanggal Akhir Penggunaan',
            'Nama Pemakai',
            'Keterangan',
            'Status',
        ];
    }

    public function title(): string
    {
        return 'Riwayat Detail';
    }


    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                ++$this->rows;
                $cellRange = 'A1:W1';
                $event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setSize(14);
            }
        ];
    }
}
