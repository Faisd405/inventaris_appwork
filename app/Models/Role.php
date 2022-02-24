<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';


    public function RoleUser()
    {
        return $this->hasMany('App\Models\RoleUser');
    }

    public function RolePengguna()
    {
        return $this->hasMany('App\Models\RolePengguna');
    }
}
