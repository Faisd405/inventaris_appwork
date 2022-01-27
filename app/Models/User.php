<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable implements JWTSubject
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


    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getUser()
    {
        return $this->all();
    }

    public function getUserById($id)
    {
        return $this->find($id);
    }

    public function postUser($request)
    {
        $user = $this->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return $user;
    }

    public function putUser($request, $id)
    {
        $user = $this->find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }
        $user->save();

        return $user;
    }

    public function deleteUser($id)
    {
        $user = $this->find($id);
        $user->delete();
    }

    public function arrayMerge($user)
    {
        return array_merge($user->toArray(), ['roles' => $user->roles()->get()->toArray()]);
    }
}
