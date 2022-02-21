<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\barang;
use App\Models\pengguna;
use App\Models\buku;
use App\Http\Requests\PenggunaRequest;
use Illuminate\Support\Facades\Hash;
use Auth;
use JWTAuth;

class PenggunaController extends Controller
{
    public function __construct(pengguna $pengguna, barang $barang, buku $buku) {
        $this->pengguna = $pengguna;
        $this->barang = $barang;
        $this->buku = $buku;
    }

    public function respons($pengguna)
    {
        return response()->json([
            'pengguna' => $pengguna,
        ]);
    }

    public function index()
    {
        $pengguna = $this->pengguna->getPengguna();
        return $this->respons($pengguna);
    }

    //Index barang where pengguna_id = 1
    public function nopengguna()
    {
        $barang = $this->pengguna->getBarangbyPengguna(1);
        return response()->json([
            'success' => true,
            'message' => 'List Semua barang',
            'barang' => $barang,
        ], 200);
    }

    public function pengguna()
    {
        $barang = $this->pengguna->getBarangbyNoPengguna(1);
        return response()->json([
            'success' => true,
            'message' => 'List Semua barang',
            'barang' => $barang,
        ], 200);
    }

    // show json
    public function show($id)
    {
        $pengguna = $this->pengguna->getPenggunaById($id);
        $barang = $this->pengguna->getBarangbyPengguna($id);
        $buku = $this->pengguna->getBukuByPengguna($id);

        if ($barang && $pengguna) {
            return response()->json([
                'barang'    => $barang,
                'pengguna' => $pengguna,
                'buku' => $buku,

            ], 200);
        }
    }

    // create json
    public function store(Request $request)
    {
        $pengguna = $this->pengguna->postPengguna($request);
        return $this->respons($pengguna);
    }

    // update json
    public function update(PenggunaRequest $request, $id)
    {
        if (Auth::guard('etask')->check()){
            $user = Auth::guard('etask')->user();
            $pengguna = $this->pengguna->putPengguna($request, $id);
        }
        if (Auth::check()){
            $user = Auth::user();
            if ($user->id != 1) {
                return response()->json([
                    'success' => false,
                    'message' => 'Anda Tidak Memiliki Akses!',
                    'data'    => ''
                ], 401);
            }
            $pengguna = $this->pengguna->putPengguna($request, $id);
        }
        return $this->respons($pengguna);
    }

    // delete json
    public function destroy($id)
    {
        if ($id == 1) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak bisa delete pengguna ini',
            ], 400);
        }
        $pengguna = $this->pengguna->deletePengguna($id);
        return $this->respons($pengguna);
    }

    public function surat_komitmen($id, Request $request)
    {
        $pengguna = $this->pengguna->getPenggunaById($id);
        $barang = $this->pengguna->getBarangbyPengguna($id);
        $kode_lampiran = $request->kode_lampiran;

        $pdf = \PDF::loadView('pengguna.surat_komitmen', compact('pengguna', 'barang', 'kode_lampiran'))->setPaper('a4', 'potrait');
        return $pdf->stream('surat_komitmen.pdf');
    }

    public function getUserByEmail($email)
    {
        $users = $this->pengguna->getUserByEmail($email);

        if ($users) {
            return $users;
        }
    }

    public function credentials($request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        return $credentials;
    }

    public function login(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $id_api = $request->id_api;
        $credentials = $this->credentials($request);
        $success = $request->success;
        $jabatan = $request->jabatan;

        $ByEmail = $this->getUserByEmail($email);

        if ($success) {
            if ($ByEmail) {
                $id = $ByEmail->id;
                $credentials = $this->credentials($request);

                if (empty($ByEmail->roles[0])) {
                    $this->pengguna->attachRole($ByEmail);
                }

                if (Auth::guard('etask')->attempt($credentials)) {
                    $status = 200;
                    $user = Auth::guard('etask')->user();
                    $response = [
                        'user' => $this->pengguna->arrayMerge($user),
                        'login' => true,
                        'token' => JWTAuth::fromUser($user),
                    ];
                    return response()->json($response, $status);
                } else {
                    $UpdateUser = $this->pengguna->updateUser($password, $id);

                    return response()->json([
                        'login' => false,
                        'message' => 'Data telah di update, Silahkan Submit Kembali',
                    ], 200);
                }
            } else {
                $createUser = $this->pengguna->postuser($name, $email, $password, $id_api, $jabatan);
                $createUser->roles()->attach(1);

                return response()->json(['message' => 'Registrasi Telah Berhasil, Silahkan Submit Kembali'], 201);
            }
        } else {
            $status = 422;
            $response = ['error' => 'Email dan Password anda salah.'];
            return response()->json($response, $status);
        }
    }

    public function getLengthInventarisByPengguna($id){
        $buku = $this->buku->getLengthBukuByPengguna($id);
        $barang = $this->barang->getLengthBarangByPengguna($id);

        return response()->json([
            'buku' => $buku,
            'barang' => $barang,
        ], 200);
    }
}
