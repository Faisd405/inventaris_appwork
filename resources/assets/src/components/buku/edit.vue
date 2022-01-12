<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">Edit Buku</div>

          <div class="card-body">
            <form @submit.prevent="BookUpdate">
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
      lokasi: [],
    };
  },
  created() {
    axios.get(`/api/buku/${this.$route.params.id}`).then((response) => {
      this.buku = response.data.buku;
    });
    axios.get("/api/lokasi").then((response) => {
      this.lokasi = response.data.lokasi;
    });
  },
  methods: {
    BookUpdate() {
      let uri = "/api/buku/" + this.$route.params.id;
      axios.put(uri, this.buku).then((response) => {
        this.$router.push("/buku");
      });
    },
  },
};
</script>
