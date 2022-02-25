<template>
  <div class="container-fluid">
    <div class="d-flex flex-row">
      <div class="d-flex flex-column bd-highlight mb-3 mx-1 mt-3">
        <div class="card card-body" style="min-width: 20rem; max-height: 24rem">
          <span class="d-flex justify-content-end">
            <b-badge variant="success" pill>
              <span class="text-white">
                {{ user.jabatan }}
              </span>
            </b-badge>
          </span>
          <div class="align-items-center">
            <div class="d-flex justify-content-between">
              <img
                v-if="users.has_dokumen.foto_pegawai"
                :src="
                  'https://laporan.4visionmedia.com/dokumen/foto_pegawai/' +
                  users.has_dokumen.foto_pegawai
                "
                class="rounded m-1"
                style="width: 80px"
              />
              <table class="align-center">
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{{ user.name }}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{{ user.email }}</td>
                </tr>
              </table>
            </div>
            <br />
            <div>
              <button
                class="btn btn-primary btn-sm"
                @click.prevent="updateUserData()"
              >
                Sinkronisasi Data
              </button>
              <router-link
                class="btn btn-warning btn-sm"
                :to="{ name: 'edit-pengguna', params: { id: user.id } }"
              >
                Edit Data
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column bd-highlight mb-3 mx-1 mt-3">
        <div
          class="card text-white pallet-dark m-1 shadow-lg"
          style="min-width: 24rem; height: 10rem"
        >
          <div class="card-header">
            <strong> Invetaris Barang </strong>
          </div>
          <div class="card-body align-middle">
            <span
              class="card-title text-white"
              style="font-size: 26px; font-weight: bolder"
            >
              {{ barang.length }}
            </span>
            <span class="card-title text-white">Barang Digunakan</span>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column bd-highlight mb-3 mx-1 mt-3">
        <div
          class="card text-white pallet-dark m-1 shadow-lg"
          style="min-width: 24rem; height: 10rem"
        >
          <div class="card-header">
            <strong> Invetaris Buku </strong>
          </div>
          <div class="card-body align-middle">
            <span
              class="card-title text-white"
              style="font-size: 26px; font-weight: bolder"
            >
              {{ buku.length }}
            </span>
            <span class="card-title text-white">Buku Digunakan</span>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row">
      <div class="d-flex flex-column bd-highlight mb-3 mx-1 mt-3">
        <div
          class="card text-white pallet-dark m-1 shadow-lg"
          style="min-width: 70rem; height: 75px"
        >
          <div class="card-body align-justify d-flex justify-content-between">
            <span
              class="card-title text-white"
              style="font-size: 20px; font-weight: bolder"
            >
              Pengajuan barang Terkirim
            </span>
            <span style="font-size: 20px; font-weight: bolder">
              <router-link
                class="card-title text-white"
                :to="{ name: 'index-pengajuan', params: { id: user.id } }"
              >
                Detail
                <b-badge pill style="color: black; background-color: white">{{
                  pengajuan.length
                }}</b-badge></router-link
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row">
      <div class="flex-column bd-highlight mb-3 mx-1" style="min-width: 560px">
        <div class="card card-default">
          <div class="card-header d-flex justify-content-center">
            <h2>Daftar Inventaris Barang</h2>
          </div>

          <div class="card-body">
            <div>
              <v-table
                :data="barang"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="10"
                @totalPagesChanged="totalPages = $event"
                style="height: 300px; overflow: scroll; width: 100%"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="nama_barang" scope="col">Nama Barang</v-th>
                    <v-th sortKey="year" scope="col">Tahun</v-th>
                    <v-th sortKey="harga_barang" scope="col">Harga Barang</v-th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.nama_barang }}</td>
                    <td>{{ data.year }}</td>
                    <td>{{ data.harga_barang | toCurrency }}</td>
                  </tr>
                </tbody>
              </v-table>
              <smart-pagination
                :currentPage.sync="currentPage"
                :totalPages="totalPages"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-column bd-highlight mb-3 mx-1" style="min-width: 560px">
        <div class="card card-default">
          <div class="card-header d-flex justify-content-center">
            <h2>Daftar Inventaris Buku</h2>
          </div>
          <div class="card-body">
            <div class="table-responsive mt-2">
              <v-table
                :data="buku"
                class="table table-striped table-bordere"
                :currentPage.sync="currentPage1"
                :pageSize="10"
                @totalPagesChanged="totalPages1 = $event"
                style="height: 290px; overflow: scroll; width: 100%"
              >
                <!-- Id	judul	Penulis	Penerbit	Tanggal	Kondisi	Jumlah	Jenis	Pengguna	Lokasi	Action -->
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="judul" scope="col">Judul</v-th>
                    <v-th sortKey="tanggal_terbit" scope="col"
                      >Tanggal Terbit</v-th
                    >
                    <v-th sortKey="harga" scope="col">Harga</v-th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <!-- index number -->
                    <td scope="data">
                      {{ data.id }}
                    </td>
                    <td>
                      {{ data.judul }}
                    </td>
                    <td>
                      {{ data.tanggal }}
                    </td>
                    <td>
                      {{ data.harga | toCurrency }}
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <smart-pagination
                :currentPage.sync="currentPage1"
                :totalPages="totalPages1"
              />
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
import InventarisPieChart from "./Chart/InventarisPieChart.vue";
import KategoriPieChart from "./Chart/KategoriPieChart.vue";
import InventarisTidakTerpakai from "./Chart/InventarisTidakTerpakai.vue";
import JenisPieChart from "./Chart/JenisPieChart.vue";

export default {
  name: "home",
  metaInfo: {
    title: "Home",
  },
  components: {
    InventarisPieChart,
    KategoriPieChart,
    InventarisTidakTerpakai,
    JenisPieChart,
  },
  data() {
    return {
      i: 1,
      barang: [],
      buku: [],
      pengajuan: [],
      user: "",
      users: {
        has_dokumen: {
          foto_pegawai: "",
        }
      },
      loginType: "",
      currentPage: 1,
      totalPages: 0,
      currentPage1: 1,
      totalPages1: 0,
      currentPage2: 1,
      totalPages2: 0,
      updateUser: {},
    };
  },
  mounted() {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");

    axios
      .get(`/api/user`)
      .then((response) => {
        this.user = response.data;
        this.loginType = response.data.roles[0].name;

        axios.get(`/api/pengguna/` + response.data.id).then((response) => {
          this.barang = response.data.barang;
          this.buku = response.data.buku;
        });
        axios
          .get(`/api/pengajuan/user/` + response.data.id)
          .then((response) => {
            this.pengajuan = response.data.pengajuan;
          });
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 500) {
          localStorage.clear();
          this.$router.push("/login");
        }
        console.error(error);
      });
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.setUser();

      this.$router.push("/");
    },
    updateUserData() {
      let token_api = localStorage.getItem("token_api");
      axios
        .get(`https://laporan.4visionmedia.com/api/user`, {
          headers: { Authorization: token_api },
        })
        .then((response) => {
          this.updateUser = response.data;
          axios
            .put(`/api/pengguna/` + this.user.id, {
              name: this.updateUser.username,
              jabatan: this.updateUser.jabatan.nama,
              id_api: this.updateUser.id,
            })
            .then((response) => {
              window.location.reload();
            });
        });
    },
  },

  created() {
    axios
      .get("https://laporan.4visionmedia.com/api/user", {
        headers: { Authorization: localStorage.getItem("token_api") },
      })
      .then((response) => {
        this.users = response.data;
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
