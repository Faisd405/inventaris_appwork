<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';


    public function role_user()
    {
        return $this->hasMany('App\Models\role_user');
    }

    public function role_pengguna()
    {
        return $this->hasMany('App\Models\role_pengguna');
    }

}
