<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\barang;

class UserController extends Controller
{
    //crud api
    public function index()
    {
        $users = User::latest()->get();
        return response([
            'success' => true,
            'message' => 'List Semua User',
            'user' => $users
        ], 200);
    }

    // public function create(){
    //     $users = User::all();
    //     $barangs = barang::all();

    //     // if users and barangs
    //     if ($users && $barangs) {
    //         return response()->json([
    //             'success' => true,
    //             'message' => 'Barang dan User!',
    //             'barang'    => $barangs,
    //             'user' => $users
    //         ], 200);
    //     } else {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'barangs Tidak Ditemukan!',
    //             'data'    => ''
    //         ], 404);
    //     }
    // }


    public function show($id)
    {
        $users = User::find($id);
        $barangs = barang::where('user_id', $id)->get();

        if ($barangs && $users) {
            return response()->json([
                'success' => true,
                'message' => 'Barang dan User!',
                'barang'    => $barangs,
                'user' => $users
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'barangs Tidak Ditemukan!',
                'data'    => ''
            ], 404);
        }
    }

    public function store(Request $request)
    {
        $users = User::create($request->all());
        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Ditambahkan!',
            'data'    => $users
        ], 200);
    }

    public function destroy($id){
        $users = User::find($id);

        $users->delete();
        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Dihapus!',
            'data'    => $users
        ], 200);
    }
}
