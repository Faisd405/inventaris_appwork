<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">Create kategori</div>

          <div class="card-body">
            <form @submit.prevent="KategoriStore">
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
                  <option value="" disabled>Pilih User</option>
                  <option v-for="sifat in sifat" :key="sifat.id" :value="sifat.id">
                    {{ sifat.jenis_sifat }}
                  </option>
                </select>
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
import axios from 'axios';
export default {
  data() {
    return {
      kategori: {},
      sifat: [],
    };
  },
  created() {
      axios.get('/api/sifat').then(response => {
        this.sifat = response.data.sifat;
      });
  },
  methods: {
    KategoriStore() {
      axios
        .post("/api/kategori", this.kategori)
        .then((response) => {
          this.$router.push("/kategori");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
