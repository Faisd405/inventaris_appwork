<?php

namespace App\Services;

class BarangServices
{
    public function image($request)
    {
        $imageName = "default.jpg";
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:6000',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }
        return $imageName;
    }


    public function lampiran($request)
    {
        $lampiranName = "default.pdf";

        if ($request->hasFile('lampiran')) {
            $extension = $request['lampiran']->getClientOriginalExtension();
            $request->validate([
                'lampiran' => 'required|max:2048|mimes:png,jpg,jpeg,pdf,docx,doc',
            ]);
            if ($extension == 'pdf') {
                $lampiranName = time() . '.' . $request->lampiran->extension();
                $request->lampiran->move(public_path('lampiran'), $lampiranName);
            }
            if ($extension == 'jpg' || $extension == 'png' || $extension == 'jpeg') {
                $lampiranName = time() . '.' . $request->lampiran->extension();
                $request->lampiran->move(public_path('lampiran'), $lampiranName);
            }
        }

        return $lampiranName;
    }

    public function gantiFoto($request, $barang)
    {
        $imageName = $barang->image;
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:6000',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
            if ($barang->image != "default.jpg") {
                File::delete('images/' . $barang->image);
            }
        }

        return $imageName;
    }
    
    public function updateLampiran($request, $barang)
    {
        if ($request->hasFile('lampiran')) {
            $extension = $request['lampiran']->getClientOriginalExtension();
            $request->validate([
                'lampiran' => 'required|max:2048|mimes:png,jpg,jpeg,pdf,docx,doc',
            ]);
            if ($extension == 'pdf') {
                $lampiranName = time() . '.' . $request->lampiran->extension();
                $request->lampiran->move(public_path('lampiran'), $lampiranName);
            }
            if ($extension == 'jpg' || $extension == 'png' || $extension == 'jpeg') {
                $lampiranName = time() . '.' . $request->lampiran->extension();
                $request->lampiran->move(public_path('lampiran'), $lampiranName);
            }
            if ($barang->lampiran != "default.pdf") {
                File::delete('lampiran/' . $barang->lampiran);
            }
        } else {
            $lampiranName = $barang->lampiran;
        }

        return $lampiranName;
    }
}
