<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

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
}
