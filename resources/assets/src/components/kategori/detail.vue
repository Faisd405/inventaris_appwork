<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">User</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <h2>Ini adalah isi dari kategori {{ kategori.nama_kategori }}</h2>
              <div>
                <label>Jumlah Baris:</label>
                <select class="form-control"  v-model="pageSize">
                  <option :value="10">10</option>
                  <option :value="25">25</option>
                  <option :value="50">50</option>
                  <option :value="100">100</option>
                </select>
              </div>
              <br />

              <v-table
                :data="barang"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage"
                :pageSize="pageSize"
                @totalPagesChanged="totalPages = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="nama_barang" scope="col">Nama Barang</v-th>
                    <th scope="col">Fungsi</th>
                    <th scope="col">Lokasi</th>
                    <v-th sortKey="harga_barang" scope="col">Harga Barang</v-th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.nama_barang }}</td>
                    <td>{{ data.fungsi }}</td>
                    <td>{{ data.lokasi.lokasi }}</td>
                    <td>{{ data.harga_barang | toCurrency }}</td>
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
</template>


<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Detail Kategori",
  },
  data() {
    return {
      barang: [],
      kategori: {},
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
    };
  },
  created() {
    let uri = `/api/kategori/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
      this.kategori = response.data.kategori;
    });
  },
};
</script>
