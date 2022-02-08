<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3">
          <div class="card-body pallet-darken font-lighten">
            Ini adalah halaman DataMaster Sifat Barang. Contoh Sifat Barang
            seperti Elektronik, dan Furniture
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Sifat Barang</div>

          <div class="card-body">
            <span
              v-if="loginType == 'admin'"
              class="d-flex flex-row-reverse mx-3"
            >
              <router-link
                :to="{ name: 'create-sifat' }"
                class="btn btn-md btn-primary"
                >Tambah Data sifat</router-link
              >
            </span>
            <div class="table-responsive mt-2">
              <label>Filter berdasarkan Nama Sifat:</label>
              <input
                class="form-control"
                v-model="filters.sifat_kategori.value"
              />
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

              <br>

              <v-table
                :data="sifat"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="sifat_kategori" scope="col">Nama Sifat</v-th>
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
                      {{ data.sifat_kategori }}
                    </td>
                    <td>
                      <span v-if="loginType == 'admin'">
                        <router-link
                          :to="{
                            name: 'edit-sifat',
                            params: { id: data.id },
                          }"
                          class="btn btn-sm btn-warning"
                        >
                          <i class="ion ion-md-create"></i
                        ></router-link>

                        <button
                          @click="destroy(data.id)"
                          class="btn btn-sm btn-danger"
                        >
                          <i class="ion ion-ios-trash"></i></button
                      ></span>
                      <span v-if="loginType != 'admin'"> Tidak ada Akses </span>
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
    title: "Sifat",
  },
  data() {
    return {
      filters: {
        sifat_kategori: { value: "", keys: ["sifat_kategori"] },
      },
      sifat: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
    };
  },
  created() {
    let uri = `/api/sifat`;
    axios.get(uri).then((response) => {
      this.sifat = response.data.sifat;
    });
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy(id) {
      let uri = `/api/sifat/${id}`;
      axios.delete(uri).then((response) => {
        this.sifat = this.sifat.filter((sifat) => sifat.id != id);
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
