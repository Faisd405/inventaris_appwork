<template>
  <div class="container-fluid p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create lokasi</div>

          <div class="card-body">
            <form @submit.prevent="checkForm">
              <div class="form-group">
                <label>Nama lokasi</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="lokasi.lokasi"
                  placeholder="Masukan lokasi"
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
    title: "Create Lokasi",
  },
  data() {
    return {
      lokasi: {},
      errors: [],
    };
  },
  methods: {
    LokasiStore() {
      axios
        .post("/api/lokasi", this.lokasi)
        .then((response) => {
          this.$router.push("/lokasi");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    checkForm: function () {
      this.errors = [];
      if (!this.lokasi.lokasi) {
        this.errors.push("Nama Lokasi Harus Diisi");
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.LokasiStore();
      }
    },
  },
};
</script>
