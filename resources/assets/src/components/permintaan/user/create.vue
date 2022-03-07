<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3 mt-3">
          <div class="card-body pallet-darken font-lighten">
            Halaman barang User merupakan halaman untuk mengajukan barang yang
            dibutuhkan user.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Barang yang tidak digunakan</div>

          <div class="card-body">
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
              <v-table
                :data="barang"
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
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.nama_barang }}</td>
                    <td>{{ data.detail_barang }}</td>
                    <td>{{ data.kategori.nama_kategori }}</td>
                    <td>{{ data.fungsi }}</td>
                    <td>{{ data.year }}</td>
                    <td>
                      <button
                        @click="showModal(data)"
                        class="btn btn-sm btn-primary"
                      >
                        <i class="ion ion-ios-checkmark-circle"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <smart-pagination
                :currentPage.sync="currentPage"
                :totalPages="totalPages"
              />
              <sweet-modal ref="modalDelete">
                <div class="d-block text-center">
                  <h4>
                    Apakah anda ingin menggunakan {{ DataSetuju.nama_barang }},
                    Sebutkan alasan anda ingin menggunakan Barang Tersebut
                  </h4>
                  <form @submit.prevent="formSetuju">
                    <div class="form-group">
                      <label>Keterangan</label>
                      <textarea
                        class="form-control"
                        v-model="keterangan"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary">Setuju</button>
                    </div>
                  </form>
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
    title: "Tambah barang",
  },
  data() {
    return {
      pengguna: [],
      barang: [],
      buku: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      DataSetuju: {},
      keterangan: "",
    };
  },
  created() {
    let uri = `/api/pengguna/1`;
    axios.get(uri).then((response) => {
      this.pengguna = response.data.pengguna;
      this.barang = response.data.barang;
      this.buku = response.data.buku;
    });
  },
  methods: {
    showModal(data) {
      this.DataSetuju = data;
      this.$refs.modalDelete.open();
    },
    closeModal() {
      this.$refs.modalDelete.close();
    },
    formSetuju() {
      let uri = `/api/permintaan`;
      let data = {
        barang_id: this.DataSetuju.id,
        pengguna_id: this.user.id,
        keterangan: this.keterangan,
      };
      axios.post(uri, data).then((response) => {
        this.closeModal();
        this.$router.push("/permintaan/user/" + this.user.id);
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
