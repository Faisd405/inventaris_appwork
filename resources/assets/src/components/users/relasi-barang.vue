<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Relasi Barang Dan User</div>

          <div class="card-body">
            <form @submit.prevent="RelasiUserBarangUpdate">
              <!-- select user -->
              <div class="form-group">
                <label for="user_id">Pengguna</label>
                <select
                  name="user_id"
                  class="form-control"
                  v-model="barang.user_id"
                >
                  <option value="" disabled>Pilih User</option>
                  <option v-for="user in user" :key="user.id" :value="user.id">
                    {{ user.name }}
                  </option>
                </select>
              </div>
              <!-- select barang -->
              <div class="form-group">
                <label for="barang_id">Barang</label>
                <select
                  name="barang_id"
                  class="form-control"
                  v-model="barang.id"
                >
                  <option value="" disabled>Pilih Barang</option>
                  <option
                    v-for="barang in barangs"
                    :value="barang.id"
                    :key="barang.id"
                  >
                    {{ barang.nama_barang }}
                  </option>
                  <option disabled v-if="!barang">Tidak Ada Barang Baru</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-md btn-success" type="submit">
                  SIMPAN
                </button>
              </div>
            </form>
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
      user: [],
      barang: {},
      barangs: {},
    };
  },
  created() {
    axios.get("/api/users/").then((response) => {
      this.user = response.data.user;
    });
    axios.get("/api/barang/NoUser").then((response) => {
      this.barangs = response.data.barang;
    });
  },
  methods: {
    RelasiUserBarangUpdate() {
      let uri = "/api/barang/" + this.barang.id;
        axios
            .put(uri, this.barang)
            .then((response) => {
                this.$router.push("/users/"+this.barang.user_id);
            })
            .catch((error) => {
                console.log(error);
            });
    },
  },
};
</script>
