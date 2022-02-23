<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">Setting Default Gambar dan Lampiran</div>
      <div class="card-body">
        <div class="my-5">
          <label> Background Login :</label>
          <br />
          <img
            :src="'images/background/background.jpg'"
            width="500px"
            height="100%"
          />
          <br />
          <button class="btn btn-success mt-3" @click="showModal1()">
            Ganti Background Login
          </button>
          <sweet-modal ref="backgroundLogin">
            <form @submit="FormbackgroundLogin">
              <div class="form-group">
                <label>Upload Background Login</label>
                <input
                  type="file"
                  name="file"
                  accept="image/jpeg, image/png"
                  class="form-control"
                  @change="onFileChangeBackgroundLogin"
                />
              </div>
              <button class="btn btn-primary" type="submit">
                Update Background Login
              </button>
            </form>
          </sweet-modal>
        </div>
        <hr />
        <div class="my-5">
          <label> Default Image Barang</label>
          <br />
          <img :src="'images/default.jpg'" width="500px" height="100%" />
          <br />
          <button class="btn btn-success mt-3" @click="showModal2()">
            Ganti Default Image Barang
          </button>
          <sweet-modal ref="defaultImage"
            ><form @click="FormDefaultImage">
              <div class="form-group">
                <label>Upload Default Image Barang</label>
                <input
                  type="file"
                  name="file"
                  accept="image/jpeg, image/png, image/jpg"
                  class="form-control"
                  @change="onFileChangeDefaultImage"
                />
              </div>
              <button class="btn btn-primary" type="submit">
                Update Default Image Barang
              </button>
            </form>
          </sweet-modal>
        </div>
        <hr />
        <div class="my-5">
          <label>Lampiran Default PDF Invoice</label>
          <br />
          <iframe
            :src="'lampiran/default.pdf'"
            type="document.pdf"
            width="500px"
            height="500px"
          ></iframe>
          <br />
          <button class="btn btn-success mt-3" @click="showModal3()">
            Ganti Default PDF Invoice
          </button>
          <sweet-modal ref="defaultPdfInvoice"
            ><form @submit="FormDefaultInvoice">
              <div class="form-group">
                <label>Upload Default PDF Invoice</label>
                <input
                  type="file"
                  name="file"
                  accept="application/pdf"
                  class="form-control"
                  @change="onFileChangeDefaultPDF"
                />
              </div>
              <button class="btn btn-primary" type="submit">
                Update Default PDF Invoice
              </button>
            </form>
          </sweet-modal>
        </div>
        <hr />
        <div class="my-5">
          <label>Lampiran Default PDF Surat Komitmen</label>
          <br />
          <iframe
            :src="'surat_komitmen/default.pdf'"
            type="document.pdf"
            width="500px"
            height="500px"
          ></iframe>
          <br />
          <button class="btn btn-success mt-3" @click="showModal4()">
            Ganti Default PDF Surat Komitmen
          </button>
          <sweet-modal ref="defaultPdfSuratKomitmen"
            ><form @click="FormDefaultSuratKomitmen">
              <div class="form-group">
                <label>Upload Default PDF Surat Komitmen</label>
                <input
                  type="file"
                  name="file"
                  accept="application/pdf"
                  class="form-control"
                  @change="onFileChangeDefaultSuratKomitmen"
                />
              </div>
              <button class="btn btn-primary" type="submit">
                Update Default PDF Surat Komitmen
              </button>
            </form>
          </sweet-modal>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Setting Image",
  },
  data() {
    return {
      imageBackgroundLogin: "",
      imageDefaultImage: "",
      imageDefaultPDFInvoice: "",
      imageDefaultPDFSuratKomitmen: "",
      user: "",
      loginType: "",
    };
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
  methods: {
    showModal1() {
      this.$refs.backgroundLogin.open();
    },
    showModal2() {
      this.$refs.defaultImage.open();
    },
    showModal3() {
      this.$refs.defaultPdfInvoice.open();
    },
    showModal4() {
      this.$refs.defaultPdfSuratKomitmen.open();
    },
    onFileChangeBackgroundLogin(e) {
      this.imageBackgroundLogin = e.target.files[0];
    },
    onFileChangeDefaultImage(e) {
      this.imageDefaultImage = e.target.files[0];
    },
    onFileChangeDefaultPDF(e) {
      this.imageDefaultPDFInvoice = e.target.files[0];
    },
    onFileChangeDefaultSuratKomitmen(e) {
      this.imageDefaultPDFSuratKomitmen = e.target.files[0];
    },
    FormbackgroundLogin() {
      const formData = new FormData();
      formData.append("file", this.imageBackgroundLogin);
      axios
        .post(`/api/image/imageBackgroundLogin`, formData)
        .then((response) => {
          this.$refs.backgroundLogin.close();
          this.$toast.success("Background Login Berhasil Diubah");
        })
        .catch((error) => {
          console.error(error);
          this.$toast.error("Background Login Gagal Diubah");
        });
    },
    FormDefaultImage() {
      const formData = new FormData();
      formData.append("file", this.imageDefaultImage);
      axios
        .post(`/api/image/imageDefaultImage`, formData)
        .then((response) => {
          this.$refs.defaultImage.close();
          this.$toast.success("Default Image Barang Berhasil Diubah");
        })
        .catch((error) => {
          console.error(error);
          this.$toast.error("Default Image Barang Gagal Diubah");
        });
    },
    FormDefaultInvoice() {
      const formData = new FormData();
      formData.append("file", this.imageDefaultPDFInvoice);
      axios
        .post(`/api/image/imageDefaultPDF`, formData)
        .then((response) => {
          this.$refs.defaultPdfInvoice.close();
          this.$toast.success("Default PDF Invoice Berhasil Diubah");
        })
        .catch((error) => {
          console.error(error);
          this.$toast.error("Default PDF Invoice Gagal Diubah");
        });
    },
    FormDefaultSuratKomitmen() {
      const formData = new FormData();
      formData.append("file", this.imageDefaultPDFSuratKomitmen);
      axios
        .post(`/api/image/imageDefaultSuratKomitmen`, formData)
        .then((response) => {
          this.$refs.defaultPdfSuratKomitmen.close();
          this.$toast.success("Default PDF Surat Komitmen Berhasil Diubah");
        })
        .catch((error) => {
          console.error(error);
          this.$toast.error("Default PDF Surat Komitmen Gagal Diubah");
        });
    },
  },
};
</script>
