<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBarangTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barang', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('kode_barang');
            $table->string('nama_barang');
            $table->longText('detail_barang');
            $table->unsignedBigInteger('kategori_id');
            $table->foreign('kategori_id')->references('id')->on('kategori');
            $table->string('fungsi');
            $table->integer('harga_barang');
            $table->unsignedBigInteger('lokasi_id');
            $table->foreign('lokasi_id')->references('id')->on('lokasi');
            $table->string('detail_lokasi');
            $table->unsignedBigInteger('pengguna_id');
            $table->foreign('pengguna_id')->references('id')->on('pengguna');
            $table->integer('jumlah_barang');
            $table->year('year');
            $table->string('image');
            $table->string('lampiran');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('barang');
    }
}
