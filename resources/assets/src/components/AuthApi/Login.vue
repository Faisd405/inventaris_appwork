<template>
  <div class="container-fluid" :style="background">
    <div class="container">
      <div class="layout-example-block layout-example-block-1 mt-5 mx-5">
        <div class="card border-success card-default">
          <div class="card-body">
            <h4 class="card-title">Login With My E-Task Account</h4>
            <h6 class="card-subtitle mb-2 text-muted">Login to your account</h6>
            <hr  style="border: 0.5px solid lightgreen"/>
            <div v-if="error" class="alert bg-danger text-white">
              {{ error }}
            </div>
            <div v-if="message" class="alert bg-success text-white">
              {{ message }}
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
              <button type="submit" class="btn btn-success">Login</button>
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
      token: "",
      background: {
        "background-image": "url(images/background/background.jpg)",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
        "background-attachment": "fixed",
      },
    };
  },
  created() {
    if (this.$route.params.error !== undefined) {
      this.error = this.$route.params.error + " Please login!";
    }
  },
  methods: {
    loginForm() {
      this.message = "";
      this.error = "";
      axios
        .post("https://laporan.4visionmedia.com/api/data/login", {
          email: this.email,
          password: this.password,
        })
        .then((Response) => {
          this.name = Response.data.user.username;
          this.id_api = Response.data.user.id;
          this.jabatan = Response.data.user.jabatan_id;
          this.token = Response.data.token.token;

          if (Response.data.success === true) {
            axios
              .post("/api/loginapi", {
                id_api: this.id_api,
                name: this.name,
                email: this.email,
                password: this.password,
                success: Response.data.success,
                jabatan: this.jabatan,
              })
              .then((response) => {
                if (response.data.login === true) {
                  localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                  );
                  localStorage.setItem("token", response.data.token);
                  localStorage.setItem("token_api", this.token);

                  let loginType = response.data.user.roles[0].name;
                  if (loginType === "user") {
                    this.$router.push("/homePengguna");
                  } else if (loginType === "admin") {
                    this.$router.push("/");
                  } else {
                    this.$router.push("login");
                  }

                  this.$emit("IsloggedIn");
                } else {
                  this.error = response.data.error;
                  this.message = response.data.message;
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
