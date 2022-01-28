<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create jenis</div>

          <div class="card-body">
            <form @submit.prevent="checkForm">
              <div class="form-group">
                <label>Jenis Buku</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="jenis.jenis_buku"
                  placeholder="Masukan Jenis"
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
    title: "Create Jenis",
  },
  data() {
    return {
      jenis: {
        jenis_buku: "",
      },
      errors: [],
    };
  },
  methods: {
    JenisStore() {
      axios
        .post("/api/jenis", this.jenis)
        .then((response) => {
          this.$router.push("/jenis");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    checkForm: function (e) {
        this.errors = [];
      if (this.jenis.jenis_buku == "") {
        this.errors.push("Jenis Buku tidak boleh kosong");
      }
      if (this.jenis.jenis_buku != "") {
        // validation jenis duplicate
        axios
          .get("/api/jenis")
          .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
              if (
                this.jenis.jenis_buku.toLowerCase() ==
                response.data[i].jenis_buku.toLowerCase()
              ) {
                this.errors.push("Jenis Buku sudah ada");
              }
            }
          })
          .catch((error) => {
            console.log(error.response.data.errors);
          });
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.JenisStore();
      }
    },
  },
};
</script>
