<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Create sifat</div>

          <div class="card-body">
            <form @submit.prevent="SifatStore">
              <div class="form-group">
                <label>Judul sifat</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="sifat.sifat_kategori"
                  placeholder="Masukan judul"
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
import axios from 'axios'
export default {
  data() {
    return {
      sifat: {},
    };
  },
  methods: {
    SifatStore() {
      axios
        .post("/api/sifat", this.sifat)
        .then((response) => {
          this.$router.push("/sifat");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
