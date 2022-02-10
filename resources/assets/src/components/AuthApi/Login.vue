<template>
  <div class="container-fluid d-flex align-items-stretch flex-grow-1 p-0">
    <div class="flex-shrink-1 flex-grow-1 container-p-x container-p-y">
      <div class="layout-example-block layout-example-block-1">
        <div class="card card-default">
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
        .post("https://laporan.4visionmedia.com/api/data/login", {
          email: this.email,
          password: this.password,
        }).then(Response => {
            console.log(Response.data.success);
          if (Response.data.success === true) {
            this.$router.push("/login");
          } else {
            this.error = Response.data.message;
          }
        });
    },
  },
};
</script>
