<script>
import { Pie } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Pie,
  data() {
    return {
      chartData: {
        // Labels for the bars
        labels: [],
        datasets: [{
          label: "Jumlah Barang per Kategori",
          // Colors for the bars
          backgroundColor: "rgba(185, 215, 234, 0.2)",

          borderColor: "rgba(118, 159, 205, 1)",

          pointBorderColor: "#2554FF",
          // length of the bar
          data: [],
        },]
      },
    };
  },
  mounted() {
      axios.get('/api/inventaris/barangdanbuku').then((response) => {
        this.chartData.labels = response.data.inventaris;
        this.chartData.datasets[0].data = response.data.total;
        this.renderChart(this.chartData, this.options);
      });
  },
};
</script>
