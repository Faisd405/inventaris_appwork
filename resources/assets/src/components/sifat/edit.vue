<template>
  <div class="container-fluid p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit sifat</div>

          <div class="card-body">
            <form @submit.prevent="checkForm">
              <div class="form-group">
                <label>Sifat Barang</label>
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
import axios from 'axios'
export default {
  metaInfo: {
    title: "Edit Sifat",
  },
  data() {
    return {
      sifat: {},
        errors: [],
        ValidSifat: [],
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
      axios.get('/api/sifat').then((response) => {
        this.ValidSifat = response.data.sifat;
      });
  },
  methods: {
    SifatUpdate() {
      let uri = "/api/sifat/" + this.$route.params.id;
      axios.put(uri, this.sifat).then((response) => {
        this.$router.push("/sifat");
        });
    },
    checkForm: function(e){
        this.errors = [];
        if(this.sifat.sifat_kategori == ""){
            this.errors.push("Sifat Barang harus diisi");
        }
      if (this.ValidSifat.length > 0) {
        for (let i = 0; i < this.ValidSifat.length; i++) {
          if (this.ValidSifat[i].sifat_kategori == this.sifat.sifat_kategori) {
            this.errors.push("Sifat Barang sudah ada");
          }
        }
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.SifatUpdate();
      }
    }
  },
};
</script>
