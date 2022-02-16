<?php

use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UsersapiController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\BukuController;
use App\Http\Controllers\SifatController;
use App\Http\Controllers\LokasiController;
use App\Http\Controllers\JenisController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\PengajuanController;
use App\Http\Controllers\InventarisController;

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
Route::post('/login', [UserController::class, 'login']);
Route::post('/loginapi', [UsersapiController::class, 'login']);
Route::get('/user', [UserController::class, 'getUser']);

//Route API User
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy'])->middleware('auth:api');

//Route API UserApi
Route::get('/usersapi', [UsersapiController::class, 'index']);
Route::get('/usersapi/{id}', [UsersapiController::class, 'show']);
Route::post('/usersapi', [UsersapiController::class, 'store']);
Route::put('/usersapi/{id}', [UsersapiController::class, 'update']);
Route::delete('/usersapi/{id}', [UsersapiController::class, 'destroy'])->middleware('auth:api');
Route::get('/usersapi/email/{email}', [UsersapiController::class, 'getUserByEmail']);

//Route API Roles
Route::get('/roles', [RolesController::class, 'index']);

//Route API Barang
Route::get('/barang', [BarangController::class, 'index']);
Route::put('/barang/relasi/{id}', [BarangController::class, 'relasi']);
Route::put('/barang/Lampiran/{id}', [BarangController::class, 'destroyLampiran']);
Route::put('/barang/Image/{id}', [BarangController::class, 'destroyImage']);
Route::get('/barang/total', [BarangController::class, 'total_harga']);
Route::get('/barang/year', [BarangController::class, 'indexHarga']);
Route::get('/barang/{id}', [BarangController::class, 'show']);
Route::post('/barang', [BarangController::class, 'store']);
Route::post('/barang/{id}', [BarangController::class, 'update']);
Route::delete('/barang/{id}', [BarangController::class, 'destroy']);

//Route API History
Route::get('/history', [HistoryController::class, 'index']);
Route::get('/history/{id}', [HistoryController::class, 'show']);
Route::put('/history/{id}', [HistoryController::class, 'update']);
Route::delete('/history/{id}', [HistoryController::class, 'destroy']);

//Route API Pengguna
Route::get('/pengguna/pengguna', [PenggunaController::class, 'pengguna']);
Route::get('/pengguna/nopengguna', [PenggunaController::class, 'nopengguna']);
Route::get('/pengguna', [PenggunaController::class, 'index']);
Route::get('/pengguna/{id}', [PenggunaController::class, 'show']);
Route::post('/pengguna', [PenggunaController::class, 'store']);
Route::put('/pengguna/{id}', [PenggunaController::class, 'update']);
Route::delete('/pengguna/{id}', [PenggunaController::class, 'destroy']);

//Route API Kategori
Route::get('/kategori', [KategoriController::class, 'index']);
Route::post('/kategori', [KategoriController::class, 'store']);
Route::get('/namakategori', [KategoriController::class, 'indexnama']);
Route::delete('/kategori/{id}', [KategoriController::class, 'destroy']);
Route::put('/kategori/{id}', [KategoriController::class, 'update']);
Route::get('/kategori/{id}', [KategoriController::class, 'show']);

//Route API Buku
Route::get('/buku/total', [BukuController::class, 'getTotalHarga']);
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
Route::get('/lokasi/barang', [LokasiController::class, 'getLengthBarangByLokasi']);
Route::get('/lokasi/{id}', [LokasiController::class, 'show']);
Route::post('/lokasi', [LokasiController::class, 'store']);
Route::put('/lokasi/{id}', [LokasiController::class, 'update']);
Route::delete('/lokasi/{id}', [LokasiController::class, 'destroy']);

//Route API Jenis
Route::get('/jenis', [JenisController::class, 'index']);
Route::get('/namajenis', [JenisController::class, 'indexnama']);
Route::get('/jenis/{id}', [JenisController::class, 'show']);
Route::post('/jenis', [JenisController::class, 'store']);
Route::put('/jenis/{id}', [JenisController::class, 'update']);
Route::delete('/jenis/{id}', [JenisController::class, 'destroy']);

//Route API Pengajuan
Route::get('/pengajuan', [PengajuanController::class, 'index']);
Route::get('/pengajuan/{id}', [PengajuanController::class, 'show']);
Route::post('/pengajuan', [PengajuanController::class, 'store']);
Route::put('/pengajuan/{id}', [PengajuanController::class, 'update']);
Route::delete('/pengajuan/{id}', [PengajuanController::class, 'destroy']);
Route::get('/pengajuan/user/{id_user}', [PengajuanController::class, 'showByUserId']);

//Inventaris Laporan
Route::get('/inventaris/barangdanbuku', [InventarisController::class, 'lengthBarangdanBuku']);
Route::get('/inventaris/inventarisTidakDipakai', [InventarisController::class, 'inventarisTidakDipakai']);
Route::get('/inventaris/hargaPerPengguna', [InventarisController::class, 'hargaPerPengguna']);
