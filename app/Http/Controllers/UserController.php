<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\role_user;
use Illuminate\Support\Facades\Hash;
use Auth;
use JWTAuth;

class UserController extends Controller
{
    public function __construct(User $user, role_user $role_user)
    {
        $this->user = $user;
        $this->role_user = $role_user;
    }

    //crud api
    public function index()
    {
        $users = $this->user->getUser();
        return response([
            'success' => true,
            'message' => 'List Semua User',
            'user' => $users
        ], 200);
    }

    public function show($id)
    {
        $users = $this->user->getUserById($id);

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
        if ($id == 1) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak Bisa Update Admin!',
                'data'    => ''
            ], 404);
        }
        $users = $this->user->putUser($request, $id);

        $users->roles()->sync($request->roles);
        $users->save();
    }

    public function store(Request $request)
    {
        $user = $this->user->postUser($request);

        $user->roles()->attach($request->roles);

        return response()->json(['message' => 'Registration Successful.'], 201);
    }

    public function destroy($id)
    {
        if ($id == 1) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak Bisa Delete Admin!',
                'data'    => ''
            ], 404);
        }
        $this->role_user->deleteRoleUserByUserId($id);

        $users = $this->user->deleteUser($id);

        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Dihapus!',
            'data'    => $users
        ], 200);
    }

    public function login(Request $request)
    {
        $credentials = $this->credentials($request);

        if (Auth::attempt($credentials)) {
            $status = 200;
            $user = Auth::user();
            $response = [
                'user' => $this->user->arrayMerge($user),
                'token' => JWTAuth::fromUser($user),
            ];
        } else {
            $status = 422;
            $response = ['error' => 'The email or password is incorrect.'];
        }

        return response()->json($response, $status);
    }

    public function getUser()
    {
        $user = Auth::user();
        $data = $this->user->arrayMerge($user);
        return response()->json($data, 200);
    }

    public function credentials($request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        return $credentials;
    }
}
