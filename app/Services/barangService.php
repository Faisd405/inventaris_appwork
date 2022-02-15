<?php
namespace App\Services;

class barangServices {
    protected $namespace = 'App\Services';

    // handleUploadedImage
    public function handleUploadedImage($request) {
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:6048',
            ]);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        } else {
            $imageName = "default.jpg";
        }

        return $imageName;
    }

}
?>
