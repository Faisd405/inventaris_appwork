<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3">
          <div class="card-body bg-dark text-white">
            Ini adalah halaman DataMaster Jenis Buku. Contoh Jenis Buku seperti
            Buku Pendidikan, Novel, dan Komik
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Jenis Buku</div>

          <div class="card-body">
            <span
              v-if="loginType == 'admin'"
              class="d-flex flex-row-reverse mx-3"
            >
              <router-link
                :to="{ name: 'create-jenis' }"
                class="btn btn-md btn-primary"
                >Tambah Data jenis</router-link
              >
            </span>
            <div class="table-responsive mt-2">
              <label>Filter berdasarkan Nama Jenis:</label>
              <input
                class="form-control"
                v-model="filters.jenis_buku.value"
              />
              <br />

              <v-table
                :data="jenis"
                :filters="filters"
                class="table table-striped table-bordered"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="jenis_buku" scope="col">Nama Jenis</v-th>
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
                      {{ data.jenis_buku }}
                    </td>
                    <td>
                       <span v-if="loginType == 'admin'">
                        <router-link
                          :to="{
                            name: 'edit-jenis',
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
    title: "Jenis",
  },
  data() {
    return {
      filters: {
        jenis_buku: { value: "", keys: ["jenis_buku"] },
      },
      jenis: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
    };
  },
  created() {
    let uri = `/api/jenis`;
    axios.get(uri).then((response) => {
      this.jenis = response.data.jenis;
    });
  },
  methods: {
    destroy(id) {
      let uri = `/api/jenis/${id}`;
      axios.delete(uri).then((response) => {
        this.jenis = this.jenis.filter((jenis) => jenis.id != id);
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
