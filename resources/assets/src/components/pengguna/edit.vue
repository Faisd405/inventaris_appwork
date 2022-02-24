<template>
  <div class="container-fluid p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit pengguna</div>

          <div class="card-body">
            <form @submit.prevent="checkForm">
              <div class="form-group">
                <label>Nama pengguna</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pengguna.name"
                  placeholder="Masukan pengguna"
                />
              </div>

              <div class="form-group" v-if="loginType == 'admin'">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="pengguna.email"
                  placeholder="Masukan Email"
                />
              </div>

              <div class="form-group">
                <label>No KTP</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="pengguna.ktp"
                  placeholder="Masukan Nomor KTP"
                />
              </div>

              <div class="form-group">
                <label>Jabatan Pengguna</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pengguna.jabatan"
                  placeholder="Masukan Jabatan Pengguna"
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
    title: "Edit Pengguna",
  },
  data() {
    return {
      pengguna: {},
      errors: [],
      user: {},
      loginType: "",
    };
  },
  created() {
    axios.get(`/api/pengguna/${this.$route.params.id}`).then((response) => {
      this.pengguna = response.data.pengguna;
    });
  },
  mounted() {
    if (this.$route.params.id == 1) {
      this.$router.push("/pengguna");
    }
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");

    axios
      .get(`/api/user`)
      .then((response) => {
        this.user = response.data;
        this.loginType = response.data.roles[0].name;
        if (this.loginType == "user") {
          if (this.pengguna.id != this.user.id) {
            this.$router.push("/pengguna/edit/" + this.user.id);
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
  methods: {
    penggunaUpdate() {
      let uri = "/api/pengguna/" + this.$route.params.id;
      axios.put(uri, this.pengguna).then((response) => {
        this.$router.push("/pengguna");
      });
    },
    checkForm: function (e) {
      if (this.pengguna.name == "") {
        this.errors.push("Nama pengguna tidak boleh kosong");
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.penggunaUpdate();
      }
    },
  },
};
</script>
