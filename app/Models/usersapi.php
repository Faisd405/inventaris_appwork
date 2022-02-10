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


    public function postUser($request)
    {
        $user = $this->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return $user;
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

    public function updateUser($request, $id)
    {
        $user = $this->find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
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

}
