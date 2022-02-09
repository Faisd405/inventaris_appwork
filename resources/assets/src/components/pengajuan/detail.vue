<template>
  <div class="container-fluid p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Detail pengajuan</div>

          <div class="card-body">
            <div>
              <img
                :src="'/pengajuan/' + pengajuan.image"
                class="img-thumbnail rounded mx-auto d-block"
                width="400px"
              />
            </div>
            <div>
              <label>Nama pengajuan : </label>
              <h3 v-text="pengajuan.nama_barang"></h3>
              <label>Details pengajuan : </label>
              <h3 v-text="pengajuan.detail_barang"></h3>
              <label>Fungsi : </label>
              <h3 v-text="pengajuan.fungsi"></h3>
              <label>Harga : </label>
              <h3>{{ pengajuan.harga_barang | toCurrency }}</h3>
              <label>Jumlah :</label>
              <h3 v-text="pengajuan.jumlah_barang"></h3>
              <label>Nama Yang Mengajukan Barang</label>
              <h3 v-text="pengajuan.user.name"></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  metaInfo: {
    title: "Detail pengajuan",
  },
  data() {
    return {
      pengajuan: {},
    };
  },
  created() {
    axios.get("/api/pengajuan/" + this.$route.params.id).then((response) => {
      this.pengajuan = response.data.pengajuan;
    });
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
        if (this.loginType == "user") {
          if (this.pengajuan.user_id != this.user.id) {
            this.$router.push("/pengajuan/user/" + this.user.id);
          }
        }
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 500) {
          localStorage.clear();
          this.$router.push("/login");
        }
        console.error(error);
      });
  },
};

Vue.filter("toCurrency", function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formatter.format(value);
});
</script>
