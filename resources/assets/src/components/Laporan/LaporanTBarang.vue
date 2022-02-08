<template>
  <div class="container">
    <div class="card mb-3 mt-3">
      <div class="card-body pallet-darken font-lighten">
        Halaman laporan yang memberikan informasi data barang
      </div>
    </div>
    <div class="row">
      <div class="card m-3" style="width: 20rem; height: 30rem">
        <div class="card-body">
          <label>Chart Total Barang PerLokasi</label>
          <LokasiChart></LokasiChart>
        </div>
      </div>
      <div class="card m-3" style="width: 20rem; height: 30rem">
        <div class="card-body">
          <label>Chart Kategori :</label>
          <KategoriChart></KategoriChart>
        </div>
      </div>
      <div class="card m-3" style="width: 20rem; height: 30rem">
        <div class="card-body">
          <label>Chart Total Aset Pertahun :</label>
          <TotalChart></TotalChart>
        </div>
      </div>
      <div class="col-xl-12 justify-content-center m-3">
        <div class="card card-default">
          <div class="card-header">Total Barang</div>

          <div class="card-body">
            <div>
              <label>Filter berdasarkan Nama Barang:</label>
              <input class="form-control" v-model="filters.nama_barang.value" />

              <br />
              <div>
                <label>Jumlah Baris:</label>
                <select class="form-control" v-model="pageSize">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>

              <br />

              <v-table
                :data="barang"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="nama_barang" scope="col">Nama Barang</v-th>
                    <th scope="col">Detail Barang</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Fungsi</th>
                    <v-th sortKey="harga_barang" scope="col">Harga Barang</v-th>
                    <th scope="col">Lokasi</th>
                    <th scope="col">Detail Lokasi</th>
                    <th scope="col">Pemakai</th>
                    <v-th sortKey="year" scope="col">Tahun</v-th>
                    <v-th sortKey="jumlah_barang" scope="col"
                      >Jumlah Barang</v-th
                    >
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.nama_barang }}</td>
                    <td>{{ data.detail_barang }}</td>
                    <td>{{ data.kategori.nama_kategori }}</td>
                    <td>{{ data.fungsi }}</td>
                    <td>{{ data.harga_barang | toCurrency }}</td>
                    <td>{{ data.lokasi.lokasi }}</td>
                    <td>{{ data.detail_lokasi }}</td>
                    <td>{{ data.pengguna.name }}</td>
                    <td>{{ data.year }}</td>
                    <td>{{ data.jumlah_barang }}</td>
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
    </div>
  </div>
</template>


<script>
import KategoriChart from "../Chart/KategoriChart.vue";
import TotalChart from "../Chart/TotalChart.vue";
import LokasiChart from "../Chart/LokasiPieChart.vue";
import axios from "axios";
import Vue from "vue";
export default {
  metaInfo: {
    title: "Barang",
  },
  components: {
    KategoriChart,
    TotalChart,
    LokasiChart,
  },
  data() {
    return {
      filters: {
        nama_barang: { value: "", keys: ["nama_barang"] },
      },
      barang: [],
      user: "",
      isLoggedIn: false,
      loginType: "",
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
    };
  },

  created() {
    let uri = `/api/barang`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
    });
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy(id) {
      axios
        .delete(`/api/barang/${id}`)
        .then((response) => {
          this.barang = this.barang.filter((barang) => barang.id != id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
