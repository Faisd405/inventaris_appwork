<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="card card-default">
        <div class="card-header">history</div>

        <div class="card-body">
          <div class="table-responsive mt-2">
            <label>Minimal Tanggal Awal:</label>
            <input class="form-control" v-model="filters.tanggal_awal_penggunaan.value.min" min="1997-01-01" :max="filters.tanggal_awal_penggunaan.value.max"/>

            <label>Maksimal Tanggal Awal:</label>
            <input class="form-control" v-model="filters.tanggal_awal_penggunaan.value.max" max="2030-12-31" :min="filters.tanggal_awal_penggunaan.value.min" />
            <br />

            <v-table
              :data="history"
              :filters="filters"
              class="table table-striped table-bordered"
            >
              <thead slot="head">
                <th>Nama Barang</th>
                <th>Tanggal Awal Penggunaan</th>
                <th>Tanggal Akhir Penggunaan</th>
                <th>Keterangan</th>
                <th>Nama Pengguna</th>
              </thead>
              <tbody slot="body" slot-scope="{ displayData }">
                <tr v-for="data in displayData" :key="data.guid">
                  <!-- index number -->
                  <td scope="data">
                    {{ data.barang.nama_barang }}
                  </td>
                  <td>
                    {{ data.tanggal_awal_penggunaan }}
                  </td>
                  <td>
                    {{ data.tanggal_akhir_penggunaan }}
                  </td>
                  <td>
                    {{ data.keterangan }}
                  </td>
                  <td>
                    {{ data.pengguna.name }}
                  </td>
                </tr>
              </tbody>
            </v-table>
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
    title: "history",
  },
  data() {
    return {
      filters: {
        tanggal_awal_penggunaan: { value: { min: "", max: "" }, custom: this.dateFilter },
      },
      history: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
    };
  },
  methods: {
    dateFilter(filterValue, row) {
        const min = filterValue.min;
        const max = filterValue.max;
        const rowValue = row.tanggal_awal_penggunaan;
        if (min && max) {
            return rowValue >= min && rowValue <= max;
        }
        if (min) {
            return rowValue >= min;
        }
        if (max) {
            return rowValue <= max;
        }
        return true;
        },
  },
  created() {
    let uri = `/api/history`;
    axios.get(uri).then((response) => {
      this.history = response.data.history;
    });
  },
};
</script>
