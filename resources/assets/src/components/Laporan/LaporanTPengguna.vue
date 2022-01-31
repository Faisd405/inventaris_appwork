<template>
  <div class="container">
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
              <input type="text" class="form-control" v-model="filters.name.value" />

              <br />
              <v-table
                :data="pengguna"
                :filters="filters"
                class="table table-striped table-bordered"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="name" scope="col">Nama Pengguna</v-th>
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
