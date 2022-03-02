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
            <div>Cek History Per Barang</div>
          </div>
          <div class="card-body">
            <div class="table-responsive mt-2">
              <div>
                <b-row>
                  <b-col lg="6" class="my-1">
                    <form>
                      <b-form-group
                        label="Filter Barang"
                        label-for="filter-input"
                        label-cols-sm="3"
                        label-align-sm="left"
                        label-size="sm"
                        class="mt-1 mb-1"
                      >
                        <b-input-group size="sm">
                          <select
                            id="filter-input"
                            class="form-control"
                            v-model="barang_id"
                          >
                            <option :value="['', '']">Semua Barang</option>
                            <option
                              v-for="barang in barang"
                              :value="[barang.id, barang.nama_barang]"
                              :key="barang.id"
                            >
                              {{ barang.nama_barang }}
                            </option>
                          </select>
                        </b-input-group>
                      </b-form-group>

                      <b-form-group
                        label="Filter Tanggal awal"
                        label-for="filter-input"
                        label-cols-sm="3"
                        label-align-sm="left"
                        label-size="sm"
                        class="mt-1 mb-1"
                      >
                        <b-input-group size="sm">
                          <select class="form-control" v-model="tanggal_awal">
                            <option value="">
                              Semua Tanggal Awal Penggunaan
                            </option>
                            <option
                              v-for="history in FilterAwal"
                              :value="history.tanggal_awal_penggunaan"
                              :key="history.tanggal_awal_penggunaan"
                            >
                              {{ history.tanggal_awal_penggunaan }}
                            </option>
                          </select>
                        </b-input-group>
                      </b-form-group>

                      <b-form-group
                        label="Filter Tanggal akhir"
                        label-for="filter-input"
                        label-cols-sm="3"
                        label-align-sm="left"
                        label-size="sm"
                        class="mt-1 mb-1"
                      >
                        <b-input-group size="sm">
                          <select class="form-control" v-model="tanggal_akhir">
                            <option value="">
                              Semua Tanggal Akhir Penggunaan
                            </option>
                            <option
                              v-for="history in FilterAkhir"
                              :value="history.tanggal_akhir_penggunaan"
                              :key="history.tanggal_akhir_penggunaan"
                            >
                              {{ history.tanggal_akhir_penggunaan }}
                            </option>
                          </select>
                        </b-input-group>
                      </b-form-group>
                    </form>
                    <span v-if="barang_id[0] != ''">
                      <!-- Export PDF -->
                      <label
                        ><a
                          :href="
                            '/history/history_pdf/detail/' +
                            barang_id +
                            '/' +
                            tanggal_awal +
                            '/' +
                            tanggal_akhir
                          "
                          class="btn btn-primary btn-sm mt-1 mb-1"
                          >Print Riwayat Barang PDF</a
                        ></label
                      >
                      <!-- Export excel -->
                      <label
                        ><a
                          :href="
                            '/history/history_excel/detail/' +
                            barang_id +
                            '/' +
                            tanggal_awal +
                            '/' +
                            tanggal_akhir
                          "
                          class="btn btn-primary btn-sm mt-1 mb-1"
                          >Print Riwayat Barang Excel</a
                        ></label
                      >
                    </span>
                  </b-col>
                </b-row>

                <div>
                  <label>Jumlah Baris:</label>
                  <select class="form-control" v-model="pageSize">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <br />

                <v-table
                  :data="filterhistorys"
                  class="table table-bordered"
                  :currentPage.sync="currentPage"
                  :pageSize="pageSize"
                  @totalPagesChanged="totalPages = $event"
                >
                  <thead slot="head">
                    <tr>
                      <th>Nama Barang</th>
                      <th>Tanggal Awal Penggunaan</th>
                      <th>Tanggal Akhir Penggunaan</th>
                      <th>Nama Pengguna</th>
                      <th>Keterangan</th>
                      <v-th sortKey="status" defaultSort="asc">Status</v-th>
                    </tr>
                  </thead>
                  <tbody slot="body" slot-scope="{ displayData }">
                    <tr v-for="history in displayData" :key="history.id">
                      <td
                        v-if="history.status == 'Masih Digunakan'"
                        class="pallet-light"
                      >
                        {{ history.barang.nama_barang }}
                      </td>
                      <td
                        v-if="history.status == 'Masih Digunakan'"
                        class="pallet-light"
                      >
                        {{ history.tanggal_awal_penggunaan }}
                      </td>
                      <td
                        v-if="history.status == 'Masih Digunakan'"
                        class="pallet-light"
                      >
                        {{ history.tanggal_akhir_penggunaan }}
                      </td>
                      <td
                        v-if="history.status == 'Masih Digunakan'"
                        class="pallet-light"
                      >
                        {{ history.pengguna.name }}
                      </td>
                      <td
                        v-if="history.status == 'Masih Digunakan'"
                        class="pallet-light"
                      >
                        {{ history.keterangan }}
                      </td>
                      <td
                        v-if="history.status == 'Masih Digunakan'"
                        class="pallet-light"
                        style="font-weight: 700;"
                      >
                        {{ history.status }}
                      </td>

                      <td v-if="history.status != 'Masih Digunakan'">
                        {{ history.barang.nama_barang }}
                      </td>
                      <td v-if="history.status != 'Masih Digunakan'">
                        {{ history.tanggal_awal_penggunaan }}
                      </td>
                      <td v-if="history.status != 'Masih Digunakan'">
                        {{ history.tanggal_akhir_penggunaan }}
                      </td>
                      <td v-if="history.status != 'Masih Digunakan'">
                        {{ history.pengguna.name }}
                      </td>
                      <td v-if="history.status != 'Masih Digunakan'">
                        {{ history.keterangan }}
                      </td>
                      <td v-if="history.status != 'Masih Digunakan'">
                        {{ history.status }}
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <smart-pagination
                  :currentPage.sync="currentPage"
                  :totalPages="totalPages"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      barang_id: ["", ""],
      tanggal_awal: "",
      tanggal_akhir: "",
      historys: [],
      barang: [],
      barangs: "",
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      BgColor: {
        backgroundColor: "lightblue",
      },
    };
  },

  created() {
    axios.get("/api/history").then((response) => {
      this.historys = response.data.history;
    });
    axios.get("/api/barang").then((response) => {
      this.barang = response.data.barang;
    });
  },

  computed: {
    filterhistorys: function () {
      return this.filterhistorysByIdBarang(
        this.filterhistorysByNamaBarang(
          this.filterhistorysBytanggalAwal(
            this.filterhistorysBytanggalAkhir(this.historys)
          )
        )
      );
    },

    // Remove Duplicate history.tanggal_awal_penggunaan
    FilterAwal: function () {
      return this.historys.filter(
        (history, index, self) =>
          index ===
          self.findIndex(
            (t) => t.tanggal_awal_penggunaan === history.tanggal_awal_penggunaan
          )
      );
    },

    FilterAkhir: function () {
      return this.historys.filter(
        (history, index, self) =>
          index ===
          self.findIndex(
            (t) =>
              t.tanggal_akhir_penggunaan === history.tanggal_akhir_penggunaan
          )
      );
    },
  },

  methods: {
    filterhistorysByIdBarang: function (historys) {
      return historys.filter(
        (history) => !history.barang.id.toString().indexOf(this.barang_id[0])
      );
    },
    filterhistorysByNamaBarang: function (historys) {
      return historys.filter(
        (history) =>
          !history.barang.nama_barang.toString().indexOf(this.barang_id[1])
      );
    },
    filterhistorysBytanggalAwal: function (historys) {
      return historys.filter(
        (history) => !history.tanggal_awal_penggunaan.indexOf(this.tanggal_awal)
      );
    },
    filterhistorysBytanggalAkhir: function (historys) {
      return historys.filter(
        (history) =>
          !history.tanggal_akhir_penggunaan.indexOf(this.tanggal_akhir)
      );
    },
    status(row) {
      return row.status.length;
    }
  },
};
</script>
