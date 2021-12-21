<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">kategori</div>

          <div class="card-body">
            <router-link
              :to="{ name: 'create-kategori' }"
              class="btn btn-md btn-primary"
              >TAMBAH Data kategori</router-link
            >
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
              <b-table :items="kategori" :fields="fields"
                :sort-by.sync="sortBy"
                striped
                responsive="sm"
                sort-icon-left
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                :current-page="currentPage"
                :per-page="perPage">
                  <template slot="action" slot-scope="data">

                      <router-link
                        :to="{ name: 'edit-kategori', params: { id: data.item.id } }"
                        class="btn btn-sm btn-primary"
                        >Edit</router-link
                      >
                      <router-link
                        :to="{ name: 'detail-kategori', params: { id: data.item.id } }"
                        class="btn btn-sm btn-primary"
                        >Detail</router-link
                      >
                      <button
                        class="btn btn-sm btn-danger"
                        @click="destroy(data.item.id)"
                      >
                        Hapus
                      </button>
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
import axios from 'axios'
export default {
  data() {
    return {
      fields: [
        { key: "id", label: "Id" },
        { key: "nama_kategori", label: "Nama Kategori" },
        { key: "fungsi", label: "Fungsi" },
        { key: "sifat.sifat_kategori", label: "sifat" },
        { key: "jumlah", label: "jumlah" },
        { key: "action", label: "Action", sortable: false }
      ],
        filter: null,
        filterOn: [],
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 15, 25, 50,{ value: 100, text: "Show a lot" }],
      kategori: [],
      sortBy: "id",
      barang: [],
    };
  },
  created() {
    let uri = `/api/kategori`;
    axios.get(uri).then((response) => {
      this.kategori = response.data.kategori;
    });
  },
  computed: {
    filterOn() {
      return this.fields
        .filter((field) => field.filterable)
        .map((field) => field.key);
    },
  },
  methods: {
    onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
    },
    destroy(id) {
      let uri = `/api/kategori/${id}`;
      axios.delete(uri).then((response) => {
        this.kategori = this.kategori.filter((kategori) => kategori.id != id);
      });
    },
  },
};
</script>
