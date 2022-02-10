<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\usersapi;
use App\Models\role_user;
use Illuminate\Support\Facades\Hash;
use Auth;
use JWTAuth;

class UsersapiController extends Controller
{
    //
    public function __construct(User $user, usersapi $usersapi, role_user $role_user)
    {
        $this->user = $user;
        $this->usersapi = $usersapi;
        $this->role_user = $role_user;
    }

    //crud api
    public function index()
    {
        $users = $this->usersapi->getUser();
        return response([
            'success' => true,
            'message' => 'List Semua User',
            'user' => $users
        ], 200);
    }

    public function show($id)
    {
        $users = $this->usersapi->getUserById($id);

        if ($users) {
            return response()->json([
                'success' => true,
                'message' => 'Barang dan User!',
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

    //update json
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        if ($user->id != 1) {
            return response()->json([
                'success' => false,
                'message' => 'Anda Tidak Memiliki Akses!',
                'data'    => ''
            ], 401);
        }
        $users = $this->usersapi->getUserById(
            $id
        );
        $users->name = $request->name;
        $users->email = $request->email;
        $users->password = Hash::make($request->password);
        $users->save();

        if ($request->roles) {
            $users->roles()->sync($request->roles);
        }
        $users->save();

        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Diupdate!',
            'user' => $users
        ], 200);
    }

    public function store(Request $request)
    {
        $users = $this->usersapi->postUser($request);

        if ($request->roles) {
            $users->roles()->sync($request->roles);
        }
        $users->save();

        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Ditambahkan!',
            'user' => $users
        ], 200);
    }

    public function destroy($id)
    {
        $user = Auth::user();
        if ($user->id != 1) {
            return response()->json([
                'success' => false,
                'message' => 'Anda Tidak Memiliki Akses!',
                'data'    => ''
            ], 401);
        }
        $users = $this->usersapi->getUserById($id);
        $users->delete();

        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Dihapus!',
            'user' => $users
        ], 200);
    }

}
