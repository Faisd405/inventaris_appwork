<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card card-default">
          <div class="card-header">User</div>

          <div class="card-body">
            <div class="table-responsive mt-2">
              <h2>Ini adalah isi dari kategori {{kategori.nama_kategori}}</h2>
              <b-table :items="barang" :fields="fields"></b-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
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
        ],
      barang: [],
      kategori: {},
    };
  },
  created() {
    let uri = `/api/kategori/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.barang = response.data.barang;
      this.kategori = response.data.kategori;
    });
  },
};
</script>
