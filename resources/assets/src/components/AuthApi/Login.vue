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
      name: "",
      id_api: "",
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
        })
        .then((Response) => {
          this.name = Response.data.user.username;
          this.id_api = Response.data.user.id;

          if (Response.data.success === true) {
            axios
              .post("/api/loginapi", {
                id_api: this.id_api,
                name: this.name,
                email: this.email,
                password: this.password,
                success: Response.data.success,
              })
              .then((response) => {
                if (response.data.login === true) {
                    localStorage.setItem("user", JSON.stringify(response.data.user)
                  );
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
                } else {
                  this.error = response.data.message;
                }
              });
          }
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
  },
};
</script>
