<template>
  <div class="container-fluid">
    <div class="card mt-5">
      <div class="card-header">Lampiran Surat Komitmen Penggunaan Barang</div>
      <div class="card-body">
        <form enctype="multipart/form-data" @submit.prevent="checkForm">
          <div class="form-group">
            <label>Upload Surat Terbaru</label>
            <input
              type="file"
              name="file"
              accept="application/pdf"
              class="form-control"
              @change="onFileChangePDF"
            />
          </div>
          <button class="btn btn-primary" type="submit">Update Surat</button>
          <button class="btn btn-success" type="button" @click="showModal()">
            Check Surat
          </button>
        </form>

        <sweet-modal ref="checkLampiran">
          <p>Preview PDF:</p>
          <div class="previewPDF" v-if="previewPDF">
            <iframe
              :src="previewPDF"
              type="document.pdf"
              class="pdf-thumbnail"
              width="100%"
              height="500px"
            ></iframe>
          </div>
          <div v-if="!previewPDF">
            <p>Tidak ada lampiran surat</p>
          </div>
        </sweet-modal>

        <hr />
        <div>Surat Komitmen {{ pengguna.name }} :</div>
        <iframe
          :src="'/surat_komitmen/' + pengguna.surat_komitmen + '#view=fit'"
          type="document.pdf"
          width="100%"
          height="1000px"
        ></iframe>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Vue from "vue";
export default {
  metaInfo: {
    title: "Lampiran Pengguna",
  },
  data() {
    return {
      pengguna: {},
      user: "",
      isLoggedIn: false,
      loginType: "",
      previewPDF: "",
      penggunas: [],
    };
  },
  created() {
    let uri = `/api/pengguna/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
      this.pengguna = response.data.pengguna;
      this.buku = response.data.buku;
    });
  },
  methods: {
    onFileChangePDF(e) {
      this.penggunas.surat_komitmen = e.target.files[0];
      this.previewPDF = URL.createObjectURL(e.target.files[0]);
    },
    showModal() {
      this.$refs.checkLampiran.open();
    },
    checkForm() {
      let formData = new FormData();
      formData.append("surat_komitmen", this.penggunas.surat_komitmen);

      let uri = `/api/pengguna/${this.$route.params.id}/lampiran`;
      axios
        .post(uri, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.pengguna = response.data.pengguna;
          this.previewPDF =
            "/surat_komitmen/" +
            response.data.pengguna.surat_komitmen +
            "#view=fit";
        });
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


