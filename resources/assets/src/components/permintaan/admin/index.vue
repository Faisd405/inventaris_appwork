<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3 mt-3">
          <div class="card-body pallet-darken font-lighten">
            Halaman Permintaan Admin merupakan halaman untuk menerima apa yang
            telah di ajukan oleh user dan memasukan ke daftar barang.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Permintaan</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
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
                :data="permintaan"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Detail Barang</th>
                    <th scope="col">Fungsi</th>
                    <th scope="col">Harga Barang</th>
                    <th scope="col">Jumlah Barang</th>
                    <th scope="col">Nama User</th>
                    <th scope="col">Keterangan</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.barang.nama_barang }}</td>
                    <td>{{ data.barang.detail_barang }}</td>
                    <td>{{ data.barang.fungsi }}</td>
                    <td>{{ data.barang.harga_barang | toCurrency }}</td>
                    <td>{{ data.barang.jumlah_barang }}</td>
                    <td>{{ data.pengguna.name }}</td>
                    <td>{{ data.keterangan }}</td>
                    <td>
                      <button
                        @click="showModal(data)"
                        class="btn btn-sm btn-danger mt-1"
                      >
                        Tolak
                      </button>
                      <button
                        @click="setujuModal(data)"
                        class="btn btn-sm btn-success mt-1"
                      >
                        Setuju
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
                    Apakah Anda Yakin Mau Menolak Permintaan Ini?
                    <div v-if="DataDelete">{{ DataDelete.nama_barang }}</div>
                  </h3>
                  <button
                    @click="deleteData(DataDelete.id)"
                    class="btn btn-success btn-lg"
                  >
                    Tolak
                  </button>
                  <button @click="closeModal()" class="btn btn-primary btn-lg">
                    Batal
                  </button>
                </div>
              </sweet-modal>
              <sweet-modal ref="modalSetuju">
                <div class="d-block text-center">
                  <h3>
                    Apakah Anda Yakin Setuju dengan Permintaan Ini?
                    <div v-if="DataSetuju">
                      <br />
                      barang yang di inginkan :
                      {{ DataSetuju.barang.nama_barang }}
                      <br />
                      <br />
                      pengguna yang ingin memakai :
                      {{ DataSetuju.pengguna.name }}
                    </div>
                  </h3>
                  <button
                    @click="setujuData(DataSetuju.id)"
                    class="btn btn-success btn-lg"
                  >
                    Setuju
                  </button>
                  <button
                    @click="closeModalSetuju()"
                    class="btn btn-primary btn-lg"
                  >
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
    title: "Permintaan Admin",
  },
  data() {
    return {
      permintaan: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      DataDelete: {},
      DataSetuju: {
        barang: {},
        pengguna: {},
      },
    };
  },
  created() {
    let uri = `/api/permintaan`;
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
    setujuModal(data) {
      this.DataSetuju = data;
      this.$refs.modalSetuju.open();
    },
    closeModalSetuju() {
      this.$refs.modalSetuju.close();
    },
    setujuData(data) {
      this.closeModalSetuju();
      this.setuju(data);
    },
    setuju(id) {
      let uri = `/api/permintaan/setuju`;
      axios.post(uri, { id: id }).then((response) => {
        this.permintaan = this.permintaan.filter(
          (permintaan) => permintaan.barang_id != response.data.permintaan.id
        );
      });
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
