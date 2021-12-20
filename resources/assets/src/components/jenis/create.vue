<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Create jenis</div>

          <div class="card-body">
            <form @submit.prevent="JenisStore">
              <div class="form-group">
                <label>Nama jenis</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="jenis.jenis_barang"
                  placeholder="Masukan Jenis"
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
      jenis: {},
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
  },
};
</script>
