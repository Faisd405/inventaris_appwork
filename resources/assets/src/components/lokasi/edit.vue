<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit lokasi</div>

          <div class="card-body">
            <form @submit.prevent="LokasiUpdate" @submit="checkForm">
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
                  <b>Tolong Isi Kolom Tersebut :</b>
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
    title: "Edit Lokasi",
  },
  data() {
    return {
      lokasi: {},
        errors: [],
    };
  },
  created() {
    axios.get(`/api/lokasi/${this.$route.params.id}`).then((response) => {
      this.lokasi = response.data.lokasi;
    });
  },
  methods: {
    LokasiUpdate() {
      let uri = "/api/lokasi/" + this.$route.params.id;
      axios.put(uri, this.lokasi).then((response) => {
        this.$router.push("/lokasi");
      });
    },
    checkForm: function(e){
        this.errors = [];
        if(this.lokasi.lokasi == ""){
            this.errors.push("Nama lokasi tidak boleh kosong");
        }
        e.preventDefault();
    }
  },
};
</script>
