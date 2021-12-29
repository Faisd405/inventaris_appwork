<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit sifat</div>

          <div class="card-body">
            <form @submit.prevent="SifatUpdate">
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
  created() {
      axios.get(`/api/sifat/${this.$route.params.id}`)
      .then((response) => {
        this.sifat = response.data.sifat;
      })
      .catch((errors) => {
        console.log(errors);
      });
  },
  methods: {
    SifatUpdate() {
      let uri = "/api/sifat/" + this.$route.params.id;
      axios.put(uri, this.sifat).then((response) => {
        this.$router.push("/sifat");
        });
    },
  },
};
</script>
