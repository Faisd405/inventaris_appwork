<template>
  <div class="container-fluid p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit jenis</div>

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
                <label>Jumlah</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="jenis.jumlah"
                  placeholder="Masukan Jumlah"
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
    title: "Edit Jenis",
  },
  data() {
    return {
      jenis: {
        jenis_buku: "",
      },
      errors: [],
    };
  },
  created() {
    axios.get(`/api/jenis/${this.$route.params.id}`).then((response) => {
      this.jenis = response.data.jenis;
    });
  },
  methods: {
    JenisUpdate() {
      let uri = "/api/jenis/" + this.$route.params.id;
      axios.put(uri, this.jenis).then((response) => {
        this.$router.push("/jenis");
      });
    },
    checkForm: function (e) {
      this.errors = [];
      if (this.jenis.jenis_buku == "") {
        this.errors.push("Jenis Buku Tidak Boleh Kosong");
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.JenisUpdate();
      }
    },
  },
};
</script>
