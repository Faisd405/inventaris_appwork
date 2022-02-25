<?php

namespace App\Services;

class PengajuanServices
{

    public function image($request)
    {
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:6048',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('pengajuan'), $imageName);
        } else {
            $imageName = "default.jpg";
        }
        return $imageName;
    }
}
