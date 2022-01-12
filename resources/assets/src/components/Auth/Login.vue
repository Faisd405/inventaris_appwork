<template>
  <div class="row justify-content-md-center">
    <div class="col-5">
      <div class="card">
        <div class="card-body">
          <div v-if="message" class="alert alert-success" role="alert">
            {{ message }}
          </div>
          <h4 class="card-title">Login</h4>
          <h6 class="card-subtitle mb-2 text-muted">Login to your account</h6>
          <hr />
          <div v-if="error" class="alert bg-danger text-white">
            {{ error }}
          </div>
          <form @submit.prevent="loginForm">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
          <div>
            Belum Punya akun ?
            <router-link to="/register"> Register </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Login",
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      message: "",
    };
  },
  created() {
    if (this.$route.params.message !== undefined) {
      this.message = this.$route.params.message + " Please login!";
    }
  },
  methods: {
    loginForm() {
      axios
        .post("api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.token);

          let loginType = response.data.user.roles[0].name;
          if (loginType === "user") {
            this.$router.push("/");
          } else if (loginType === "admin") {
            this.$router.push("/");
          } else {
            this.$router.push("login");
          }

          this.$emit("IsloggedIn");
        })
        .catch((error) => {
          this.error = error.response.data.error;
        });
    },
  },
};
</script>
