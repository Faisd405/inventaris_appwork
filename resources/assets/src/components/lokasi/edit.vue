<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit lokasi</div>

          <div class="card-body">
            <form @submit.prevent="LokasiUpdate">
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
  },
};
</script>
