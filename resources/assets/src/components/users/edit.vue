<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create users</div>

          <div class="card-body">
            <form @submit.prevent="usersUpdate">
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
        name: "",
        email: "",
      },
      roles: [],
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
  },
  methods: {
    usersUpdate() {
      let uri = "/api/users/" + this.$route.params.id;
      axios.put(uri, this.users).then((response) => {
        this.$router.push("/users");
      });
    },
  },
};
</script>
