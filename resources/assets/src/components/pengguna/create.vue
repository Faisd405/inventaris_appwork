<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create pengguna</div>

          <div class="card-body">
            <form @submit.prevent="checkForm">
              <div class="form-group">
                <label>Nama pengguna</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pengguna.name"
                  placeholder="Masukan pengguna"
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
    title: "Create Pengguna",
  },
  data() {
    return {
      pengguna: {
        name: "",
      },
        errors: [],
    };
  },
  methods: {
    penggunaStore() {
      axios
        .post("/api/pengguna", this.pengguna)
        .then((response) => {
          this.$router.push("/pengguna");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    checkForm: function(e){
        this.errors = [];
        if(this.pengguna.name == ""){
            this.errors.push("Nama pengguna harus diisi");
        }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.penggunaStore();
      }
    }
  },
};
</script>
