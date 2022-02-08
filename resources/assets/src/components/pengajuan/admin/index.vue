<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3 mt-3">
          <div class="card-body pallet-darken font-lighten">
            Halaman Pengajuan Admin merupakan halaman untuk menerima apa yang
            telah di ajukan oleh user dan memasukan ke daftar barang.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Pengajuan</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <label>Filter Berdasarkan pengajuan:</label>
              <input class="form-control" v-model="filters.pengajuan.value" />
              <br />
              <v-table
                :data="pengajuan"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="5"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Detail Barang</th>
                    <th scope="col">Fungsi</th>
                    <th scope="col">Harga Barang</th>
                    <th scope="col">Jumlah Barang</th>
                    <th scope="col">Status</th>
                    <th scope="col">Nama User</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.nama_barang }}</td>
                    <td>{{ data.detail_barang }}</td>
                    <td>{{ data.fungsi }}</td>
                    <td>{{ data.harga_barang | toCurrency }}</td>
                    <td>{{ data.jumlah_barang }}</td>
                    <td>{{ data.status }}</td>
                    <td>{{ data.user.name }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'detail-pengajuan',
                          params: { id: data.id },
                        }"
                        class="btn btn-sm btn-primary mt-1"
                      >
                        <i class="ion ion-ios-eye"></i
                      ></router-link>
                      <router-link
                        :to="{
                          name: 'setuju-pengajuan-admin',
                          params: { id: data.id },
                        }"
                        class="btn btn-sm btn-success mt-1"
                        >Setuju</router-link
                      >
                      <button
                        @click="destroy(data.id)"
                        class="btn btn-sm btn-danger mt-1"
                      >
                        Tolak
                      </button>
                    </td>
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
import axios from "axios";
export default {
  metaInfo: {
    title: "Pengajuan",
  },
  data() {
    return {
      filters: {
        pengajuan: { value: "", keys: ["pengajuan"] },
      },
      pengajuan: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
      currentPage: 1,
      totalPages: 0,
    };
  },
  created() {
    let uri = `/api/pengajuan`;
    axios.get(uri).then((response) => {
      this.pengajuan = response.data.pengajuan;
    });
  },
  methods: {
    destroy(id) {
      let uri = `/api/pengajuan/${id}`;
      axios.delete(uri).then((response) => {
        this.pengajuan = this.pengajuan.filter(
          (pengajuan) => pengajuan.id != id
        );
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
