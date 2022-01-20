<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">lokasi</div>

          <div class="card-body">
            <span v-if="loginType == 'admin'"
              class="d-flex flex-row-reverse mx-3">
              <router-link
                :to="{ name: 'create-lokasi' }"
                class="btn btn-md btn-primary"
                >Tambah Data lokasi</router-link
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
                :items="lokasi"
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
                      :to="{
                        name: 'edit-lokasi',
                        params: { id: data.item.id },
                      }"
                      class="btn btn-sm btn-warning"
                      >
                    <i class="ion ion-md-create"></i></router-link
                    >
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
    title: "Lokasi",
  },
  data() {
    return {
      fields: [
        { key: "id", label: "Id" },
        { key: "lokasi", label: "Lokasi" },
        { key: "kordinat", label: "Kordinat" },
        { key: "action", label: "Action", sortable: false },
      ],
      filter: null,
      filterOn: [],
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 15, 25, 50, { value: 100, text: "Show a lot" }],
      lokasi: [],
      sortBy: "id",
      user: null,
      isLoggedIn: false,
      loginType: null,
    };
  },
  created() {
    let uri = `/api/lokasi`;
    axios.get(uri).then((response) => {
      this.lokasi = response.data.lokasi;
    });
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy(id) {
      let uri = `/api/lokasi/${id}`;
      axios.delete(uri).then((response) => {
        this.lokasi = this.lokasi.filter((lokasi) => lokasi.id != id);
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
      });
  },
};
</script>
