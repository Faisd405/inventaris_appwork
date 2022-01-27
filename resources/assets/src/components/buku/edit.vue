<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit Buku</div>

          <div class="card-body">
            <form @submit.prevent="BookUpdate" @submit="checkForm">
              <div class="form-group">
                <label>Judul Buku</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="buku.judul"
                  placeholder="Masukan judul"
                />
              </div>
              <div class="form-group">
                <label>Penulis</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="buku.penulis"
                  placeholder="Masukan Penulis"
                />
              </div>
              <div class="form-group">
                <label>Penerbit</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="buku.penerbit"
                  placeholder="Masukan Penerbit"
                />
              </div>
              <div class="form-group">
                <label>Tanggal</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="buku.tanggal"
                  placeholder="Masukan Tanggal"
                />
              </div>
              <div class="form-group">
                <label>Kondisi</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="buku.kondisi"
                  placeholder="Masukan Kondisi"
                />
              </div>
              <div class="form-group">
                <label>Jumlah</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="buku.jumlah"
                  placeholder="Masukan Jumlah"
                />
              </div>
              <!-- jenis -->
                <div class="form-group">
                    <label>Jenis</label>
                    <select
                    name="jenis"
                    class="form-control"
                    v-model="buku.jenis_id"
                    >
                    <option value="" disabled>Pilih Jenis</option>
                    <option
                        v-for="jenis in jenis"
                        :value="jenis.id"
                        :key="jenis.id"
                    >
                        {{ jenis.jenis_buku }}
                    </option>
                    </select>
                </div>
                <!-- pengguna -->
                <div class="form-group">
                    <label>Pengguna</label>
                    <select
                    name="pengguna"
                    class="form-control"
                    v-model="buku.pengguna_id"
                    >
                    <option value="" disabled>Pilih Pengguna</option>
                    <option
                        v-for="pengguna in pengguna"
                        :value="pengguna.id"
                        :key="pengguna.id"
                    >
                        {{ pengguna.name }}
                    </option>
                    </select>
                </div>
              <!-- Lokasi -->
              <div class="form=group">
                <label for="lokasi_id">Lokasi</label>
                <select
                  name="lokasi_id"
                  class="form-control"
                  v-model="buku.lokasi_id"
                >
                  <option value="" disabled>Pilih Lokasi</option>
                  <option
                    v-for="lokasi in lokasi"
                    :value="lokasi.id"
                    :key="lokasi.id"
                  >
                    {{ lokasi.lokasi }}
                  </option>
                </select>
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
    title: "Edit Buku",
  },
  data() {
    return {
      buku: {},
      errors: [],
      lokasi: [],
        jenis: [],
        pengguna: [],
    };
  },
  created() {
    axios.get(`/api/buku/${this.$route.params.id}`).then((response) => {
      this.buku = response.data.buku;
    });
    axios.get("/api/lokasi").then((response) => {
      this.lokasi = response.data.lokasi;
    });
    axios.get("/api/jenis").then((response) => {
      this.jenis = response.data.jenis;
    });
    axios.get("/api/pengguna").then((response) => {
      this.pengguna = response.data.pengguna;
    });
  },
  methods: {
    BookUpdate() {
      let uri = "/api/buku/" + this.$route.params.id;
      axios.put(uri, this.buku).then((response) => {
        this.$router.push("/buku");
      });
    },
    checkForm: function (e) {
      this.errors = [];
      if (!this.buku.judul) {
        this.errors.push("Judul harus diisi");
      }
      if (!this.buku.penulis) {
        this.errors.push("Penulis harus diisi");
      }
      if (!this.buku.penerbit) {
        this.errors.push("Penerbit harus diisi");
      }
      if (!this.buku.tanggal) {
        this.errors.push("Tanggal harus diisi");
      }
      if (!this.buku.kondisi) {
        this.errors.push("Kondisi harus diisi");
      }
      if (!this.buku.jumlah) {
        this.errors.push("Jumlah harus diisi");
      }
      if (!this.buku.jenis_id) {
        this.errors.push("Jenis harus diisi");
      }
      if (!this.buku.pengguna_id) {
        this.errors.push("Pengguna harus diisi");
      }
      if (!this.buku.lokasi_id) {
        this.errors.push("Lokasi harus diisi");
      }
        e.preventDefault();
    },
  },
};
</script>
