<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3">
          <div class="card-body pallet-darken font-lighten">
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
              <input class="form-control" v-model="filters.jenis_buku.value" />
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
                :data="jenis"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Jenis</th>
                    <th scope="col">Jumlah</th>
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
                      {{ data.jumlah }}
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
                          id="show-btn"
                          @click="showModal(data)"
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
              <sweet-modal ref="modalDelete" icon="warning">
                <div class="d-block text-center">
                  <h3>
                    Apakah Anda Yakin Mau Menghapus Data Jenis
                    <div v-if="DataDelete">{{ DataDelete.jenis_buku }}</div>
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
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      DataDelete: null,
    };
  },
  created() {
    let uri = `/api/jenis`;
    axios.get(uri).then((response) => {
      this.jenis = response.data.jenis;
    });
  },
  methods: {
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
