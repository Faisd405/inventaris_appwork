<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit pengguna</div>

          <div class="card-body">
            <form @submit.prevent="penggunaUpdate">
              <div class="form-group">
                <label>Nama pengguna</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pengguna.name"
                  placeholder="Masukan pengguna"
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
    title: "Edit Pengguna",
  },
  data() {
    return {
      pengguna: {},
    };
  },
  created() {
    axios.get(`/api/pengguna/${this.$route.params.id}`).then((response) => {
      this.pengguna = response.data.pengguna;
    });
  },
  methods: {
    penggunaUpdate() {
      let uri = "/api/pengguna/" + this.$route.params.id;
      axios.put(uri, this.pengguna).then((response) => {
        this.$router.push("/pengguna");
      });
    },
  },
};
</script>
