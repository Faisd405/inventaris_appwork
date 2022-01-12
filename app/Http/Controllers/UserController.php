<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\role_user;
use App\Models\barang;
use Illuminate\Support\Facades\Hash;
use Auth;
use JWTAuth;

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
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
            'roles' => 'required',
        ]);

        $users = User::find($id);
        $users->name = $request->name;
        $users->email = $request->email;
        $users->password = Hash::make($request->password);

        $users->roles()->sync($request->roles);
        $users->save();

    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'roles' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->roles()->attach($request->roles);

        return response()->json(['message' => 'Registration Successful.'], 201);
    }


    public function destroy($id)
    {
        $roleuser = role_user::where('user_id', $id)->first();
        $roleuser->delete();
        $users = User::find($id);

        $users->delete();
        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Dihapus!',
            'data'    => $users
        ], 200);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->roles()->attach(1);

        return response()->json(['message' => 'Registration Successful.'], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $status = 200;
            $user = Auth::user();
            $response = [
                'user' => array_merge(
                    $user->toArray(),
                    ['roles' => $user->roles()->get()->toArray()]
                ),
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
        $user = auth()->user();
        $data = array_merge($user->toArray(), ['roles' => $user->roles()->get()->toArray()]);
        return response()->json($data, 200);
    }
}
