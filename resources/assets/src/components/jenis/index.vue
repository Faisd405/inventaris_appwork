<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card mb-3">
          <div class="card-body bg-dark text-white">
            Ini adalah halaman DataMaster Jenis Buku. Contoh Jenis Buku seperti
            Buku Pendidikan, Novel, dan Komik
          </div>
        </div>
        <div class="card card-default">
          <div class="card-header">Jenis Buku</div>

          <div class="card-body">
            <span v-if="loginType == 'admin'"
              class="d-flex flex-row-reverse mx-3">
              <router-link
                :to="{ name: 'create-jenis' }"
                class="btn btn-md btn-primary"
                >Tambah Data jenis</router-link
              >
            </span>
            <div class="table-responsive mt-2">
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
                :items="jenis"
                :fields="fields"
                :sort-by.sync="sortBy"
                striped
                responsive
                sort-icon-left
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                :current-page="currentPage"
                :per-page="perPage"
              >
                <template slot="action" slot-scope="data">
                  <span v-if="loginType == 'admin'">
                    <router-link
                      :to="{ name: 'edit-jenis', params: { id: data.item.id } }"
                      class="btn btn-sm btn-warning"
                    >
                      <i class="ion ion-md-create"></i
                    ></router-link>
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
      fields: [
        { key: "id", label: "Id" },
        { key: "jenis_buku", label: "Jenis Buku" },
        { key: "action", label: "Action", sortable: false },
      ],
      filter: null,
      filterOn: [],
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 15, 25, 50, { value: 100, text: "Show a lot" }],
      jenis: [],
      sortBy: "id",
      user: null,
      isLoggedIn: false,
      loginType: null,
    };
  },
  created() {
    let uri = `/api/jenis`;
    axios.get(uri).then((response) => {
      this.jenis = response.data.jenis;
    });
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
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

    axios.get(`/api/user`).then((response) => {
      this.user = response.data;
      this.loginType = response.data.roles[0].name;
    });
  },
};
</script>
