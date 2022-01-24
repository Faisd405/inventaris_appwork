<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">User</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <h2>Ini adalah barang yang dipakai {{ pengguna.name }}</h2>

              <v-table
                :data="barang"
                class="table table-striped table-bordered"
              >
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Fungsi</th>
                    <th scope="col">Lokasi</th>
                    <th scope="col">Harga Barang</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody slot="body" slot-scope="{ displayData }">
                  <tr v-for="data in displayData" :key="data.guid">
                    <td>{{ data.id }}</td>
                    <td>{{ data.nama_barang }}</td>
                    <td>{{ data.fungsi }}</td>
                    <td>{{ data.lokasi.lokasi }}</td>
                    <td>{{ data.harga_barang }}</td>
                    <td>
                        <span v-if="loginType == 'admin'">
                    <router-link
                      :to="{
                        name: 'edit-barang',
                        params: { id: data.id },
                      }"
                      class="btn btn-sm btn-warning"
                      >
                    <i class="ion ion-md-create"></i></router-link
                    >
                    <button
                      class="btn btn-sm btn-danger"
                      @click="destroy(data.id)"
                    >
                          <i class="ion ion-ios-trash"></i>
                    </button>
                    </span>
                    <span v-if="loginType != 'admin'">
                        Tidak ada Akses
                    </span>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>
            <div class="table-responsive mt-2">
                <h2>Ini adalah buku yang dipakai {{ pengguna.name }}</h2>

              <v-table
                :data="buku"
                class="table table-striped table-bordered"
              >
                <!-- Id	judul	Penulis	Penerbit	Tanggal	Kondisi	Jumlah	Jenis	Pengguna	Lokasi	Action -->
                <thead slot="head">
                  <tr>
                    <th scope="col">No</th>
                    <v-th sortKey="judul" scope="col">Judul</v-th>
                    <th sortKey="penulis" scope="col">Penulis</th>
                    <th sortKey="penerbit" scope="col">Penerbit</th>
                    <v-th sortKey="tanggal_terbit" scope="col"
                      >Tanggal Terbit</v-th
                    >
                    <th sortKey="kondisi" scope="col">Kondisi</th>
                    <v-th sortKey="jumlah" scope="col">Jumlah</v-th>
                    <th sortKey="jenis" scope="col">Jenis</th>
                    <th sortKey="pengguna" scope="col">Pengguna</th>
                    <th sortKey="lokasi" scope="col">Lokasi</th>
                    <th scope="col">Aksi</th>
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
                    <td>
                      <span v-if="loginType == 'admin'">
                        <router-link
                          :to="{ name: 'edit-buku', params: { id: data.id } }"
                          class="btn btn-sm btn-warning"
                        >
                          <i class="ion ion-md-create"></i
                        ></router-link>
                        <button
                          class="btn btn-sm btn-danger"
                          @click="destroy(data.id)"
                        >
                          <i class="ion ion-ios-trash"></i>
                        </button>
                      </span>
                      <span v-if="loginType != 'admin'"> Tidak ada Akses </span>
                    </td>
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
import axios from 'axios'
export default {
  metaInfo: {
    title: "Detail Pengguna",
  },
  data() {
    return {
      barang: [],
      pengguna: {},
      buku: [],
      user: "",
      isLoggedIn: false,
      loginType: '',
    };
  },
  created() {
    let uri = `/api/pengguna/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
      this.pengguna = response.data.pengguna;
        this.buku = response.data.buku;
    });
  },
  methods: {
    destroy(id) {
      axios
        .delete(`/api/barang/${id}`)
        .then((response) => {
        this.barangs = this.barangs.filter((barangs) => barangs.id != id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

      axios.get(`/api/user`)
        .then(response => {
          this.user = response.data
          this.loginType = response.data.roles[0].name
        })
        .catch(error => {
          if (error.response.status === 401) {
            localStorage.clear();
            this.$router.push('/login')
          }
          console.error(error);
        });
  },
};
</script>
