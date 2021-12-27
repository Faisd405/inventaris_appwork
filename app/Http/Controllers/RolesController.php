<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\role_user;
use App\Models\User;

class RolesController extends Controller
{
    //index with json
    public function index()
    {
        $roles = Role::all();
        return response([
            'success' => true,
            'message' => 'List Semua Role',
            'roles' => $roles,
        ], 200);
    }

    public function indexrolesuser($id){
        $roleusers = role_user::with('role','users')->get();
            return response()->json([
                'success' => true,
                'message' => 'Role dan User!',
                'roleusers' => $roleusers
            ], 200);
    }
}
