<template>
  <div class="container-fluid mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">User</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <h2>Ini adalah barang yang berada di {{ lokasi.lokasi }}</h2>
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
              <h2>Ini adalah buku yang berada di {{ lokasi.lokasi }}</h2>
              <div>
                <label>Jumlah Baris:</label>
                <select class="form-control" v-model="pageSize1">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>

              <br />

              <v-table
                :data="buku"
                class="table table-striped table-bordered"
                :currentPage.sync="currentPage1"
                :pageSize="pageSize1"
                @totalPagesChanged="totalPages1 = $event"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="judul" scope="col">Judul</v-th>
                    <th sortKey="penulis" scope="col">Penulis</th>
                    <th sortKey="penerbit" scope="col">Penerbit</th>
                    <v-th sortKey="tanggal_terbit" scope="col"
                      >Tahun</v-th
                    >
                    <th sortKey="kondisi" scope="col">Kondisi</th>
                    <v-th sortKey="jumlah" scope="col">Jumlah</v-th>
                    <th sortKey="jenis" scope="col">Jenis</th>
                    <th sortKey="pengguna" scope="col">Pengguna</th>
                    <th sortKey="lokasi" scope="col">Lokasi</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <!-- index number -->
                    <td scope="data">
                      {{ data.id }}
                    </td>
                    <td>
                      {{ data.judul }}
                    </td>
                    <td>
                      {{ data.penulis }}
                    </td>
                    <td>
                      {{ data.penerbit }}
                    </td>
                    <td>
                      {{ data.tanggal }}
                    </td>
                    <td>
                      {{ data.kondisi }}
                    </td>
                    <td>
                      {{ data.jumlah }}
                    </td>
                    <td>
                      {{ data.jenis.jenis_buku }}
                    </td>
                    <td>
                      {{ data.pengguna.name }}
                    </td>
                    <td>
                      {{ data.lokasi.lokasi }}
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <smart-pagination
                :currentPage.sync="currentPage1"
                :totalPages="totalPages1"
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
    title: "Detail Lokasi",
  },
  data() {
    return {
      buku: [],
      barang: [],
      lokasi: {},
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      pageSize1: 10,
      currentPage1: 1,
      totalPages1: 0,
    };
  },
  created() {
    let uri = `/api/lokasi/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
      this.lokasi = response.data.lokasi;
      this.buku = response.data.buku;
    });
  },
};
</script>
