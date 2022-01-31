<template>
  <!-- Content -->
  <div class="container-fluid d-flex align-items-stretch flex-grow-1 p-0">
    <div
      class="
        flex-shrink-1 flex-grow-0
        w-25
        pallet-light
        container-p-x container-p-y
        card card-default
      "
      style="min-width: 200px"
    >
      <div>Export Barang</div>
      <hr />
      <a href="/barang/barang_pdf" class="btn btn-md btn-primary mt-3 flex">
        Export PDF
      </a>
      <a href="/barang/qrbarang_pdf" class="btn btn-md btn-warning mt-3 flex">
        Export PDF With Qr
      </a>
      <a href="/barang/barang_excel" class="btn btn-md btn-secondary mt-3 flex">
        Export Excel
      </a>
    </div>

    <div class="flex-shrink-1 flex-grow-1 container-p-x container-p-y">
      <div class="layout-example-block layout-example-block-1">
        <div class="card mb-3">
          <div class="card-body pallet-darken font-lighten">
            Ini adalah halaman Daftar Barang untuk meng list barang apa saja
            yang ada di kantor, dipegang oleh siapa dan untuk mengetahui dimana
            lokasi barang tersebut. Di halaman ini kita dapat meng export data
            barang menjadi PDF dan Excel.
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Barang</div>

          <div class="card-body">
            <span v-if="loginType == 'admin'" class="d-flex flex-row-reverse">
              <router-link
                :to="{ name: 'create-barang' }"
                class="btn btn-md btn-primary mx-3"
                v-b-tooltip.hover
                title="Tambah Data Barang Baru"
                >Tambah Data Barang</router-link
              >
              <router-link
                :to="{ name: 'relasiuserbarang' }"
                class="btn btn-md btn-warning"
                >Ganti Pengguna Barang</router-link
              >

              <hr />
            </span>
            <br />
            <div>
              <label>Filter berdasarkan Nama Barang:</label>
              <input class="form-control" v-model="filters.nama_barang.value" />

              <br />

              <v-table
                :data="barang"
                :filters="filters"
                class="table table-striped table-bordered"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="nama_barang" scope="col">Nama Barang</v-th>
                    <th scope="col">Detail Barang</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Fungsi</th>
                    <v-th sortKey="harga_barang" scope="col">Harga Barang</v-th>
                    <th scope="col">Lokasi</th>
                    <th scope="col">Detail Lokasi</th>
                    <th scope="col">Pemakai</th>
                    <v-th sortKey="year" scope="col">Tahun</v-th>
                    <v-th sortKey="jumlah_barang" scope="col"
                      >Jumlah Barang</v-th
                    >
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
                    <td>{{ data.harga_barang }}</td>
                    <td>{{ data.lokasi.lokasi }}</td>
                    <td>{{ data.detail_lokasi }}</td>
                    <td>{{ data.pengguna.name }}</td>
                    <td>{{ data.year }}</td>
                    <td>{{ data.jumlah_barang }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'detail-barang',
                          params: { id: data.id },
                        }"
                        class="btn btn-sm btn-info"
                      >
                        <i class="ion ion-ios-eye"></i>
                      </router-link>
                      <span v-if="loginType == 'admin'">
                        <router-link
                          :to="{
                            name: 'edit-barang',
                            params: { id: data.id },
                          }"
                          class="btn btn-sm btn-warning"
                        >
                          <i class="ion ion-md-create"></i>
                        </router-link>
                        <button
                          class="btn btn-sm btn-danger"
                          @click="destroy(data.id)"
                        >
                          <i class="ion ion-ios-trash"></i>
                        </button>
                      </span>
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
  <!-- / Content -->
</template>


<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Barang",
  },
  data() {
    return {
      filters: {
        nama_barang: { value: "", keys: ["nama_barang"] },
      },
      barang: [],
      user: "",
      isLoggedIn: false,
      loginType: "",
    };
  },

  created() {
    let uri = `/api/barang`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
    });
  },
  methods: {
    destroy(id) {
      axios
        .delete(`/api/barang/${id}`)
        .then((response) => {
          this.barang = this.barang.filter((barang) => barang.id != id);
        })
        .catch((error) => {
          console.log(error);
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
