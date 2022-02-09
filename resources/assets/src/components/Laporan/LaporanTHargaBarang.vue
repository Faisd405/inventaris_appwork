<template>
  <div class="container-fluid">
    <div class="card mb-3 mt-3">
      <div class="card-body pallet-darken font-lighten">
        Halaman laporan yang memberikan informasi data harga barang.
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12 justify-content-center">
        <div class="card card-default">
          <div class="card-header">Harga Barang</div>

          <div class="card-body">
            <div>
              <label>Filter berdasarkan Nama Barang:</label>
              <input class="form-control" v-model="filters.nama_barang.value" />

              <br />
              <div>
                <label>Jumlah Baris:</label>
                <select class="form-control"  v-model="pageSize">
                  <option :value="10">10</option>
                  <option :value="25">25</option>
                  <option :value="50">50</option>
                  <option :value="100">100</option>
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
                    <v-th sortKey="harga_barang" scope="col">Harga Barang</v-th>
                    <th scope="col">Pemakai</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.nama_barang }}</td>
                    <td>{{ data.harga_barang | toCurrency }}</td>
                    <td>{{ data.pengguna.name }}</td>
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
        <div class="card mt-3">
          <div class="card-body">
            <label>Chart Total :</label>
            <TotalChart></TotalChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import TotalChart from "../Chart/TotalChart.vue";
import Vue from "vue";
export default {
  metaInfo: {
    title: "Barang",
  },
  components: {
    TotalChart,
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
      total: 0,
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
    axios.get(`/api/barang/total`).then((response) => {
      this.total = response.data.total;
    });
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
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
</script>
