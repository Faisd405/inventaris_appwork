<template>
  <div class="container">
    <div class="row">
      <div
        class="card text-white bg-primary m-3"
        style="width: 14rem; height: 10rem"
      >
        <div class="card-header">
          <strong> Total Barang </strong>
        </div>
        <div class="card-body">
          <h1 class="card-title">{{ barang.length }}</h1>
        </div>
      </div>

      <div class="card m-3 col">
        <div class="card-body">
          <label>Chart Kategori :</label>
          <KategoriChart></KategoriChart>
        </div>
      </div>
      <div class="card m-3 col">
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

              <v-table
                :data="barang"
                :filters="filters"
                class="table table-striped table-bordered"
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
                    <td>{{ data.harga_barang }}</td>
                    <td>{{ data.lokasi.lokasi }}</td>
                    <td>{{ data.pengguna.name }}</td>
                    <td>{{ data.year }}</td>
                    <td>{{ data.jumlah_barang }}</td>
                  </tr>
                </tbody>
              </v-table>
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
import axios from "axios";
export default {
  metaInfo: {
    title: "Barang",
  },
  components: {
    KategoriChart,
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
</script>
