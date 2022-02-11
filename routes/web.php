<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\PenggunaController;

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

Route::get('/barang/detailbarang_pdf/{id}', [BarangController::class, 'detailbarang_pdf'])->name('barang.detailbarang_pdf');
Route::get('/barang/HistoryPDFDetail/{id}', [HistoryController::class, 'HistoryPDFDetail'])->name('barang.riwayatbarang_pdf');
Route::get('/barang/HistoryPDF', [HistoryController::class, 'HistoryPDF'])->name('barang.riwayatbarang_pdf');
Route::get('/barang/barang_excel', [BarangController::class, 'barang_excel'])->name('barang.barang_excel');

Route::get('/history/history_pdf/detail/{barang_id}', [HistoryController::class, 'HistoryDetailBarangPDF'])->name('history.HistoryDetailBarangPDF');
Route::get('/history/history_pdf/detail/{barang_id}/{tanggal_awal}', [HistoryController::class, 'HistoryDetailBarangPDF'])->name('history.HistoryDetailBarangPDF');
Route::get('/history/history_pdf/detail/{barang_id}/{tanggal_awal}/{tanggal_akhir}', [HistoryController::class, 'HistoryDetailBarangPDF'])->name('history.HistoryDetailBarangPDF');

Route::get('/history/history_excel/detail/{barang_id}', [HistoryController::class, 'HistoryDetailBarangExcel'])->name('history.HistoryDetailBarangExcel');
Route::get('/history/history_excel/detail/{barang_id}/{tanggal_awal}', [HistoryController::class, 'HistoryDetailBarangExcel'])->name('history.HistoryDetailBarangExcel');
Route::get('/history/history_excel/detail/{barang_id}/{tanggal_awal}/{tanggal_akhir}', [HistoryController::class, 'HistoryDetailBarangExcel'])->name('history.HistoryDetailBarangExcel');

Route::get('/pengguna/surat_komitmen/{id}', [PenggunaController::class, 'surat_komitmen'])->name('barang.surat_komitmen');

Route::get('/{any}', 'ApplicationController')->where('any', '.*');
