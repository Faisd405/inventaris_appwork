<template>
  <div class="container-fluid p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Detail Buku</div>

          <div class="card-body">
            <div>
              <img
                :src="'/gambarBuku/' + buku.image"
                class="img-thumbnail rounded mx-auto d-block"
                width="400px"
              />
              <div v-if="loginType == 'admin'">
                <button
                  v-if="buku.image != 'default.jpg'"
                  class="btn btn-danger"
                  @click.prevent="deleteImage()"
                >
                  Hapus Gambar
                </button>
              </div>
            </div>
            <div>
              <label>Judul buku : </label>
              <h3 v-text="buku.judul"></h3>
              <label>Jenis :</label>
              <h3 v-text="buku.jenis.jenis_buku"></h3>
              <label>Penulis buku : </label>
              <h3 v-text="buku.penulis"></h3>
              <label>Kondisi : </label>
              <h3 v-text="buku.kondisi"></h3>
              <label>Harga : </label>
              <h3>{{ buku.harga | toCurrency }}</h3>
              <label>Lokasi : </label>
              <h3 v-text="buku.lokasi.lokasi"></h3>
              <label>Pengguna : </label>
              <router-link
                :to="{
                  name: 'detail-pengguna',
                  params: { id: buku.pengguna.id },
                }"
              >
                <h3 v-text="buku.pengguna.name"></h3
              ></router-link>

              <label>Tahun : </label>
              <h3 v-text="buku.tanggal"></h3>
            </div>
            <div v-if="buku.lampiran">
              <!-- delete -->
              <hr />
              <h2 class="text-center">Lampiran Invoice</h2>
              <iframe
                :src="'/lampiranBuku/' + buku.lampiran"
                type="document.pdf"
                width="100%"
                height="500px"
              ></iframe>
              <div v-if="loginType == 'admin'">
                <button
                  v-if="buku.lampiran != 'default.pdf'"
                  @click.prevent="deleteLampiran()"
                  class="btn btn-danger"
                >
                  <i class="fas fa-trash-alt"></i> Delete Lampiran
                </button>
              </div>
            </div>
            <hr />
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
    title: "Detail Buku",
  },
  data() {
    return {
      buku: {
        pengguna: {},
        jenis: {},
        lokasi: {},
      },
      user: [],
      loginType: "guest",
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
        .put("/api/buku/Lampiran/" + this.$route.params.id)
        .then((response) => {
          this.buku.lampiran = "default.pdf";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteImage() {
      axios
        .put("/api/buku/Image/" + this.$route.params.id)
        .then((response) => {
          this.buku.image = "default.jpg";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    axios.get("/api/buku/" + this.$route.params.id).then((response) => {
      this.buku = response.data.buku;
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
