<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class role_user extends Model
{
    protected $table = 'role_user';

    protected $fillable = ['user_id', 'role_id'];

    public function User()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function Role()
    {
        return $this->belongsTo('App\Models\Role');
    }

}
