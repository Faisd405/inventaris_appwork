<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Detail Barang</div>

          <div class="card-body">
            <div>
              <img
                :src="'/images/' + barang.image"
                class="img-thumbnail rounded mx-auto d-block"
                width="400px"
              /><router-link
                :to="{
                  name: 'gantifoto',
                  params: {
                    id: barang.id,
                  },
                }"
                class="btn btn-primary d-flex justify-content-center"
                >Edit Foto</router-link
              >
            </div>
            <div>
              <label>Nama Barang : </label>
              <h3 v-text="barang.nama_barang"></h3>
              <label>Details Barang : </label>
              <h3 v-text="barang.detail_barang"></h3>
              <label>Kategori : </label>
              <h3 v-text="barang.kategori.nama_kategori"></h3>
              <label>Fungsi : </label>
              <h3 v-text="barang.fungsi"></h3>
              <label>Jenis : </label>
              <h3 v-text="barang.jenis.jenis_barang"></h3>
              <label>Harga : </label>
              <h3>{{ barang.harga_barang | toCurrency }}</h3>
              <label>Lokasi : </label>
              <h3 v-text="barang.lokasi.lokasi"></h3>
              <label>Pengguna : </label>
              <h3 v-text="barang.pengguna.name"></h3>
              <label>Tahun : </label>
              <h3 v-text="barang.year"></h3>
              <label>Jumlah :</label>
              <h3 v-text="barang.jumlah_barang"></h3>
              <label
                ><a
                  :href="'/barang/detailbarang_pdf/' + barang.id"
                  class="btn btn-primary"
                  >Print Detail Barang</a
                ></label
              >
            </div>
            <hr />
            <div>
              <h2 class="text-center">Daftar Riwayat Pengguna</h2>
              <b-table
                :fields="fields"
                :items="history"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
              >
              </b-table>
              <label
                ><a
                  :href="'/barang/HistoryPDFDetail/' + barang.id"
                  class="btn btn-primary"
                  >Print Riwayat Barang</a
                ></label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      barang: {
        pengguna: {},
        kategori: {},
        jenis: {},
        lokasi: {},
      },
      kategori: [],
      history: [],
      fields: [
        ,
        { key: "id", label: "Id" },
        { key: "pengguna.name", label: "Nama Pengguna" },
        {
          key: "tanggal_awal_penggunaan",
          label: "Tanggal Awal Penggunaan",
        },
        {
          key: "tanggal_akhir_penggunaan",
          label: "Tanggal Akhir Penggunaan",
        },
        { key: "keterangan", label: "Keterangan" },
      ],
      sortBy: "id",
      sortDesc: true,
    };
  },
  created() {
    axios.get("/api/kategori").then((response) => {
      this.kategori = response.data.kategori;
    });
    axios.get("/api/barang/" + this.$route.params.id).then((response) => {
      this.barang = response.data.barang;
    });
    axios.get("/api/history/" + this.$route.params.id).then((response) => {
      this.history = response.data.history;
    });
  },
};

Vue.filter("toCurrency", function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formatter.format(value);
});
</script>
