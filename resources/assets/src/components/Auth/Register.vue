<template>
  <div class="row justify-content-md-center">
    <div class="col-5">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Register</h4>
          <h6 class="card-subtitle mb-2 text-muted">Create your account</h6>
          <hr />
          <div v-if="errors" class="alert bg-danger text-white">
            <div v-for="(v, k) in errors" :key="k">
              <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
              </p>
            </div>
          </div>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                v-model="user.name"
                class="form-control"
                id="name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                v-model="user.email"
                class="form-control"
                id="email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                v-model="user.password"
                class="form-control"
                id="password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password confirmation" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                v-model="user.password_confirmation"
                class="form-control"
                id="password_confirmation"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
          <div>
            Sudah Punya akun ?
          <router-link to="/login"> Login </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Register",
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("api/register", this.user)
        .then((response) => {
          this.$router.push({
            name: "login",
            params: {
              message: response.data.message,
            },
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
