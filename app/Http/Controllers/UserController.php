<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\RoleUser;
use App\Models\Pengguna;
use Illuminate\Support\Facades\Hash;
use Auth;
use JWTAuth;

class UserController extends Controller
{
    protected $user;
    protected $roleUser;
    protected $pengguna;

    public function __construct(User $user, RoleUser $roleUser, Pengguna $pengguna)
    {
        $this->user = $user;
        $this->roleUser = $roleUser;
        $this->pengguna = $pengguna;
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
    /**
     * @SuppressWarnings(PHPMD.ElseExpression)
     */
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
        $user = Auth::user();
        if ($user->id != 1) {
            return response()->json([
                'success' => false,
                'message' => 'Anda Tidak Memiliki Akses!',
                'data'    => ''
            ], 401);
        }

        $users = $this->user->putUser($request, $id);

        if ($request->roles) {
            $users->roles()->sync($request->roles);
        }

        $users->save();
    }

    public function store(Request $request)
    {
        $user = $this->user->postUser($request);

        $user->roles()->attach(2);

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
        $this->roleUser->deleteRoleUserByUserId($id);

        $users = $this->user->deleteUser($id);

        return response()->json([
            'success' => true,
            'message' => 'User Berhasil Dihapus!',
            'data'    => $users
        ], 200);
    }
    /**
     * @SuppressWarnings(PHPMD.ElseExpression)
     */
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
        if (Auth::check()) {
            $user = Auth::user();
            $data = $this->user->arrayMerge($user);
        }
        if (Auth::guard('etask')->check()) {
            $user = Auth::guard('etask')->user();
            $data = $this->pengguna->arrayMerge($user);
        }
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
