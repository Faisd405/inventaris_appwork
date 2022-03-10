<template>
  <div class="container-fluid p-3">
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
                <label>Tahun</label>
                <input
                  type="number"
                  min="1901"
                  max="2099"
                  class="form-control"
                  v-model="buku.tanggal"
                  placeholder="Masukan Tahun"
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
              <div class="form-group">
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
                <label>Harga</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="buku.harga"
                  placeholder="Masukan Harga"
                />
              </div>

              <div class="form-group" v-if="!preview">
                <label for="">Foto Lama</label>
                <img
                  :src="'/gambarBuku/' + buku.image"
                  class="img-thumbnail rounded"
                  width="280px"
                />
              </div>

              <div class="form-group">
                <label for="image">image</label>
                <input
                  type="file"
                  class="form-control"
                  name="image"
                  @change="onFileChange"
                  accept="image/png, image/jpeg"
                />
              </div>
              <br />
              <div class="preview" v-if="preview">
                <p>Preview:</p>
                <img :src="preview" class="img-thumbnail" />
              </div>

              <div
                v-if="
                  buku.lampiran && buku.lampiran != 'default.pdf' && !previewPDF
                "
              >
                <label>Lampiran Invoice Lama : </label>
                <iframe
                  :src="'/lampiranBuku/' + buku.lampiran"
                  type="document.pdf"
                  width="100%"
                  height="500px"
                ></iframe>
              </div>
              <div v-if="!buku.lampiran">
                <p class="card card-body">Belum Upload Lampiran Invoice</p>
              </div>
              <div class="form-group">
                <label for="lampiran">Lampiran Invoice</label>
                <input
                  type="file"
                  class="form-control"
                  name="lampiran"
                  accept="application/pdf, image/png, image/jpeg, image/jpg"
                  @change="onFileChangePDF"
                />
              </div>
              <div class="previewPDF" v-if="previewPDF">
                <p>Preview PDF:</p>
                <iframe
                  :src="previewPDF"
                  type="document.pdf"
                  class="pdf-thumbnail"
                  width="100%"
                  height="500px"
                ></iframe>
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
      preview: null,
      previewPDF: null,
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
      const formData = new FormData();
      formData.append("judul", this.buku.judul);
      formData.append("penulis", this.buku.penulis);
      formData.append("penerbit", this.buku.penerbit);
      formData.append("tanggal", this.buku.tanggal);
      formData.append("kondisi", this.buku.kondisi);
      formData.append("jumlah", this.buku.jumlah);
      formData.append("jenis_id", this.buku.jenis_id);
      formData.append("pengguna_id", this.buku.pengguna_id);
      formData.append("lokasi_id", this.buku.lokasi_id);
      formData.append("harga", this.buku.harga);
      formData.append("image", this.buku.image);
      formData.append("lampiran", this.buku.lampiran);

      let uri = "/api/buku/" + this.$route.params.id + "?_method=PUT";
      axios.post(uri, formData).then((response) => {
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
      if (this.buku.tanggal == "") {
        this.errors.push("Tahun harus diisi");
      }
      if (this.buku.tanggal != "") {
        if (this.buku.tanggal < 1901) {
          this.errors.push("Tahun tidak boleh kurang dari 1901");
        }
        if (this.buku.tanggal.length > 4) {
          this.errors.push("Tahun tidak boleh lebih dari 4 digit");
        }
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
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.BookUpdate();
      }
    },
    onFileChange(e) {
      this.buku.image = e.target.files[0];
      this.preview = URL.createObjectURL(e.target.files[0]);
    },
    onFileChangePDF(e) {
      this.buku.lampiran = e.target.files[0];
      this.previewPDF = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>
