<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\barang;
use Illuminate\Support\Facades\Hash;

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

    public function show($id)
    {
        $users = User::find($id);
        $barangs = barang::where('user_id', $id)->with('lokasi')->get();

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
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'roles' => 'required'
        ]);
        $users = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'roles' => $request->roles
        ]);
        return response([
            'success' => true,
            'message' => 'User Berhasil Ditambahkan!',
            'user' => $users
        ], 200);
    }

    public function destroy($id)
    {
        $users = User::find($id);

        $users->delete();
        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Dihapus!',
            'data'    => $users
        ], 200);
    }
}
