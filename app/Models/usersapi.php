<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Facades\Hash;

class usersapi extends Authenticatable implements JWTSubject
{
    use Notifiable;
    //
    protected $table = 'usersapi';

    protected $fillable = [
        'name',
        'email',
        'password',
        'id_api'
    ];
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
        $user = $this->all();
        return $user;
    }

    public function getUserById($id)
    {
        $user = $this->find($id);
        return $user;
    }

    public function postUser($name, $email, $password, $id_api)
    {
        $user = $this->create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
            'id_api' => $id_api
        ]);

        return $user;
    }

    public function updateUser($password, $id)
    {
        //put
        $user = $this->find($id);
        $user->password = Hash::make($password);
        $user->save();
        return response()->json([
            'success' => true,
            'message' => 'Password User Berhasil Diupdate!',
            'user' => $user
        ], 200);

    }

    public function deleteUser($id)
    {
        $user = $this->find($id);
        $user->delete();
        return $user;
    }

    public function getUserByEmail($email)
    {
        $user = $this->where('email', $email)->first();
        return $user;
    }

    public function getUserByEmailAndPassword($email, $password)
    {
        $user = $this->where('email', $email)->where('password', $password)->first();
        return $user;
    }

    public function arrayMerge($user)
    {
        return array_merge($user->toArray(), ['roles' => $user->roles()->get()->toArray()]);
    }
}
