<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';


    public function roleUser()
    {
        return $this->hasMany('App\Models\RoleUser');
    }

    public function rolePengguna()
    {
        return $this->hasMany('App\Models\RolePengguna');
    }

    public function getRole()
    {
        return $this->with('RoleUser', 'RolePengguna')->get();
    }
}
