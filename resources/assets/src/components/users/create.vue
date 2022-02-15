<template>
  <div class="container-fluid p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create User</div>

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
                  id="email"
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
    title: "Create User",
  },
  data() {
    return {
      users: {
        name: "",
        email: "",
        password: "",
      },
      validUser: [],
      errors: [],
    };
  },
  created() {
    axios.get("/api/users").then((response) => {
      this.validUser = response.data.user;
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
          this.errors.push("Diperlukan email yang valid.");
        }
        // validation email duplicate
        if (this.validUser.length > 0) {
          for (let i = 0; i < this.validUser.length; i++) {
            if (this.users.email == this.validUser[i].email) {
              this.errors.push("Email sudah terdaftar");
            }
          }
        }
      }
      if (this.users.password == "") {
        this.errors.push("Password harus diisi");
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        axios
          .post("/api/users", this.users)
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
