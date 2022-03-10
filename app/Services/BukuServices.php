<?php

namespace App\Services;

use Illuminate\Support\Facades\File;

class BukuServices
{
    public function image($request)
    {
        $imageName = "default.jpg";
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:6000',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('gambarBuku'), $imageName);
        }
        return $imageName;
    }

    public function lampiran($request)
    {
        $lampiranName = "default.pdf";

        if ($request->hasFile('lampiran')) {
            $extension = $request['lampiran']->getClientOriginalExtension();
            $request->validate([
                'lampiran' => 'required|mimes:png,jpg,jpeg,pdf,docx,doc',
            ]);
            if ($extension == 'pdf') {
                $lampiranName = time() . '.' . $request->lampiran->extension();
                $request->lampiran->move(public_path('lampiranBuku'), $lampiranName);
            }
            if ($extension == 'jpg' || $extension == 'png' || $extension == 'jpeg') {
                $lampiranName = time() . '.' . $request->lampiran->extension();
                $request->lampiran->move(public_path('lampiranBuku'), $lampiranName);
            }
        }

        return $lampiranName;
    }   

    public function gantiFoto($request, $buku)
    {
        $imageName = $buku->image;
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:6000',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('gambarBuku'), $imageName);
            if ($buku->image != "default.jpg") {
                File::delete('gambarBuku/' . $buku->image);
            }
        }

        return $imageName;
    }

    public function updateLampiran($request, $buku)
    {
        $lampiranName = $buku->lampiran;
        if ($request->hasFile('lampiran')) {
            $extension = $request['lampiran']->getClientOriginalExtension();
            $request->validate([
                'lampiran' => 'required|mimes:png,jpg,jpeg,pdf,docx,doc',
            ]);
            if ($extension == 'pdf') {
                $lampiranName = time() . '.' . $request->lampiran->extension();
                $request->lampiran->move(public_path('lampiranBuku'), $lampiranName);
            }
            if ($extension == 'jpg' || $extension == 'png' || $extension == 'jpeg') {
                $lampiranName = time() . '.' . $request->lampiran->extension();
                $request->lampiran->move(public_path('lampiranBuku'), $lampiranName);
            }
        }

        return $lampiranName;
    }
}