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
                'message' => 'User!',
                'user' => $users
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'User Tidak Ditemukan!',
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

    public function getUserByEmail($email)
    {
        $users = $this->usersapi->getUserByEmail($email);

        if ($users) {
            return $users;
        }
    }

    public function credentials($request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        return $credentials;
    }

    public function login(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $id_api = $request->id_api;
        $credentials = $this->credentials($request);
        $success = $request->success;

        $ByEmail = $this->getUserByEmail($email);

        if ($success) {
            if ($ByEmail) {
                $id = $ByEmail->id;
                $credentials = $this->credentials($request);

                if (Auth::guard('etask')->attempt($credentials)) {
                    $status = 200;
                    $user = Auth::guard('etask')->user();
                    $response = [
                        'user' => $this->usersapi->arrayMerge($user),
                        'login' => true,
                        'token' => JWTAuth::fromUser($user),
                    ];
                    return response()->json($response, $status);
                } else {
                    return $this->usersapi->updateUser($password, $id);
                }
            } else {
                $createUser = $this->usersapi->postUser($name, $email, $password, $id_api);
                $createUser->roles()->attach(1);

                return response()->json(['message' => 'Registration Successful.'], 201);
            }
        } else {
            $status = 422;
            $response = ['message' => 'The email or password is incorrect.'];
            return response()->json($response, $status);
        }
    }
}
