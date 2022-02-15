<script>
import { Line } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        // Labels for the bars
        labels: [],
        datasets: [],
      },
    };
  },
  mounted() {
    axios.get("/api/inventaris/inventarisTidakDipakai").then((response) => {
      this.chartData.labels = response.data.tanggal;
      for (let i = 0; i < response.data.kategori_barang.length; i++) {
        this.chartData.datasets.push({
          label: response.data.kategori_barang[i],
          backgroundColor: "#CC" + ((Math.random() * 0xffffff) << 0).toString(16),
          data: response.data.kategori[i],
          //rgb math random
          borderColor: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
        });
      }

      this.renderChart(this.chartData, this.options);
    });
  },
};
</script>
