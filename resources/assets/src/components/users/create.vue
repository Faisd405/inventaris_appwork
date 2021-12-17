<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Create User</div>

          <div class="card-body">
            <form @submit.prevent="UserStore">
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
                <label>Role</label>
                <select class="form-control" v-model="users.roles">
                  <option disabled value="">Pilih Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
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
export default {
  data() {
    return {
      users: {},
    };
  },
  methods: {
    UserStore() {
      axios
        .post("/api/users", this.users)
        .then((response) => {
          this.$router.push("/users");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
