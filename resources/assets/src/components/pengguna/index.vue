<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">pengguna</div>

          <div class="card-body">
            <span v-if="loginType == 'admin'"
              class="d-flex flex-row-reverse mx-3">
              <router-link
                :to="{ name: 'create-pengguna' }"
                class="btn btn-md btn-primary mx-3"
                >Tambah Data pengguna</router-link
              >
              <router-link
                :to="{ name: 'relasiuserbarang' }"
                class="btn btn-md btn-primary"
                >Tambah Data Barang ke pengguna</router-link
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
                :items="pengguna"
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
                  <router-link
                    :to="{
                      name: 'detail-pengguna',
                      params: { id: data.item.id },
                    }"
                    class="btn btn-sm btn-primary"
                    >
                    <i class="ion ion-ios-eye"></i></router-link
                  >
                  <router-link
                    :to="{
                      name: 'edit-pengguna',
                      params: { id: data.item.id },
                    }"
                    class="btn btn-sm btn-warning"
                    >
                    <i class="ion ion-md-create"></i></router-link
                  >
                  <span v-if="loginType == 'admin'">
                    <button
                      v-if="data.item.id != 1"
                      class="btn btn-sm btn-danger"
                      @click="destroy(data.item.id)"
                    >

                    <i class="ion ion-ios-trash"></i>
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
  metaInfo: {
    title: "Pengguna",
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "ID",
          sortable: true,
        },
        {
          key: "name",
          label: "Nama",
          sortable: true,
        },
        {
          key: "action",
          label: "Action",
          headerClass: "text-center",
          class: "text-center",
          width: "100px",
        },
      ],
      pengguna: [],
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
    let uri = `/api/pengguna`;
    axios.get(uri).then((response) => {
      this.pengguna = response.data.pengguna;
    });
  },

  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy(id) {
      let uri = `/api/pengguna/${id}`;
      axios.delete(uri).then((response) => {
        this.pengguna = this.pengguna.filter((pengguna) => pengguna.id != id);
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
