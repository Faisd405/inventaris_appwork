<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 justify-content-center">
        <div class="card card-default">
          <div class="card-header">Harga Barang</div>

          <div class="card-body">
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
                striped
                responsive
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                :current-page="currentPage"
                :per-page="perPage"
                foot-clone
              >
                <template slot="FOOT_id"> Total Barang : </template>
                <template slot="FOOT_nama_barang">
                  {{ barang.length }}
                </template>
                <template slot="FOOT_harga_barang">
                  Total Harga Barang :
                </template>

                <template slot="FOOT_pengguna.name">
                  {{ total }}
                </template>
              </b-table>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-body">
            <label>Chart Total :</label>
            <TotalChart></TotalChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import TotalChart from "../Chart/TotalChart.vue";
export default {
  metaInfo: {
    title: "Barang",
  },
    components: {
        TotalChart,
    },
  data() {
    return {
      fields: [
        { key: "id" },
        { key: "nama_barang", filterByFormatted: true },
        { key: "harga_barang" },
        { key: "pengguna.name", label: "Pemakai" },
      ],
      filter: null,
      filterOn: [],
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 15, 25, 50, { value: 100, text: "Show a lot" }],
      barang: [],
      user: null,
      isLoggedIn: false,
      loginType: "",
      total: 0,
    };
  },

  created() {
    let uri = `/api/barang`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
    });
    axios.get(`/api/barang/total`).then((response) => {
      this.total = response.data.total;
    });
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
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
