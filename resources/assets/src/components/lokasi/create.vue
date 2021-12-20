<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Create lokasi</div>

          <div class="card-body">
            <form @submit.prevent="LokasiStore">
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
                <label>Kordinat</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="lokasi.kordinat"
                  placeholder="Masukan Kordinat"
                />
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
  data() {
    return {
      lokasi: {},
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
  },
};
</script>
