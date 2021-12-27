<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">users</div>

          <div class="card-body">
            <span v-if="loginType == 'admin'">
              <router-link
                :to="{ name: 'create-users' }"
                class="btn btn-md btn-primary"
                >TAMBAH Data users</router-link
              >
              <router-link
                :to="{ name: 'relasiuserbarang' }"
                class="btn btn-md btn-primary"
                >TAMBAH Data Barang ke users</router-link
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
                :items="users"
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
                      name: 'detail-users',
                      params: { id: data.item.id },
                    }"
                    class="btn btn-sm btn-primary"
                    >Detail</router-link
                  >
                  <span v-if="loginType == 'admin'">
                    <button
                      v-if="data.item.id != 1"
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
          key: "email",
          label: "Email",
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
      users: [],
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
    let uri = `/api/users`;
    axios.get(uri).then((response) => {
      this.users = response.data.user;
    });
  },

  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy(id) {
      let uri = `/api/users/${id}`;
      axios.delete(uri).then((response) => {
        this.users = this.users.filter((users) => users.id != id);
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
