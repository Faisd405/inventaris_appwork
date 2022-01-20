<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit jenis</div>

          <div class="card-body">
            <form @submit.prevent="JenisUpdate">
              <div class="form-group">
                <label>Nama jenis</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="jenis.jenis_buku"
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
  metaInfo: {
    title: "Edit Jenis",
  },
  data() {
    return {
      jenis: {},
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
  },
};
</script>
