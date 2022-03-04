<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoleUser extends Model
{
    protected $table = 'role_user';

    protected $fillable = ['user_id', 'role_id'];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function role()
    {
        return $this->belongsTo('App\Models\Role');
    }

    public function deleteRoleUserByUserId($id)
    {
        return $this->where('user_id', $id)->delete();
    }
}
