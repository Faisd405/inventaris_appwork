<template>
  <div class="container-fluid">
    <div class="card mb-3 mt-3">
      <div class="card-body pallet-darken font-lighten">
        Halaman laporan yang memberikan informasi data pengguna
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Pengguna</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <label>Filter berdasarkan Nama Pengguna:</label>
              <input
                type="text"
                class="form-control"
                v-model="filters.name.value"
              />

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
                :data="pengguna"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="name" scope="col">Nama Pengguna</v-th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <!-- index number -->
                    <td scope="data">
                      {{ data.id }}
                    </td>
                    <td>
                      {{ data.name }}
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
    title: "Pengguna",
  },
  data() {
    return {
      filters: {
        name: { value: "", keys: ["name"] },
      },
      pengguna: [],
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
    let uri = `/api/pengguna`;
    axios.get(uri).then((response) => {
      this.pengguna = response.data.pengguna;
    });
  },

  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy(id) {
      let uri = `/api/pengguna/${id}`;
      axios.delete(uri).then((response) => {
        this.pengguna = this.pengguna.filter((pengguna) => pengguna.id != id);
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
