<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Home</div>

          <div class="card-body mx-auto">
            <div class="row">
              <div
                class="card text-white bg-primary col-md-6"
                style="max-width: 18rem"
              >
                <div class="card-header">Total Barang</div>
                <div class="card-body">
                  <h1 class="card-title">{{ barang.length }}</h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6"
                style="max-width: 18rem"
              >
                <div class="card-header">Total Users</div>
                <div class="card-body">
                  <h1 class="card-title">{{ user.length }}</h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6"
                style="max-width: 18rem"
              >
                <div class="card-header">Total Buku</div>
                <div class="card-body">
                  <h1 class="card-title">{{ buku.length }}</h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6"
                style="max-width: 18rem"
              >
                <div class="card-header">Total Barang Yang Terpakai</div>
                <div class="card-body">
                  <h1 class="card-title">
                    {{ barang.length - NoUser.length }}
                  </h1>
                </div>
              </div>
              <div
                class="card text-white bg-primary col-md-6"
                style="max-width: 18rem"
              >
                <div class="card-header">Total Barang Yang Tidak Terpakai</div>
                <div class="card-body">
                  <h1 class="card-title">{{ NoUser.length }}</h1>
                </div>
              </div>
            </div>
            <div>
              <BarChart></BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./Chart/BarChart.vue";
import axios from "axios";

export default {
  name: "home",
  metaInfo: {
    title: "Home",
  },
  components: {
    BarChart,
  },
  data() {
    return {
      barang: [],
      buku: [],
      user: [],
      NoUser: [],
      kategori: [],
    };
  },
  created() {
    axios.get(`/api/barang`).then((response) => {
      this.barang = response.data.barang;
    });
    axios.get(`/api/barang/NoUser`).then((response) => {
      this.NoUser = response.data.barang;
    });
    axios.get(`/api/buku`).then((response) => {
      this.buku = response.data.buku;
    });
    axios.get(`/api/users`).then((response) => {
      this.user = response.data.user;
    });
    axios.get(`/api/kategori`).then((response) => {
      this.kategori = response.data.kategori;
    });
  },
};
</script>
