<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Home</div>

          <div class="card-body mx-auto">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h1>Halo {{ user.name }}, Di Web Inventaris Barang</h1>
              <div v-if="user">
                <label>Login sebagai:</label>
                <h2>{{ loginType }}</h2>
              </div>
              <div v-if="!user">
                <h2>Anda Belum Login</h2>
              </div>
            </div>
            <div class="row d-flex justify-content-center">
              <div
                class="card text-white bg-primary col-md-6 m-1 shadow-lg"
                style="max-width: 18rem"
              >
                <div class="card-header">
                  <router-link to="/laporan/barang">
                    <strong> Total Barang </strong>
                  </router-link>
                </div>
                <div class="card-body">
                  <h1 class="card-title">{{ barang.length }}</h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6 m-1 shadow-lg"
                style="max-width: 18rem"
              >
                <div class="card-header">
                  <router-link to="/laporan/pengguna"
                    ><strong> Total Pengguna</strong></router-link
                  >
                </div>
                <div class="card-body">
                  <h1 class="card-title">{{ pengguna.length }}</h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6 m-1 shadow-lg"
                style="max-width: 18rem"
              >
                <div class="card-header">
                  <router-link to="/laporan/buku"
                    ><strong> Total Buku</strong></router-link
                  >
                </div>
                <div class="card-body">
                  <h1 class="card-title">{{ buku.length }}</h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6 m-1 shadow-lg"
                style="max-width: 18rem"
              >
                <div class="card-header">
                  <router-link to="/laporan/LaporanTBarangTerpakai"
                    ><strong>Total Barang Yang Terpakai</strong></router-link
                  >
                </div>
                <div class="card-body">
                  <h1 class="card-title">
                    {{ barang.length - NoPengguna.length }}
                  </h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6 m-1 shadow-lg"
                style="max-width: 18rem"
              >
                <div class="card-header">
                  <router-link to="/laporan/LaporanTBarangTidakTerpakai"
                    ><strong
                      >Total Barang Yang Tidak Terpakai</strong
                    ></router-link
                  >
                </div>
                <div class="card-body">
                  <h1 class="card-title">{{ NoPengguna.length }}</h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6 m-1 shadow-lg"
                style="max-width: 18rem"
              >
                <div class="card-header">
                  <router-link to="/laporan/LaporanTHargaBarang"
                    ><strong>Total Harga Barang</strong></router-link
                  >
                </div>
                <div class="card-body">
                  <h1 class="card-title">{{ total }}</h1>
                </div>
              </div>
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
  name: "home",
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      barang: [],
      buku: [],
      users: [],
      NoPengguna: [],
      kategori: [],
      total: [],
      user: "",
      loginType: "",
      pengguna: [],
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
  created() {
    axios.get(`/api/barang`).then((response) => {
      this.barang = response.data.barang;
    });
    axios.get(`/api/barang/NoUser`).then((response) => {
      this.NoUser = response.data.barang;
    });
    axios.get(`/api/barang/total`).then((response) => {
      this.total = response.data.total;
    });
    axios.get(`/api/buku`).then((response) => {
      this.buku = response.data.buku;
    });
    axios.get(`/api/users`).then((response) => {
      this.users = response.data.user;
    });
    axios.get(`/api/kategori`).then((response) => {
      this.kategori = response.data.kategori;
    });
    axios.get(`/api/pengguna`).then((response) => {
      this.pengguna = response.data.pengguna;
    });
    axios.get(`/api/pengguna/nopengguna`).then((response) => {
      this.NoPengguna = response.data.barang;
    });
  },
};
</script>
