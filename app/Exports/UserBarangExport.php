<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use App\Models\User;
use App\Models\barang;

class UserBarangExport implements FromQuery, WithMapping,WithHeadings, ShouldAutoSize
{
    use Exportable;

    private $rows = 0;

    public function query()
    {
        return User::query();
    }

    public function map($user): array
    {
        ++$this->rows;
        return [
            $this->rows,
            $user->name,
        ];
    }

    public function headings(): array
    {
        return [
            'No',
            'Nama Pemakai',
        ];
    }

    public function title(): string
    {
        return 'User';
    }

}
?>
