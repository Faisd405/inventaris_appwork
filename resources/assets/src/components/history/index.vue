<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3">
          <div class="card-body pallet-darken font-lighten">
            Halaman ini merupakan untuk mengetahui Riwayat penggunaan barang
            yang pernah memakai barang dan yang sedang memakai barang
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header d-flex justify-content-between">
            <div>History</div>
            <div>
              <router-link to="/history/detail" class="btn btn-outline-primary"
                >Cek Riwayat PerBarang</router-link
              >
            </div>
          </div>
          <div class="card-body">
            <div class="mt-2">
              <b-row>
                <b-col lg="6" class="my-1">
                  <b-form-group
                    label="Filter"
                    label-for="filter-input"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                  >
                    <b-input-group size="sm">
                      <b-form-input
                        id="filter-input"
                        v-model="filter"
                        type="search"
                        placeholder="Type to Search"
                      ></b-form-input>

                      <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''"
                          >Clear</b-button
                        >
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col sm="5" md="6" class="my-1">
                  <b-form-group
                    label="Per page"
                    label-for="per-page-select"
                    label-cols-sm="6"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                  >
                    <b-form-select
                      id="per-page-select"
                      v-model="perPage"
                      :options="pageOptions"
                      size="sm"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-table
                :items="history"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                striped
                responsive
                sort-icon-left
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                :current-page="currentPage"
                :per-page="perPage"
              >
                <template slot="status" slot-scope="data">
                  {{ data.item.status }}
                  <span v-if="loginType == 'admin'">
                    <span v-if="data.item.status == 'Masih Digunakan'">
                      /<b-button id="show-btn" @click="showModal(data.item.id)"
                        >Ganti Pengguna</b-button
                      >
                    </span>
                  </span>

                  <b-modal
                    :ref="'modal-' + data.item.id"
                    title="Ganti Pengguna"
                    hide-footer
                  >
                    <form
                      @submit.prevent="
                        RelasiUserBarangUpdate(
                          data.item.barang.id,
                          data.item.id
                        )
                      "
                      @submit="checkForm"
                    >
                      <div class="form-group">
                        <label for="pengguna_id">Pengguna</label>
                        <select
                          name="pengguna_id"
                          class="form-control"
                          v-model="historys.pengguna_id"
                        >
                          <option value="" disabled>Pilih Pengguna</option>
                          <option
                            v-for="pengguna in pengguna"
                            :key="pengguna.id"
                            :value="pengguna.id"
                          >
                            {{ pengguna.name }}
                          </option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Keterangan</label>
                        <b-textarea
                          type="text"
                          class="form-control"
                          v-model="historys.keterangan"
                          placeholder="Masukan Keterangan"
                        ></b-textarea>
                      </div>
                      <div class="form-group">
                        <button class="btn btn-md btn-success" type="submit">
                          SIMPAN
                        </button>
                      </div>

                      <div v-if="errors.length">
                        <div class="alert alert-danger">
                          <b>Perhatikan hal berikut :</b>
                          <ul>
                            <li v-for="error in errors" :key="error">
                              {{ error }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </b-modal>
                </template>

                <template slot="action" slot-scope="data">
                  <span v-if="loginType == 'admin'">
                    <button
                      class="btn btn-sm btn-danger"
                      @click="destroy(data.item.id)"
                    >
                      <i class="ion ion-ios-trash"></i>
                    </button>
                  </span>
                  <span v-if="loginType != 'admin'"> Tidak ada Akses </span>
                </template>
              </b-table>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
              ></b-pagination>
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
    title: "history",
  },
  data() {
    return {
      historys: {
        pengguna_id: "",
        keterangan: "",
      },
      pengguna: [],
      fields: [
        { key: "id", label: "Id" },
        {
          key: "barang.nama_barang",
          label: "Nama Barang",
          sortable: true,
          filterByFormatted: true,
        },
        {
          key: "tanggal_awal_penggunaan",
          label: "Tanggal Awal Penggunaan",
          sortable: true,
        },
        {
          key: "tanggal_akhir_penggunaan",
          label: "Tanggal Akhir Penggunaan",
          sortable: true,
        },
        { key: "pengguna.name", label: "Nama Pengguna", sortable: true },
        { key: "keterangan", label: "Keterangan", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "action", label: "Action", sortable: false },
      ],
      filter: null,
      filterOn: [],
      sortDesc: true,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 25, 50, { value: 100, text: "Show a lot" }],
      history: [],
      barang: [],
      sortBy: "id",
      user: "",
      isLoggedIn: false,
      loginType: null,
      errors: [],
    };
  },
  created() {
    axios.get("/api/history").then((response) => {
      this.history = response.data.history;
    });
    axios.get("/api/barang/").then((response) => {
      this.barang = response.data.barang;
    });
    axios.get("/api/pengguna/").then((response) => {
      this.pengguna = response.data.pengguna;
    });
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy(id) {
      axios.delete(`/api/history/${id}`).then((response) => {
        this.history = this.history.filter((history) => history.id != id);
      });
    },
    RelasiUserBarangUpdate(id, id_history) {
      this.historys.id_history = id_history;
      axios
        .put(`/api/history/${id}`, this.historys)
        .then((response) => {
          this.historys = {};
          this.barang = response.data.barang;
          location.reload();
        })
        .catch((error) => {
          console.log(error);
          console.log(this.historys);
        });
    },
    showModal(id) {
      this.$refs[`modal-${id}`].show();
    },
    checkForm: function (e) {
      this.errors = [];
      if (this.historys.pengguna_id == "") {
        this.errors.push("Pengguna Harus Diisi");
      }
      if (this.historys.pengguna_id == this.barang[0].pengguna.id) {
        this.errors.push("Pengguna Tidak Boleh Sama");
      }
      if (this.errors.length) {
        e.preventDefault();
      }
    },
  },
  computed: {
    rows() {
      return this.history.length;
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
