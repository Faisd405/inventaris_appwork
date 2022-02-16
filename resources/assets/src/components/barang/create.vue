<template>
  <div class="container-fluid p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Create Barang</div>

          <div class="card-body">
            <form enctype="multipart/form-data" @submit.prevent="checkForm">
              <div class="form-group">
                <label for="nama_barang">Nama Barang</label>
                <input
                  type="text"
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
                  type="number"
                  name="harga_barang"
                  class="form-control"
                  v-model="barang.harga_barang"
                  placeholder="Masukan Harga Barang"
                />
              </div>

              <div class="form-group">
                <label for="year">Tahun</label>
                <input
                  type="year"
                  name="year"
                  class="form-control"
                  v-model="barang.year"
                  placeholder="Masukan Tahun"
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
                <label for="pengguna_id">pengguna</label>
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

              <div class="form-group">
                <label for="image">Gambar</label>
                <input
                  type="file"
                  class="form-control"
                  name="image"
                  accept="image/png, image/jpeg"
                  @change="onFileChange"
                />
              </div>
              <br />
              <div class="preview" v-if="preview">
                <p>Preview:</p>
                <img :src="preview" class="img-thumbnail" />
                <br />
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
                <button
                  class="btn btn-md btn-success"
                  type="submit"
                  title="submit"
                >
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
    title: "Create Barang",
  },
  data() {
    return {
      barang: {
        nama_barang: "",
        kode_barang: "",
        detail_barang: "",
        kategori_id: "",
        fungsi: "",
        harga_barang: "",
        year: "",
        lokasi_id: "",
        detail_lokasi: "",
        jumlah_barang: "",
        pengguna_id: "",
        image: "",
        lampiran: "",
      },
      preview: null,
      previewPDF: null,
      kategori: [],
      lokasi: [],
      pengguna: [],
      preview: null,
      jumlah: 0,
      i: 0,
      errors: [],
    };
  },
  created() {
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
    BarangStore() {
      let formData = new FormData();
      formData.append("nama_barang", this.barang.nama_barang);
      formData.append("kode_barang", this.barang.kode_barang);
      formData.append("detail_barang", this.barang.detail_barang);
      formData.append("kategori_id", this.barang.kategori_id);
      formData.append("fungsi", this.barang.fungsi);
      formData.append("harga_barang", this.barang.harga_barang);
      formData.append("year", this.barang.year);
      formData.append("lokasi_id", this.barang.lokasi_id);
      formData.append("detail_lokasi", this.barang.detail_lokasi);
      formData.append("pengguna_id", this.barang.pengguna_id);
      formData.append("image", this.barang.image);
      formData.append("jumlah_barang", this.barang.jumlah_barang);
      formData.append("lampiran", this.barang.lampiran);

      axios
        .post("/api/barang", formData)
        .then((response) => {
          this.$router.push("/barang");
        })
        .catch((errors) => {
          console.log(errors);
          console.log(formData);
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
      if (this.barang.year != "") {
        if (this.barang.year < 1901) {
          this.errors.push("Tahun tidak boleh kurang dari 1901");
        }
        if (this.barang.year.length > 4) {
          this.errors.push("Tahun tidak boleh lebih dari 4 digit");
        }
      }
      if (this.barang.lokasi_id == "") {
        this.errors.push("Lokasi tidak boleh kosong");
      }
      if (this.barang.detail_lokasi == "") {
        this.errors.push("Detail Lokasi tidak boleh kosong");
      }
      if (this.barang.jumlah_barang == "") {
        this.errors.push("Jumlah tidak boleh kosong");
      }
      if (this.barang.pengguna_id == "") {
        this.errors.push("Pengguna tidak boleh kosong");
      }
      if (this.barang.image != "") {
        // size 2048
        if (this.barang.image.size > 6000000) {
          this.errors.push("Ukuran gambar tidak boleh lebih dari 6MB");
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
        this.BarangStore();
      }
    },
  },
};
</script>
