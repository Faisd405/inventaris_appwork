<?php

namespace App\Services;
use Illuminate\Support\Facades\File;

class PenggunaServices
{
    public function updateLampiranPDF($request, $pengguna)
    {
        if ($request->hasFile('surat_komitmen')) {
            $file = $request->file('surat_komitmen');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('/surat_komitmen'), $filename);

            if ($pengguna->surat_komitmen != "default.pdf" || $pengguna->surat_komitmen != null) {
                File::delete('surat_komitmen/' . $pengguna->surat_komitmen);
            }
        }
        return $filename;
    }
}
