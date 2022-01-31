<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3 mt-3">
          <div class="card-body pallet-darken font-lighten">
            Halaman ini merupakan untuk menambahkan lokasi sebuah tempat untuk
            penempatan barang dan buku.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Lokasi</div>

          <div class="card-body">
            <span
              v-if="loginType == 'admin'"
              class="d-flex flex-row-reverse mx-3"
            >
              <router-link
                :to="{ name: 'create-lokasi' }"
                class="btn btn-md btn-primary"
                >Tambah Data lokasi</router-link
              >
            </span>
            <div class="table-responsive mt-2">
              <label>Filter Berdasarkan Lokasi:</label>
              <input class="form-control" v-model="filters.lokasi.value" />
              <br />
              <v-table
                :data="lokasi"
                :filters="filters"
                class="table table-striped table-bordered"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="lokasi" scope="col">Nama lokasi</v-th>
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
                      {{ data.lokasi }}
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'detail-lokasi',
                          params: { id: data.id },
                        }"
                        class="btn btn-sm btn-primary"
                      >
                        <i class="ion ion-ios-eye"></i
                      ></router-link>
                      <span v-if="loginType == 'admin'">
                        <router-link
                          :to="{
                            name: 'edit-lokasi',
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
    title: "Lokasi",
  },
  data() {
    return {
      filters: {
        lokasi: { value: "", keys: ["lokasi"] },
      },
      lokasi: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
    };
  },
  created() {
    let uri = `/api/lokasi`;
    axios.get(uri).then((response) => {
      this.lokasi = response.data.lokasi;
    });
  },
  methods: {
    destroy(id) {
      let uri = `/api/lokasi/${id}`;
      axios.delete(uri).then((response) => {
        this.lokasi = this.lokasi.filter((lokasi) => lokasi.id != id);
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
