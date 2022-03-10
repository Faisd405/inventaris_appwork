<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3">
          <div class="card-body pallet-darken font-lighten">
            Ini adalah halaman Daftar Buku untuk meng list buku apa saja yang
            ada di kantor, dipegang oleh siapa dan untuk mengetahui dimana
            lokasi buku tersebut.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Buku</div>

          <div class="card-body">
            <div
              class="d-flex flex-row-reverse mx-3"
              v-if="loginType == 'admin'"
            >
              <router-link
                :to="{ name: 'create-buku' }"
                class="btn btn-md btn-primary"
                >Tambah Data buku</router-link
              >
            </div>
            <div class="table-responsive mt-2">
              <label>Filter berdasarkan Judul Buku:</label>
              <input class="form-control" v-model="filters.judul.value" />

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
                :data="buku"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <!-- Id	judul	Penulis	Penerbit	Tanggal	Kondisi	Jumlah	Jenis	Pengguna	Lokasi	Action -->
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="judul" scope="col">Judul</v-th>
                    <th sortKey="penulis" scope="col">Penulis</th>
                    <th sortKey="penerbit" scope="col">Penerbit</th>
                    <v-th sortKey="tanggal_terbit" scope="col">Tahun</v-th>
                    <th sortKey="kondisi" scope="col">Kondisi</th>
                    <v-th sortKey="jumlah" scope="col">Jumlah</v-th>
                    <th sortKey="jenis" scope="col">Jenis</th>
                    <th sortKey="pengguna" scope="col">Pengguna</th>
                    <th sortKey="lokasi" scope="col">Lokasi</th>
                    <th sortKey="harga">Harga</th>
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
                      {{ data.judul }}
                    </td>
                    <td>
                      {{ data.penulis }}
                    </td>
                    <td>
                      {{ data.penerbit }}
                    </td>
                    <td>
                      {{ data.tanggal }}
                    </td>
                    <td>
                      {{ data.kondisi }}
                    </td>
                    <td>
                      {{ data.jumlah }}
                    </td>
                    <td>
                      {{ data.jenis.jenis_buku }}
                    </td>
                    <td>
                      {{ data.pengguna.name }}
                    </td>
                    <td>
                      {{ data.lokasi.lokasi }}
                    </td>
                    <td>
                      {{ data.harga }}
                    </td>
                    <td>
                      <router-link
                        :to="{ name: 'detail-buku', params: { id: data.id } }"
                        class="btn btn-sm btn-info"
                      >
                        <i class="ion ion-md-eye"></i>
                      </router-link>
                      <span v-if="loginType == 'admin'">
                        <router-link
                          :to="{ name: 'edit-buku', params: { id: data.id } }"
                          class="btn btn-sm btn-warning"
                        >
                          <i class="ion ion-md-create"></i
                        ></router-link>
                        <button
                          class="btn btn-sm btn-danger"
                          @click="showModal(data)"
                        >
                          <i class="ion ion-ios-trash"></i>
                        </button>
                      </span>
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
                    Apakah Anda Yakin Mau Menghapus Data Buku
                    <div v-if="DataDelete">{{ DataDelete.judul }}</div>
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
    title: "buku",
  },
  data() {
    return {
      filters: {
        judul: { value: "", keys: ["judul"] },
      },
      buku: [],
      user: null,
      isLoggedIn: false,
      loginType: "",
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      DataDelete: {},
    };
  },
  created() {
    let uri = `/api/buku`;
    axios.get(uri).then((response) => {
      this.buku = response.data.buku;
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
      let uri = `/api/buku/${id}`;
      axios.delete(uri).then((response) => {
        this.buku = this.buku.filter((buku) => buku.id != id);
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
