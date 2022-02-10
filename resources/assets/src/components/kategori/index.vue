<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3">
          <div class="card-body pallet-darken font-lighten">
            Ini adalah halaman DataMaster Kategori Barang. Kategori Barang
            merupakan turunan dari Sifat Barang. Contoh Kategori Barang seperti
            bawahan elektronik yaitu PC, dan furniture yaitu meja. Isi Sifat
            Barang terlebih dahulu.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Kategori</div>

          <div class="card-body">
            <span
              v-if="loginType == 'admin'"
              class="d-flex flex-row-reverse mx-3"
            >
              <router-link
                :to="{ name: 'create-kategori' }"
                class="btn btn-md btn-primary"
                >Tambah Data kategori</router-link
              >
            </span>
            <div class="table-responsive mt-2">
              <label>Filter berdasarkan Nama Kategori:</label>
              <input
                class="form-control"
                v-model="filters.nama_kategori.value"
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
                :data="kategori"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="nama_kategori" scope="col"
                      >Nama Kategori</v-th
                    >
                    <th scope="col">Fungsi</th>
                    <th scope="col">Sifat Kategori</th>
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
                      {{ data.nama_kategori }}
                    </td>
                    <td>
                      {{ data.fungsi }}
                    </td>
                    <td>
                      {{ data.sifat.sifat_kategori }}
                    </td>
                    <td>
                      {{ data.jumlah }}
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'detail-kategori',
                          params: { id: data.id },
                        }"
                        class="btn btn-sm btn-primary"
                      >
                        <i class="ion ion-ios-eye"></i
                      ></router-link>
                      <span v-if="loginType == 'admin'">
                        <router-link
                          :to="{
                            name: 'edit-kategori',
                            params: { id: data.id },
                          }"
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
                    Apakah Anda Yakin Mau Menghapus Data Kategori
                    <div v-if="DataDelete">{{ DataDelete.nama_kategori }}</div>
                  </h3>
                  <button
                    @click="deleteData(DataDelete.id)"
                    class="btn btn-danger btn-lg"
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
    title: "Kategori",
  },
  data() {
    return {
      filters: {
        nama_kategori: { value: "", keys: ["nama_kategori"] },
      },
      kategori: [],
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      barang: [
        {
          sifat: {
            sifat_kategori: "",
          },
        },
      ],
      user: "",
      isLoggedIn: false,
      loginType: null,
      DataDelete: {},
    };
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
  created() {
    let uri = `/api/kategori`;
    axios.get(uri).then((response) => {
      this.kategori = response.data.kategori;
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
      let uri = `/api/kategori/${id}`;
      axios.delete(uri).then((response) => {
        this.kategori = this.kategori.filter((kategori) => kategori.id != id);
      });
    },
  },
};
</script>
