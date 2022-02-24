<template>
  <div class="container-fluid">
    <div class="d-flex flex-row">
      <div class="d-flex flex-column bd-highlight mb-3 mx-1">
        <div
          class="card text-white pallet-dark m-1 shadow-lg"
          style="min-width: 16rem; height: 12rem"
        >
          <div class="card-header">
            <router-link to="/laporan/barang" class="text-primary">
              <strong> Total Inventaris </strong>
            </router-link>
          </div>
          <div class="card-body">
            <router-link to="/laporan/barang"
              ><h2 class="card-title text-white">
                {{ barang.length + buku.length }}
              </h2></router-link
            >
          </div>
        </div>
        <div
          class="card text-white pallet-dark m-1 shadow-lg"
          style="min-width: 16rem; height: 12rem"
        >
          <div class="card-header">
            <router-link to="/laporan/pengguna" class="text-primary"
              ><strong> Total Pengguna</strong></router-link
            >
          </div>
          <div class="card-body">
            <router-link to="/laporan/pengguna"
              ><h2 class="card-title text-white">
                {{ pengguna.length }}
              </h2></router-link
            >
          </div>
        </div>
      </div>
      <div class="d-flex flex-column bd-highlight mb-3 mx-1">
        <div
          class="card text-white pallet-dark m-1 shadow-lg"
          style="min-width: 16rem; height: 12rem"
        >
          <div class="card-header">
            <router-link
              to="/laporan/LaporanTBarangTidakTerpakai"
              class="text-primary"
              ><strong>Inventaris Tidak digunakan</strong></router-link
            >
          </div>
          <div class="card-body">
            <router-link to="/laporan/LaporanTBarangTidakTerpakai"
              ><h2 class="card-title text-white">
                {{ NoPengguna.length }}
              </h2></router-link
            >
          </div>
        </div>
        <div
          class="card text-white pallet-dark m-1 shadow-lg"
          style="min-width: 16rem; height: 12rem"
        >
          <div class="card-header">
            <router-link
              to="/laporan/LaporanTBarangTerpakai"
              class="text-primary"
              ><strong>Inventaris digunakan</strong></router-link
            >
          </div>
          <div class="card-body">
            <router-link to="/laporan/LaporanTBarangTerpakai"
              ><h2 class="card-title text-white">
                {{ barang.length - NoPengguna.length }}
              </h2></router-link
            >
          </div>
        </div>
      </div>
      <div class="d-flex flex-row bd-highlight mb-3 mx-1">
        <div
          class="flex-column card card-body"
          style="max-width: 18rem; max-height: 24rem"
        >
          <label>Kategori Inventaris :</label>
          <InventarisPieChart
            style="max-height: 18rem; margin-top: 20px"
          ></InventarisPieChart>
        </div>
      </div>
      <div class="d-flex flex-column bd-highlight mb-3 mx-1">
        <div class="card card-body" style="min-width: 20rem; max-height: 24rem">
          <div class="align-items-center">
            <div>
              <h3>Name : {{ user.name }}</h3>
            </div>
            <div>
              <h3>Roles : {{ loginType }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row">
      <div class="flex-column bd-highlight mb-3 mx-1" style="min-width: 800px">
        <div class="card card-default">
          <div class="card-header">Daftar Inventaris Barang</div>

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
        <div class="card card-default">
          <div class="card-header">Daftar Inventaris Buku</div>
          <div class="card-body">
            <div class="table-responsive mt-2">
              <v-table
                :data="buku"
                class="table table-striped table-bordere"
                :currentPage.sync="currentPage1"
                :pageSize="10"
                @totalPagesChanged="totalPages1 = $event"
                style="height: 500px; overflow: scroll; width: 100%"
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

      <div class="flex-column bd-highlight mb-3 mx-1">
        <div
          class="card text-white pallet-dark col-md-6 m-1 shadow-lg"
          style="min-width: 21.5rem; height: 8rem"
        >
          <div class="card-header">
            <router-link to="/laporan/LaporanTHargaBarang" class="text-primary"
              ><strong>Data Asset Barang</strong></router-link
            >
          </div>
          <div class="card-body">
            <router-link to="/laporan/LaporanTHargaBarang"
              ><h4 class="card-title text-white">
                {{ total | toCurrency }}
              </h4></router-link
            >
          </div>
        </div>
        <div
          class="flex-column card card-body m-1"
          style="max-width: 21.5rem; max-height: 24rem"
        >
          <label>Kategori Barang :</label>
          <KategoriPieChart
            style="max-height: 18rem; margin-top: 20px"
          ></KategoriPieChart>
        </div>
        <div
          class="card text-white pallet-dark col-md-6 m-1 shadow-lg"
          style="min-width: 21.5rem; height: 8rem"
        >
          <div class="card-header">
            <router-link to="/laporan/LaporanTHargaBarang" class="text-primary"
              ><strong>Data Asset Buku</strong></router-link
            >
          </div>
          <div class="card-body">
            <router-link to="/laporan/buku"
              ><h4 class="card-title text-white">
                {{ totalbuku | toCurrency }}
              </h4></router-link
            >
          </div>
        </div>
        <div
          class="flex-column card card-body m-1"
          style="max-width: 21.5rem; max-height: 24rem"
        >
          <label>Jenis Buku :</label>
          <JenisPieChart
            style="max-height: 18rem; margin-top: 20px"
          ></JenisPieChart>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row">
      <div class="d-flex flex-row bd-highlight mb-3 mx-1">
        <div
          class="flex-column card card-body"
          style="min-width: 690px; min-height: 500px"
        >
          <label>Data Inventaris tidak terpakai sepanjang tahun :</label>
          <InventarisTidakTerpakai
            style="margin-top: 20px"
          ></InventarisTidakTerpakai>
        </div>
      </div>
      <div class="d-flex flex-row bd-highlight mb-3 mx-1">
        <div class="table-responsive mt-2">
          <div class="card card-default">
            <div class="card-header">Daftar Pengguna</div>
            <div class="card-body">
              <v-table
                :data="pengguna"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage2"
                :pageSize="5"
                @totalPagesChanged="totalPages2 = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="name" scope="col">Nama Pengguna</v-th>
                    <th scope="col">Jabatan</th>
                    <th scope="col">Nilai Asset</th>
                    <th scope="col">Detail</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <!-- index number with i++ -->

                  <tr v-for="(data, index) in displayData" :key="data.guid">
                    <!-- index number -->
                    <td scope="data">
                      {{ data.id }}
                    </td>
                    <td>
                      {{ data.name }}
                    </td>
                    <td>
                      {{ data.jabatan }}
                    </td>
                    <td>
                      {{ hargaPerPengguna[index++] | toCurrency }}
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'detail-pengguna',
                          params: { id: data.id },
                        }"
                      >
                        <button class="btn btn-sm btn-primary p-y">
                          <i class="ion ion-ios-eye"></i>
                        </button>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <smart-pagination
                :currentPage.sync="currentPage2"
                :totalPages="totalPages2"
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
      hargaPerPengguna: [],
      users: [],
      NoPengguna: [],
      kategori: [],
      total: [],
      totalbuku: [],
      user: "",
      loginType: "",
      pengguna: [],
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
    axios.get(`/api/inventaris/hargaPerPengguna`).then((response) => {
      this.hargaPerPengguna = response.data.harga;
    });
    axios.get(`/api/buku/total`).then((response) => {
      this.totalbuku = response.data.total;
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
