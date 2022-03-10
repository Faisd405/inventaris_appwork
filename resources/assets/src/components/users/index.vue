<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3 mt-3">
          <div class="card-body pallet-darken font-lighten">
            ini adalah halaman dimana kita dapat mengelola Data User pada Sistem
            untuk Login, dan juga pengaturan hierarki User dapat di atur dalam
            menu management user ini.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Management Users</div>

          <div class="card-body">
            <span
              v-if="loginType == 'admin'"
              class="d-flex flex-row-reverse mx-3"
            >
              <router-link
                :to="{ name: 'create-users' }"
                class="btn btn-md btn-primary"
                >Tambah Users</router-link
              >
            </span>
            <div class="table-responsive mt-2">
              <label>Filter Berdasarkan Nama:</label>
              <input
                type="text"
                class="form-control"
                v-model="filters.name.value"
              />

              <br />
              <div>
                <label>Jumlah Baris:</label>
                <select class="form-control" v-model="pageSize">
                  <option :value="10">10</option>
                  <option :value="25">25</option>
                  <option :value="50">50</option>
                  <option :value="100">100</option>
                </select>
              </div>

              <br />

              <v-table
                :data="users"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="name" scope="col">Nama</v-th>
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
                      <span v-if="user.id == 1 && loginType == 'admin'">
                        <router-link
                          :to="{
                            name: 'edit-users',
                            params: { id: data.id },
                          }"
                          class="btn btn-sm btn-primary"
                        >
                          <i class="ion ion-md-create"></i
                        ></router-link>
                        <button
                          v-if="data.id != 1"
                          class="btn btn-sm btn-danger"
                          @click="showModal(data)"
                        >
                          <i class="ion ion-ios-trash"></i>
                        </button>
                      </span>
                      <span v-else> Tidak ada Akses </span>
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <smart-pagination
                :currentPage.sync="currentPage"
                :totalPages="totalPages"
              />
              <sweet-modal ref="modalDelete" icon="warning">
                <div class="d-block text-center">
                  <h3>
                    Apakah Anda Yakin Mau Menghapus Data User
                    <div v-if="DataDelete">{{ DataDelete.name }}</div>
                  </h3>
                  <button
                    @click="deleteData(DataDelete.id)"
                    class="btn btn-success btn-lg"
                  >
                    Hapus
                  </button>
                  <button @click="closeModal()" class="btn btn-primary btn-lg">
                    Batal
                  </button>
                </div>
              </sweet-modal>
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
    title: "Users",
  },
  data() {
    return {
      filters: {
        name: { value: "", keys: ["name"] },
      },
      users: [],
      barang: [],
      user: "",
      isLoggedIn: false,
      loginType: "",
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      DataDelete: {},
    };
  },
  created() {
    let uri = `/api/users`;
    axios.get(uri).then((response) => {
      this.users = response.data.user;
    });
  },

  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    showModal(data) {
      this.DataDelete = data;
      this.$refs.modalDelete.open();
    },
    closeModal() {
      this.$refs.modalDelete.close();
    },
    deleteData(id) {
      this.closeModal();
      this.destroy(id);
    },
    destroy(id) {
      let uri = `/api/users/${id}`;
      axios.delete(uri).then((response) => {
        this.users = this.users.filter((users) => users.id != id);
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
