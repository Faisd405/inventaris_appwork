<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Detail Barang</div>

          <div class="card-body">
                <div><img :src="'/images/'+barang.image" class="img-thumbnail rounded mx-auto d-block" width="400px"></div>
            <div>
                <label>Nama Barang : </label><h3 v-text="barang.nama_barang"></h3>
                <label>Details Barang : </label><h3 v-text="barang.detail_barang"></h3>
                <label>Kategori : </label><h3 v-text="barang.kategori.nama_kategori"></h3>
                <label>Fungsi : </label><h3 v-text="barang.fungsi"></h3>
                <label>Jenis : </label><h3 v-text="barang.jenis.jenis_barang"></h3>
                <label>Harga : </label><h3 v-text="barang.harga_barang"></h3>
                <label>Lokasi : </label><h3 v-text="barang.lokasi.lokasi"></h3>
                <label>User : </label><h3 v-text="barang.user.name"></h3>
                <label>Tahun : </label><h3 v-text="barang.year"></h3>
                <label><a :href="'/barang/detailbarang_pdf/'+barang.id">Print</a></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      barang: {
          user: {},
          kategori: {},
      },
      kategori: [],
    };
  },
  created() {
    axios
      .get("/api/kategori")
      .then((response) => {
        this.kategori = response.data.kategori;
      })
    axios
      .get("/api/barang/" + this.$route.params.id)
      .then((response) => {
        this.barang = response.data.barang;
      })
  },
};
</script>
