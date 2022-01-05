<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Ganti Foto {{barang.nama_barang}}</div>

          <div class="card-body">
            <div>
              <label for="">Foto Lama</label>
              <!-- image public -->
              <img
                :src="'/images/' + barang.image"
                class="img-thumbnail rounded"
                width="280px"
              />
            </div>
            <form @submit.prevent="GantiFoto">
              <div class="form-group">
                <label for="image">image</label>
                <input
                  type="file"
                  class="form-control"
                  name="image"
                  @change="onFileChange"
                />
              </div>
              <br />
              <div class="preview" v-if="preview">
                <p>Preview:</p>
                <img :src="preview" class="img-thumbnail" width="400px" />
              </div>
              <br />
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
      barang: {},
      barangs: {},
      preview: null,
    };
  },
  created() {
    axios
      .get("/api/barang/" + this.$route.params.id)
      .then((response) => {
        this.barang = response.data.barang;
        console.log(this.barang);
      })
      .catch((errors) => {
        console.log(errors);
      });
  },
  methods: {
    GantiFoto() {
      let formData = new FormData();
      formData.append("image", this.barangs.image);

      axios
        .post("/api/barang/gantifoto/" + this.barang.id, formData)
        .then((response) => {
          this.$router.push("/barang/detail/" + this.$route.params.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onFileChange(e) {
      this.barangs.image = e.target.files[0];
      this.preview = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>
