<?php

use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\BukuController;
use App\Http\Controllers\SifatController;
use App\Http\Controllers\LokasiController;
use App\Http\Controllers\JenisController;
use App\Http\Controllers\RolesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Auth
Route::post('/register', [UserController::class, 'register']);
Route::post('login', [ 'as' => 'login', 'uses' => 'UserController@login']);
Route::get('/user',[UserController::class, 'getUser'])->middleware('auth:api');

//Route API User
Route::get('/users', [UserController::class, 'index'])->middleware('auth:api');
Route::get('/users/{id}', [UserController::class, 'show'])->middleware('auth:api');
Route::post('/users', [UserController::class, 'store'])->middleware('auth:api');
Route::put('/users/{id}', [UserController::class, 'update'])->middleware('auth:api');
Route::delete('/users/{id}', [UserController::class, 'destroy'])->middleware('auth:api');

//Route API Roles
Route::get('/roles', [RolesController::class, 'index']);
Route::get('/rolesuser/{id}', [RolesController::class, 'indexrolesuser']);

//Route API Barang
Route::get('/barang', [BarangController::class, 'index'])->middleware('auth:api');
Route::get('/barang/NoUser', [BarangController::class, 'indexUser'])->middleware('auth:api');
Route::get('/barang/total', [BarangController::class, 'total_harga'])->middleware('auth:api');
Route::get('/barang/year', [BarangController::class, 'indexHarga'])->middleware('auth:api');
Route::get('/barang/{id}', [BarangController::class, 'show'])->middleware('auth:api');
Route::post('/barang', [BarangController::class, 'store'])->middleware('auth:api');
Route::put('/barang/{id}', [BarangController::class, 'update'])->middleware('auth:api');
Route::delete('/barang/{id}', [BarangController::class, 'destroy'])->middleware('auth:api');

//Route API Kategori
Route::get('/kategori', [KategoriController::class, 'index'])->middleware('auth:api');
Route::post('/kategori', [KategoriController::class, 'store'])->middleware('auth:api');
Route::get('/namakategori', [KategoriController::class, 'indexnama'])->middleware('auth:api');
Route::delete('/kategori/{id}', [KategoriController::class, 'destroy'])->middleware('auth:api');
Route::put('/kategori/{id}', [KategoriController::class, 'update'])->middleware('auth:api');
Route::get('/kategori/{id}', [KategoriController::class, 'show'])->middleware('auth:api');

//Route API Buku
Route::get('/buku', [BukuController::class, 'index'])->middleware('auth:api');
Route::get('/buku/{id}', [BukuController::class, 'show'])->middleware('auth:api');
Route::put('/buku/{id}', [BukuController::class, 'update'])->middleware('auth:api');
Route::post('/buku', [BukuController::class, 'store'])->middleware('auth:api');
Route::delete('/buku/{id}', [BukuController::class, 'destroy'])->middleware('auth:api');

//Route API Sifat
Route::get('/sifat', [SifatController::class, 'index'])->middleware('auth:api');
Route::get('/sifat/{id}', [SifatController::class, 'show'])->middleware('auth:api');
Route::post('/sifat', [SifatController::class, 'store'])->middleware('auth:api');
Route::put('/sifat/{id}', [SifatController::class, 'update'])->middleware('auth:api');
Route::delete('/sifat/{id}', [SifatController::class, 'destroy'])->middleware('auth:api');

//Route API Lokasi
Route::get('/lokasi', [LokasiController::class, 'index'])->middleware('auth:api');
Route::get('/lokasi/{id}', [LokasiController::class, 'show'])->middleware('auth:api');
Route::post('/lokasi', [LokasiController::class, 'store'])->middleware('auth:api');
Route::put('/lokasi/{id}', [LokasiController::class, 'update'])->middleware('auth:api');
Route::delete('/lokasi/{id}', [LokasiController::class, 'destroy'])->middleware('auth:api');

//Route API Jenis
Route::get('/jenis', [JenisController::class, 'index'])->middleware('auth:api');
Route::get('/jenis/{id}', [JenisController::class, 'show'])->middleware('auth:api');
Route::post('/jenis', [JenisController::class, 'store'])->middleware('auth:api');
Route::put('/jenis/{id}', [JenisController::class, 'update'])->middleware('auth:api');
Route::delete('/jenis/{id}', [JenisController::class, 'destroy'])->middleware('auth:api');
