<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit pengajuan</div>

          <div class="card-body">
            <form @submit.prevent="checkForm">
              <div class="form-group">
                <!-- No	Nama Barang	Detail Barang	Fungsi	Harga Barang	Jumlah Barang -->
                <label>Nama Barang</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pengajuan.nama_barang"
                  placeholder="Masukan Nama Barang"
                />
              </div>

              <div class="form-group">
                <label>Detail Barang</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pengajuan.detail_barang"
                  placeholder="Masukan Detail Barang"
                />
              </div>

              <div class="form-group">
                <label>Fungsi</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pengajuan.fungsi"
                  placeholder="Masukan Fungsi"
                />
              </div>

              <div class="form-group">
                <label>Harga Barang</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="pengajuan.harga_barang"
                  placeholder="Masukan Harga Barang"
                />
              </div>

              <div class="form-group">
                <label>Jumlah Barang</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="pengajuan.jumlah_barang"
                  placeholder="Masukan Jumlah Barang"
                />
              </div>

              <div class="form-group">
                <button class="btn btn-md btn-success" type="submit">
                  SIMPAN
                </button>
              </div>

              <div v-if="errors.length">
                <div class="alert alert-danger">
                  <b>Perhatikan hal berikut :</b>
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
                </div>
              </div>
            </form>
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
    title: "Edit pengajuan",
  },
  data() {
    return {
      pengajuan: {},
      errors: [],
    };
  },
  created() {
    axios.get(`/api/pengajuan/${this.$route.params.id}`).then((response) => {
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
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 500) {
          localStorage.clear();
          this.$router.push("/login");
        }
        console.error(error);
      });
  },
  methods: {
    pengajuanUpdate() {
      let uri = "/api/pengajuan/" + this.$route.params.id;
      axios.put(uri, this.pengajuan).then((response) => {
        this.$router.push("/pengajuan/user/" + this.user.id);
      });
    },
    checkForm: function(e){
        this.errors = [];
        if (!this.pengajuan.nama_barang) {
            this.errors.push("Nama Barang Harus Diisi");
        }
        if (!this.pengajuan.detail_barang) {
            this.errors.push("Detail Barang Harus Diisi");
        }
        if (!this.pengajuan.fungsi) {
            this.errors.push("Fungsi Harus Diisi");
        }
        if (!this.pengajuan.harga_barang) {
            this.errors.push("Harga Barang Harus Diisi");
        }
        if (!this.pengajuan.jumlah_barang) {
            this.errors.push("Jumlah Barang Harus Diisi");
        }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.pengajuanUpdate();
      }
    }
  },
};
</script>
