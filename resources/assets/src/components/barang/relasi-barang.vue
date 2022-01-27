<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Ganti Pengguna Barang</div>

          <div class="card-body">
            <form @submit.prevent="RelasiUserBarangUpdate" @submit="checkForm">
              <!-- select user -->
              <div class="form-group">
                <label for="user_id">Pengguna</label>
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
              <!-- select barang -->
              <div class="form-group">
                <label for="barang_id">Barang</label>
                <select
                  name="barang_id"
                  class="form-control"
                  v-model="barang.id"
                >
                  <option value="" disabled>Pilih Barang</option>
                  <option
                    v-for="barang in barangs"
                    :value="barang.id"
                    :key="barang.id"
                  >
                    {{ barang.nama_barang }}, Pemakai :
                    {{ barang.pengguna.name }}
                  </option>
                  <option disabled v-if="!barang">Tidak Ada Barang Baru</option>
                </select>
              </div>

              <!-- Keterangan Edit -->
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
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
                  <b>Tolong Isi Kolom Tersebut :</b>
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
    title: "Relasi Barang Dan Pengguna",
  },
  data() {
    return {
      pengguna: [],
      barang: {
        pengguna_id: "",
        id: "",
        keterangan: "",
      },
      barangs: {},
      errors: [],
    };
  },
  created() {
    axios.get("/api/pengguna/").then((response) => {
      this.pengguna = response.data.pengguna;
    });
    axios.get("/api/barang").then((response) => {
      this.barangs = response.data.barang;
    });
  },
  methods: {
    RelasiUserBarangUpdate() {
      let uri = "/api/barang/relasi/" + this.barang.id;
      axios
        .put(uri, this.barang)
        .then((response) => {
          this.$router.push("/pengguna/detail/" + this.barang.pengguna_id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkForm: function (e) {
      this.errors = [];
      if (this.barang.pengguna_id == "") {
        this.errors.push("Pengguna Harus Diisi");
      }
      if (this.barang.id == "") {
        this.errors.push("Barang Harus Diisi");
      }
      e.preventDefault();
    },
  },
};
</script>
