<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarangController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/barang/barang_pdf', [BarangController::class, 'barang_pdf'])->name('barang.barang_pdf');
Route::get('/barang/qrbarang_pdf', [BarangController::class, 'qrbarang_pdf'])->name('barang.qrbarang_pdf');
Route::get('/barang/detailbarang_pdf/{id}', [BarangController::class, 'detailbarang_pdf'])->name('barang.detailbarang_pdf');

Route::get('/barang/userbarang_excel', [BarangController::class, 'userbarang_excel'])->name('barang.userbarang_excel');
Route::get('/barang/barang_excel', [BarangController::class, 'barang_excel'])->name('barang.barang_excel');

Route::get('/{any}', 'ApplicationController')->where('any', '.*');
