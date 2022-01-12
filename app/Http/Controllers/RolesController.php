<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
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
}
