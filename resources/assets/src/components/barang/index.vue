<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Barang</div>

          <div class="card-body">
            <span v-if="loginType == 'admin'">
              <router-link
                :to="{ name: 'create-barang' }"
                class="btn btn-md btn-primary"
                >TAMBAH Data Barang</router-link
              >
              <router-link
                :to="{ name: 'relasiuserbarang' }"
                class="btn btn-md btn-primary"
                >TAMBAH Data Barang ke users</router-link
              >
            </span>
            <a href="/barang/barang_pdf" class="btn btn-md btn-primary">
              Export PDF
            </a>
            <a href="/barang/qrbarang_pdf" class="btn btn-md btn-primary">
              Export PDF With Qr
            </a>
            <a href="/barang/barang_excel" class="btn btn-md btn-primary">
              Export Excel
            </a>
            <div>
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
                :items="barang"
                :fields="fields"
                :sort-by.sync="sortBy"
                striped
                responsive="sm"
                sort-icon-left
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                :current-page="currentPage"
                :per-page="perPage"
              >
                <template slot="action" slot-scope="data">
                  <router-link
                    :to="{
                      name: 'detail-barang',
                      params: { id: data.item.id },
                    }"
                    class="btn btn-sm btn-primary"
                    >Detail</router-link
                  >
                  <span v-if="loginType == 'admin'">
                    <router-link
                      :to="{
                        name: 'edit-barang',
                        params: { id: data.item.id },
                      }"
                      class="btn btn-sm btn-primary"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn-sm btn-danger"
                      @click="destroy(data.item.id)"
                    >
                      Hapus
                    </button>
                  </span>
                </template>
              </b-table>
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
  data() {
    return {
      fields: [
        { key: "id", sortable: true },
        { key: "nama_barang", sortable: true, filterByFormatted: true },
        { key: "detail_barang", sortable: true },
        { key: "kategori.nama_kategori", sortable: true, label: "Kategori" },
        { key: "jenis.jenis_barang", sortable: true, label: "Jenis" },
        { key: "fungsi", sortable: true },
        { key: "harga_barang", sortable: true },
        { key: "lokasi.lokasi", sortable: true, label: "Lokasi" },
        { key: "user.name", label: "Pemakai", sortable: true },
        { key: "year", label: "tahun" },
        { key: "action", label: "Action", sortable: true },
      ],
      filter: null,
      filterOn: [],
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 15, 25, 50, { value: 100, text: "Show a lot" }],
      barang: [],
      sortBy: "id",
      user: null,
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
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
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
        if (error.response.status === 401) {
          localStorage.clear();
          this.$router.push("/login");
        }
        console.error(error);
      });
  },
};
</script>
