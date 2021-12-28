<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card card-default">
          <div class="card-header">User</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <h2>Ini adalah barang yang dipakai {{ users.name }}</h2>
              <b-table :items="barangs" :fields="fields">

                <template slot="action" slot-scope="data">
                    <span v-if="loginType == 'admin'">
                    <Button v-if="data.item.user_id!=1"
                        class="btn btn-sm btn-danger"
                        @click="update(data.item.id)"
                      >
                        Hapus Kepemilikan
                      </Button>
                      <span v-if="data.item.user_id == '1'">
                          Barang ini adalah barang milik admin
                      </span>
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
      users: {},
      barang: {
          user_id: 1,
      },
      user: null,
      isLoggedIn: false,
      loginType: '',
    };
  },
  created() {
    let uri = `/api/users/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.barangs = response.data.barang;
      this.users = response.data.user;
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
  },
};
</script>
