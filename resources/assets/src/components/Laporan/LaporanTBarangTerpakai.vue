<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 justify-content-center">
        <div class="card mb-3 mt-3">
          <div class="card-body pallet-darken font-lighten">
            Halaman laporan yang memberikan informasi data barang yang sedang dipakai
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Barang Terpakai</div>

          <div class="card-body">
            <div>
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
                    <td>{{ data.harga_barang }}</td>
                    <td>{{ data.lokasi.lokasi }}</td>
                    <td>{{ data.detail_lokasi }}</td>
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
import axios from "axios";
export default {
  metaInfo: {
    title: "Barang",
  },
  data() {
    return {
      filters: {
        nama_barang: { value: "", keys: ["nama_barang"] },
      },
      barang: [],
      sortBy: "id",
      user: "",
      isLoggedIn: false,
      loginType: "",
    };
  },

  created() {
    let uri = `/api/pengguna/pengguna`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
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

    axios.get(`/api/user`).then((response) => {
        this.user = response.data;
        this.loginType = response.data.roles[0].name;
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 500) {
          localStorage.clear();
          this.$router.push("/login");
        }
        console.error(error);
      })
  },
};
</script>
