<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">User</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <h2>Ini adalah barang yang dipakai {{ pengguna.name }}</h2>
              <b-table :items="barangs" :fields="fields" responsive>

                <template slot="action" slot-scope="data">
                    <span v-if="loginType == 'admin'">
                    <router-link
                      :to="{
                        name: 'edit-barang',
                        params: { id: data.item.id },
                      }"
                      class="btn btn-sm btn-primary"
                      >Edit</router-link
                    >
                    <Button v-if="data.item.pengguna_id!=1"
                        class="btn btn-sm btn-danger"
                        @click="update(data.item.id)"
                      >
                        Hapus Kepemilikan
                      </Button>
                    <button
                      class="btn btn-sm btn-danger"
                      @click="destroy(data.item.id)"
                    >
                      Hapus Data Barang
                    </button>
                    </span>
                    <span v-if="loginType != 'admin'">
                        Kamu Bukan Admin
                    </span>
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
        fields: [
            {
                key: 'id',
                label: 'ID',
                sortable: true
            },
            {
                key: 'kode_barang',
                label: 'Kode Barang',
                sortable: true
            },
            {
                key: 'nama_barang',
                label: 'Nama Barang',
                sortable: true
            },
            {
                key: 'fungsi',
                label: 'Fungsi',
                sortable: true
            },
            {
                key: 'lokasi.lokasi',
                label: 'Lokasi',
                sortable: true
            },
            {
                key: 'harga_barang',
                label: 'Harga Barang',
                sortable: true
            },
            {
                key: 'action',
                label: 'Action',
                sortable: false
            }
        ],
      barangs: [],
      pengguna: {},
      barang: {
          pengguna_id: 1,
      },
      user: null,
      isLoggedIn: false,
      loginType: '',
    };
  },
  created() {
    let uri = `/api/pengguna/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.barangs = response.data.barang;
      this.pengguna = response.data.pengguna;
    });
  },
  methods: {
    update(id) {
      let uri = "/api/barang/" + id;
      axios
        .put(uri, this.barang)
        .then((response) => {
        this.barangs = this.barangs.filter((barangs) => barangs.id != id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    destroy(id) {
      axios
        .delete(`/api/barang/${id}`)
        .then((response) => {
        this.barangs = this.barangs.filter((barangs) => barangs.id != id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

      axios.get(`/api/user`)
        .then(response => {
          this.user = response.data
          this.loginType = response.data.roles[0].name
        })
        .catch(error => {
          if (error.response.status === 401) {
            localStorage.clear();
            this.$router.push('/login')
          }
          console.error(error);
        });
  },
};
</script>
