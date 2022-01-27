<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create sifat</div>

          <div class="card-body">
            <form @submit.prevent="SifatStore" @submit="checkForm">
              <div class="form-group">
                <label>Sifat Barang</label>
                <input
                  type="text"
                  class="form-control"
                  name="sifat"
                  id="sifat"
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
import axios from "axios";
export default {
  metaInfo: {
    title: "Create Sifat",
  },
  data() {
    return {
      sifat: {
        sifat_kategori: "",
      },
        errors: [],
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
    checkForm: function(e){
        this.errors = [];
        if(this.sifat.sifat_kategori == ""){
            this.errors.push("Sifat Barang tidak boleh kosong");
        }
        if(this.errors.length > 0){
            e.preventDefault();
        }
    }
  },
};
</script>
