<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $table = 'users';

    protected $fillable = [
        'name',
        'roles',
        'email',
        'password',
    ];

    public function barang()
    {
        return $this->belongsTo('App\Models\Barang');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

}
