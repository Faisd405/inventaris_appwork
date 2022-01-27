<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit kategori</div>

          <div class="card-body">
            <form @submit.prevent="KategoriUpdate" @submit="checkForm">
              <div class="form-group">
                <label>Nama kategori</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="kategori.nama_kategori"
                  placeholder="Masukan Kategori"
                />
              </div>
              <div class="form-group">
                <label>Fungsi</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="kategori.fungsi"
                  placeholder="Masukan Fungsi"
                />
              </div>
              <div class="form-group">
                <label for="sifat_id">Sifat Kategori</label>
                <select
                  name="sifat_id"
                  class="form-control"
                  v-model="kategori.sifat_id"
                >
                  <option value="" disabled>Pilih Sifat Kategori</option>
                  <option
                    v-for="sifat in sifat"
                    :key="sifat.id"
                    :value="sifat.id"
                  >
                    {{ sifat.sifat_kategori }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label>Jumlah</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="kategori.jumlah"
                  placeholder="Masukan Jumlah Barang"
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
    title: "Edit Kategori",
  },
  data() {
    return {
      kategori: {},
      sifat: [],
      errors: [],
    };
  },
  created() {
    axios
      .get(`/api/kategori/${this.$route.params.id}`)
      .then((response) => {
        this.kategori = response.data.kategori;
      })
      .catch((errors) => {
        console.log(errors);
      });
    axios.get("/api/sifat").then((response) => {
      this.sifat = response.data.sifat;
    });
  },
  methods: {
    KategoriUpdate() {
      let uri = "/api/kategori/" + this.$route.params.id;
      axios.put(uri, this.kategori).then((response) => {
        this.$router.push("/kategori");
      });
    },
    checkForm: function (e) {
      this.errors = [];
      if (this.kategori.nama_kategori == "") {
        this.errors.push("Nama Kategori tidak boleh kosong");
      }
      if (this.kategori.fungsi == "") {
        this.errors.push("Fungsi tidak boleh kosong");
      }
      if (this.kategori.sifat_id == "") {
        this.errors.push("Sifat tidak boleh kosong");
      }
      if (this.kategori.jumlah == "") {
        this.errors.push("Jumlah tidak boleh kosong");
      }
      if (this.errors.length) {
        e.preventDefault();
      }
    },
  },
};
</script>
