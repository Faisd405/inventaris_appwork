<?php

use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\BukuController;
use App\Http\Controllers\SifatController;
use App\Http\Controllers\LokasiController;
use App\Http\Controllers\JenisController;

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

//Route API User
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

//Route API Barang
Route::get('/barang', [BarangController::class, 'index']);
Route::get('/barang/NoUser', [BarangController::class, 'indexUser']);
Route::get('/barang/total', [BarangController::class, 'total_harga']);
Route::get('/barang/year', [BarangController::class, 'indexHarga']);
Route::get('/barang/{id}', [BarangController::class, 'show']);
Route::post('/barang', [BarangController::class, 'store']);
Route::put('/barang/{id}', [BarangController::class, 'update']);
Route::delete('/barang/{id}', [BarangController::class, 'destroy']);

//Route API Kategori
Route::get('/kategori', [KategoriController::class, 'index']);
Route::post('/kategori', [KategoriController::class, 'store']);
Route::get('/namakategori', [KategoriController::class, 'indexnama']);
Route::delete('/kategori/{id}', [KategoriController::class, 'destroy']);
Route::put('/kategori/{id}', [KategoriController::class, 'update']);
Route::get('/kategori/{id}', [KategoriController::class, 'show']);

//Route API Buku
Route::get('/buku', [BukuController::class, 'index']);
Route::get('/buku/{id}', [BukuController::class, 'show']);
Route::put('/buku/{id}', [BukuController::class, 'update']);
Route::post('/buku', [BukuController::class, 'store']);
Route::delete('/buku/{id}', [BukuController::class, 'destroy']);

//Route API Sifat
Route::get('/sifat', [SifatController::class, 'index']);
Route::get('/sifat/{id}', [SifatController::class, 'show']);
Route::post('/sifat', [SifatController::class, 'store']);
Route::put('/sifat/{id}', [SifatController::class, 'update']);
Route::delete('/sifat/{id}', [SifatController::class, 'destroy']);

//Route API Lokasi
Route::get('/lokasi', [LokasiController::class, 'index']);
Route::get('/lokasi/{id}', [LokasiController::class, 'show']);
Route::post('/lokasi', [LokasiController::class, 'store']);
Route::put('/lokasi/{id}', [LokasiController::class, 'update']);
Route::delete('/lokasi/{id}', [LokasiController::class, 'destroy']);

//Route API Jenis
Route::get('/jenis', [JenisController::class, 'index']);
Route::get('/jenis/{id}', [JenisController::class, 'show']);
Route::post('/jenis', [JenisController::class, 'store']);
Route::put('/jenis/{id}', [JenisController::class, 'update']);
Route::delete('/jenis/{id}', [JenisController::class, 'destroy']);
