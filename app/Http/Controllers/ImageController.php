<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ImageController extends Controller
{
    //
    public function imageBackgroundLogin(Request $request){
        $image = $request->file('file');
        $imageName = 'background.jpg';
        $image->move(public_path('images/background'), $imageName);
        return response()->json(['success'=>$imageName]);
    }

    public function imageDefaultImage(Request $request){
        $image = $request->file('file');
        $imageName = 'default.jpg';
        $image->move(public_path('images'), $imageName);
        $image->move(public_path('pengajuan'), $imageName);
        return response()->json(['success'=>$imageName]);
    }

    //imageDefaultPDF
    public function imageDefaultPDF(Request $request){
        $image = $request->file('file');
        $imageName = 'default.pdf';
        $image->move(public_path('lampiran'), $imageName);
        return response()->json(['success'=>$imageName]);
    }

    //imageDefaultSuratKomitmen
    public function imageDefaultSuratKomitmen(Request $request){
        $image = $request->file('file');
        $imageName = 'default.pdf';
        $image->move(public_path('surat_komitmen'), $imageName);
        return response()->json(['success'=>$imageName]);
    }
}
