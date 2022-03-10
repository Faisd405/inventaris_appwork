<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3 mt-3">
          <div class="card-body pallet-darken font-lighten">
            Halaman Permintaan User merupakan halaman untuk mengajukan barang
            yang dibutuhkan user.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Permintaan</div>

          <div class="card-body">
            <span class="d-flex flex-row-reverse mx-3">
              <router-link
                :to="{ name: 'create-permintaan' }"
                class="btn btn-md btn-primary"
                >Tambah Data permintaan</router-link
              >
            </span>
            <div>
              <label>Jumlah Baris:</label>
              <select class="form-control" v-model="pageSize">
                <option :value="10">10</option>
                <option :value="25">25</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
              </select>
            </div>
            <div class="table-responsive mt-2">
              <label>Filter Berdasarkan permintaan:</label>
              <input class="form-control" v-model="filters.permintaan.value" />
              <br />

              <v-table
                :data="permintaan"
                :filters="filters"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Detail Barang</th>
                    <th scope="col">Fungsi</th>
                    <th scope="col">Tahun</th>
                    <th scope="col">Keterangan</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.barang.nama_barang }}</td>
                    <td>{{ data.barang.detail_barang }}</td>
                    <td>{{ data.barang.kategori.nama_kategori }}</td>
                    <td>{{ data.barang.fungsi }}</td>
                    <td>{{ data.barang.year }}</td>
                    <td>{{ data.keterangan }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'detail-barang',
                          params: { id: data.barang.id },
                        }"
                        class="btn btn-sm btn-primary"
                      >
                        <i class="ion ion-ios-eye"></i
                      ></router-link>
                      <button
                        @click="showModal(data)"
                        class="btn btn-sm btn-danger"
                      >
                        <i class="ion ion-ios-trash"></i>
                      </button>
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
                    Apakah Anda Yakin Mau Menghapus Data Permintaan Anda
                    <div v-if="DataDelete">{{ DataDelete.nama_barang }}</div>
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
import Vue from "vue";
export default {
  metaInfo: {
    title: "Permintaan",
  },
  data() {
    return {
      filters: {
        permintaan: { value: "", keys: ["permintaan"] },
      },
      permintaan: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      DataDelete: {},
    };
  },
  created() {
    let uri = `/api/permintaan/user/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.permintaan = response.data.permintaan;
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
      let uri = `/api/permintaan/${id}`;
      axios.delete(uri).then((response) => {
        this.permintaan = this.permintaan.filter(
          (permintaan) => permintaan.id != id
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
        if (this.user.id != this.$route.params.id) {
          this.$router.push({ name: "home" });
        }
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
