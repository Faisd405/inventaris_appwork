<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Facades\Hash;
use App\Models\barang;

class pengguna extends Authenticatable implements JWTSubject
{
    use Notifiable;
    //
    protected $table = 'pengguna';

    protected $fillable = [
        'name','ktp','jabatan','surat_komitmen','email','password','id_api'
    ];

    public function barang()
    {
        return $this->belongsTo('App\Models\barang');
    }

    public function buku()
    {
        return $this->belongsTo('App\Models\buku');
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

    public function getPengguna()
    {
        return pengguna::all();
    }

    public function getPenggunaById($id)
    {
        return pengguna::find($id);
    }

    public function postPengguna($request){
        // Merge surat_komitmen with request
        $request->merge(['surat_komitmen' => 'default.pdf']);
        // Create new pengguna
        $pengguna = pengguna::create($request->all());
        // Return new pengguna
        return $pengguna;
    }

    public function putPengguna($request, $id){
        $pengguna = pengguna::find($id);

        $request->merge(['surat_komitmen' => $pengguna->surat_komitmen]);

        $pengguna->update($request->all());

        return $pengguna;
    }

    public function deletePengguna($id){
        $pengguna = pengguna::find($id);
        return $pengguna->delete();
    }

    public function getBarangbyPengguna($id)
    {
        return barang::where('pengguna_id', $id)->with('pengguna', 'kategori', 'lokasi')->get();
    }

    public function getBukuByPengguna($id)
    {
        return buku::where('pengguna_id', $id)->with('pengguna', 'jenis', 'lokasi')->get();
    }

    public function getBarangByNoPengguna($id)
    {
        return barang::where('pengguna_id','!=' , $id)->with('pengguna', 'kategori', 'lokasi')->get();
    }

    public function getUserByEmail($email)
    {
        $user = $this->where('email', $email)->with('roles')->with('roles')->first();
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

    public function postuser($name, $email, $password, $id_api, $jabatan)
    {
        $user = $this->create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
            'id_api' => $id_api,
            'jabatan' => $jabatan,
            'surat_komitmen' => 'default.pdf',
            'ktp' => 0,
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

    // attach role user
    public function attachRole($user)
    {
        return $user->roles()->attach(1);
    }
}
