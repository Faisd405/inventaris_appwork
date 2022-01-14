<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit Barang</div>

          <div class="card-body">
            <form @submit.prevent="BarangUpdate">
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
                <label for="jenis_id">Jenis</label>
                <select
                  name="jenis_id"
                  class="form-control"
                  v-model="barang.jenis_id"
                >
                  <option value="" disabled>Pilih Jenis</option>
                  <option
                    v-for="jenis in jenis"
                    :value="jenis.id"
                    :key="jenis.id"
                  >
                    {{ jenis.jenis_barang }}
                  </option>
                </select>
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
              <div class="form-group">
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
                />
              </div>
              <br />
              <div class="preview" v-if="preview">
                <p>Preview:</p>
                <img :src="preview" class="img-thumbnail" />
              </div>

              <div class="form-group">
                <label for="lampiran">Lampiran (PDF)</label>
                <input
                  type="file"
                  class="form-control"
                  name="lampiran"
                  @change="onFileChangePDF"
                />
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
      kategori: [],
      pengguna: [],
      lokasi: [],
      jenis: [],
      user: "",
      loginType: "",
      preview: null,
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
    axios.get("/api/jenis").then((response) => {
      this.jenis = response.data.jenis;
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
      formData.append("jenis_id", this.barang.jenis_id);
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
        if (error.response.status === 401) {
          localStorage.clear();
          this.$router.push("/login");
        }
        console.error(error);
      });
  },
};
</script>
