<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create users</div>

          <div class="card-body">
            <form @submit.prevent="checkForm">
              <div class="form-group">
                <label>Nama User</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="users.name"
                  placeholder="Masukan Nama"
                />
              </div>
              <div class="form-group">
                <label>Email User</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="users.email"
                  placeholder="Masukan Email"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="users.password"
                  placeholder="Masukan Password"
                />
              </div>
              <div class="form-group">
                <label for="sifat_id">Roles</label>
                <select
                  name="sifat_id"
                  class="form-control"
                  v-model="users.roles"
                >
                  <option value="" disabled>Pilih User</option>
                  <option
                    v-for="roles in roles"
                    :key="roles.id"
                    :value="roles.id"
                  >
                    {{ roles.name }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-md btn-success" type="submit">
                  SIMPAN
                </button>
              </div>
              <div v-if="errors.length">
                <div class="alert alert-danger">
                  <b>Tolong Isi Kolom Tersebut :</b>
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
    title: "Edit User",
  },
  data() {
    return {
      users: {
          id: this.$route.params.id,
        name: "",
        email: "",
      },
      user: {},
      loginType: "",
      roles: [],
      errors: [],
      validUser: [],
    };
  },
  created() {
    axios
      .get(`/api/users/${this.$route.params.id}`)
      .then((response) => {
        this.users.name = response.data.user.name;
        this.users.email = response.data.user.email;
      })
      .catch((errors) => {
        console.log(errors);
      });
    axios.get("/api/roles").then((response) => {
      this.roles = response.data.roles;
    });
    axios.get("/api/users").then((response) => {
      this.validUser = response.data.user;
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
        if (this.user.id != 1) {
          this.$router.push("/");
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
    checkForm: function (e) {
      this.errors = [];
      if (this.users.name == "") {
        this.errors.push("Nama pengguna harus diisi");
      }
      if (this.users.email == "") {
        this.errors.push("Email pengguna harus diisi");
      }
      if (this.users.email != "") {
        if (!this.validEmail(this.users.email)) {
          this.errors.push("Valid email required.");
        }
        // validation email duplicate
        if (this.validUser.length > 0) {
          for (let i = 0; i < this.validUser.length; i++) {
            if (
              this.users.email == this.validUser[i].email &&
              this.users.id != this.validUser[i].id
            ) {
              this.errors.push("Email sudah terdaftar");
            }
          }
        }
      }
      if (this.users.password == "") {
        this.errors.push("Password harus diisi");
      }
      if (this.users.roles == "") {
        this.errors.push("Roles harus diisi");
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        let uri = "/api/users/" + this.$route.params.id;
        axios.put(uri, this.users)
          .then((response) => {
            this.$router.push("/users");
          })
          .catch((error) => {
            console.log(error.response.data.errors);
          });
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
