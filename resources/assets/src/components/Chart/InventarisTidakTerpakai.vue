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
    axios.get('/api/inventaris/inventarisTidakDipakai').then((response) => {
        this.chartData.labels = response.data.tanggal;
        for (let i = 0; i < response.data.kategori_barang.length; i++) {
            this.chartData.datasets.push({
                label: response.data.kategori_barang[i],
                backgroundColor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            })
        }

      this.renderChart(this.chartData, this.options);
    });
  },
};
</script>
