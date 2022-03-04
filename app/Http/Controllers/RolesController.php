<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\User;

class RolesController extends Controller
{
    protected $role;

    public function __construct(Role $role)
    {
        $this->role = $role;
    }

    
    //index with json
    public function index()
    {
        $roles = $this->role->getRole();
        return response([
            'success' => true,
            'message' => 'List Semua Role',
            'roles' => $roles,
        ], 200);
    }
}
