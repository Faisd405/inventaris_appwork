<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">User</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <h2>Ini adalah barang yang berada di {{lokasi.lokasi}}</h2>

              <v-table
                :data="barang"
                class="table table-striped table-bordered"
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
                    <td>{{ data.harga_barang }}</td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  metaInfo: {
    title: "Detail Lokasi",
  },
  data() {
    return {
      barang: [],
      lokasi: {},
    };
  },
  created() {
    let uri = `/api/lokasi/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
      this.lokasi = response.data.lokasi;
    });
  },
};
</script>
