<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit Barang</div>

          <div class="card-body">
            <form @submit.prevent="checkForm">
              <!-- 'nama_barang', 'kode_barang', 'detail_barang', 'kategori_id', 'fungsi', 'harga_barang', 'lokasi', 'pengguna_id' -->
              <div class="form-group">
                <label for="nama_barang">Nama Barang</label>
                <input
                  type="text"
                  name="nama_barang"
                  class="form-control"
                  v-model="barang.nama_barang"
                  placeholder="Masukan Nama Barang"
                />
              </div>

              <div class="form-group">
                <label for="kode_barang">Kode Barang</label>
                <input
                  type="text"
                  name="kode_barang"
                  class="form-control"
                  v-model="barang.kode_barang"
                  placeholder="Masukan Kode Barang"
                />
              </div>

              <div class="form-group">
                <label for="detail_barang">Detail Barang</label>
                <textarea
                  name="detail_barang"
                  class="form-control"
                  v-model="barang.detail_barang"
                  placeholder="Masukan Detail Barang"
                ></textarea>
              </div>

              <div class="form-group">
                <label for="kategori_id">Kategori</label>
                <select
                  name="kategori_id"
                  class="form-control"
                  v-model="barang.kategori_id"
                >
                  <option value="" disabled>Pilih Kategori</option>
                  <option
                    v-for="kategori in kategori"
                    :value="kategori.id"
                    :key="kategori.id"
                  >
                    {{ kategori.nama_kategori }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="fungsi">Fungsi</label>
                <input
                  type="text"
                  name="fungsi"
                  class="form-control"
                  v-model="barang.fungsi"
                  placeholder="Masukan Fungsi"
                />
              </div>

              <div class="form-group">
                <label for="harga_barang">Harga Barang</label>
                <input
                  type="text"
                  name="harga_barang"
                  class="form-control"
                  v-model="barang.harga_barang"
                  placeholder="Masukan Harga Barang"
                />
              </div>

              <div class="form-group">
                <label for="lokasi_id">Lokasi</label>
                <select
                  name="lokasi_id"
                  class="form-control"
                  v-model="barang.lokasi_id"
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
                <label for="detail_lokasi">Detail Lokasi</label>
                <input
                  type="text"
                  name="detail_lokasi"
                  class="form-control"
                  v-model="barang.detail_lokasi"
                  placeholder="Masukan Detail Lokasi"
                />
              </div>

              <div class="form-group">
                <label for="jumlah">Jumlah</label>
                <input
                  type="number"
                  name="jumlah"
                  class="form-control"
                  v-model="barang.jumlah_barang"
                  placeholder="Masukan Jumlah"
                />
              </div>

              <div class="form-group">
                <label for="pengguna_id">Pengguna</label>
                <select
                  name="pengguna_id"
                  class="form-control"
                  v-model="barang.pengguna_id"
                >
                  <option value="" disabled>Pilih Pengguna</option>
                  <option
                    v-for="pengguna in pengguna"
                    :key="pengguna.id"
                    :value="pengguna.id"
                  >
                    {{ pengguna.name }}
                  </option>
                </select>
              </div>
              <div class="form-group" v-if="!preview">
                <label for="">Foto Lama</label>
                <img
                  :src="'/images/' + barang.image"
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

              <div v-if="barang.lampiran && barang.lampiran != 'default.pdf' && !previewPDF">
                  <label>Lampiran Lama : </label>
                <iframe
                  :src="'/lampiran/' + barang.lampiran"
                  type="document.pdf"
                  width="100%"
                  height="500px"
                ></iframe>
              </div>
              <div v-if="!barang.lampiran || barang.lampiran == 'default.pdf'">
                <p  class="card card-body">Belum Upload PDF</p>
              </div>
              <div class="form-group">
                <label for="lampiran">Lampiran (PDF)</label>
                <input
                  type="file"
                  class="form-control"
                  name="lampiran"
                  accept="application/pdf"
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

              <!-- Keterangan Edit -->
              <div class="form-group">
                <label for="keterangan"
                  >Keterangan (Apabila Ganti Pengguna)</label
                >
                <textarea
                  name="keterangan"
                  class="form-control"
                  v-model="barang.keterangan"
                  placeholder="Masukan Keterangan"
                ></textarea>
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
    title: "Edit Barang",
  },
  data() {
    return {
      barang: {
        pengguna: {},
        kategori: {},
      },
      errors: [],
      kategori: [],
      pengguna: [],
      lokasi: [],
      user: "",
      loginType: "",
      preview: null,
        previewPDF: null,
    };
  },
  created() {
    axios
      .get("/api/kategori")
      .then((response) => {
        this.kategori = response.data.kategori;
      })
      .catch((errors) => {
        console.log(errors);
      });
    axios
      .get("/api/barang/" + this.$route.params.id)
      .then((response) => {
        this.barang = response.data.barang;
      })
      .catch((errors) => {
        console.log(errors);
      });

    axios.get("/api/kategori").then((response) => {
      this.kategori = response.data.kategori;
    });
    axios.get("/api/pengguna").then((response) => {
      this.pengguna = response.data.pengguna;
    });
    axios.get("/api/lokasi").then((response) => {
      this.lokasi = response.data.lokasi;
    });
  },
  methods: {
    BarangUpdate() {
      let uri = "/api/barang/" + this.$route.params.id;

      let formData = new FormData();
      formData.append("id", this.$route.params.id);
      formData.append("nama_barang", this.barang.nama_barang);
      formData.append("kode_barang", this.barang.kode_barang);
      formData.append("detail_barang", this.barang.detail_barang);
      formData.append("kategori_id", this.barang.kategori_id);
      formData.append("fungsi", this.barang.fungsi);
      formData.append("harga_barang", this.barang.harga_barang);
      formData.append("lokasi_id", this.barang.lokasi_id);
      formData.append("detail_lokasi", this.barang.detail_lokasi);
      formData.append("jumlah_barang", this.barang.jumlah_barang);
      formData.append("pengguna_id", this.barang.pengguna_id);
      formData.append("keterangan", this.barang.keterangan);
      if (this.barang.image) {
        formData.append("image", this.barang.image);
      }
      if (this.barang.lampiran) {
        formData.append("lampiran", this.barang.lampiran);
      }
      formData.append("year", this.barang.year);

      axios
        .post(uri, formData)
        .then((response) => {
          this.$router.push("/barang");
          console.log(this.barang);
        })
        .catch((errors) => {
          console.log(errors);
          console.log(this.barang);
        });
    },
    onFileChange(e) {
      this.barang.image = e.target.files[0];
      this.preview = URL.createObjectURL(e.target.files[0]);
    },
    onFileChangePDF(e) {
      this.barang.lampiran = e.target.files[0];
        this.previewPDF = URL.createObjectURL(e.target.files[0]);
    },

    checkForm: function (e) {
      this.errors = [];
      if (this.barang.nama_barang == "") {
        this.errors.push("Nama Barang tidak boleh kosong");
      }
      if (this.barang.kode_barang == "") {
        this.errors.push("Kode Barang tidak boleh kosong");
      }
      if (this.barang.detail_barang == "") {
        this.errors.push("Detail Barang tidak boleh kosong");
      }
      if (this.barang.kategori_id == "") {
        this.errors.push("Kategori tidak boleh kosong");
      }
      if (this.barang.fungsi == "") {
        this.errors.push("Fungsi tidak boleh kosong");
      }
      if (this.barang.harga_barang == "") {
        this.errors.push("Harga Barang tidak boleh kosong");
      }
      if (this.barang.year == "") {
        this.errors.push("Tahun tidak boleh kosong");
      }
      if (this.barang.lokasi_id == "") {
        this.errors.push("Lokasi tidak boleh kosong");
      }
      if (this.barang.detail_lokasi == "") {
        this.errors.push("Detail Lokasi tidak boleh kosong");
      }
      if (this.barang.pengguna_id == "") {
        this.errors.push("Pengguna tidak boleh kosong");
      }
      if (this.barang.jumlah_barang == "") {
        this.errors.push("Jumlah tidak boleh kosong");
      }
      if (this.barang.image != "") {
        // size 2048
        if (this.barang.image.size > 2048000) {
          this.errors.push("Ukuran gambar tidak boleh lebih dari 2MB");
        }
      }
      if (this.barang.lampiran != "") {
        // size 2048
        if (this.barang.lampiran.size > 2048000) {
          this.errors.push("Ukuran lampiran tidak boleh lebih dari 2MB");
        }
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      }
      if (this.errors.length == 0) {
        this.BarangUpdate();
      }
    },
  },
  mounted() {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");

    axios
      .get(`/api/user`)
      .then((response) => {
        this.user = response.data;
        this.loginType = response.data.roles[0].name;
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 500) {
          localStorage.clear();
          this.$router.push("/login");
        }
        console.error(error);
      });
  },
};
</script>
