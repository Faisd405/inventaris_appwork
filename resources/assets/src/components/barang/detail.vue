<template>
  <div class="container-fluid p-3">
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
              />
              <div v-if="loginType == 'admin'">
                <button
                  v-if="barang.image != 'default.jpg'"
                  class="btn btn-danger"
                  @click.prevent="deleteImage()"
                >
                  Hapus Gambar
                </button>
              </div>
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
              <label>Harga : </label>
              <h3>{{ barang.harga_barang | toCurrency }}</h3>
              <label>Lokasi : </label>
              <h3 v-text="barang.lokasi.lokasi"></h3>
              <label>Pengguna : </label>
              <router-link
                :to="{
                  name: 'detail-pengguna',
                  params: { id: barang.pengguna.id },
                }"
              >
                <h3 v-text="barang.pengguna.name"></h3
              ></router-link>

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
            <div v-if="barang.lampiran">
              <!-- delete -->
              <hr />
              <h2 class="text-center">Lampiran Invoice</h2>
              <iframe
                :src="'/lampiran/' + barang.lampiran"
                type="document.pdf"
                width="100%"
                height="500px"
              ></iframe>
              <div v-if="loginType == 'admin'">
                <button
                  v-if="barang.lampiran != 'default.pdf'"
                  @click.prevent="deleteLampiran()"
                  class="btn btn-danger"
                >
                  <i class="fas fa-trash-alt"></i> Delete Lampiran
                </button>
              </div>
            </div>
            <hr />
            <div>
              <h2 class="text-center">Daftar Riwayat Pengguna</h2>
              <b-table
                :fields="fields"
                :items="history"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                responsive="sm"
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
  metaInfo: {
    title: "Detail Barang",
  },
  data() {
    return {
      barang: {
        pengguna: {},
        kategori: {},
        lokasi: {},
      },
      kategori: [],
      history: [],
      user: [],
      loginType: "guest",
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
  mounted() {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");

    axios.get(`/api/user`).then((response) => {
      this.user = response.data;
      this.loginType = response.data.roles[0].name;
    });
  },
  methods: {
    deleteLampiran() {
      axios
        .put("/api/barang/Lampiran/" + this.$route.params.id)
        .then((response) => {
          this.barang.lampiran = "default.pdf";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteImage() {
      axios
        .put("/api/barang/Image/" + this.$route.params.id)
        .then((response) => {
          this.barang.image = "default.jpg";
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
