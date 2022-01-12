<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create pengguna</div>

          <div class="card-body">
            <form @submit.prevent="penggunaStore">
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
    title: "Create Pengguna",
  },
  data() {
    return {
      pengguna: {},
    };
  },
  methods: {
    penggunaStore() {
      axios
        .post("/api/pengguna", this.pengguna)
        .then((response) => {
          this.$router.push("/pengguna");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
