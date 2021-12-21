<script>
import { Bar } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Bar,
  data() {
    return {
      chartData: {
        // Labels for the bars
        labels: [], //year
        datasets: [{
            label: "Total Aset Pertahun",
            borderWidth: 1,
            // Colors for the bars
            // lightblue
            backgroundColor: "rgba(0,0,255,0.2)",

            borderColor: "rgba(0,0,255,1)",

            pointBorderColor: "#2554FF",
            // length of the bar
            data: [],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
    mounted() {
      axios.get(`/api/barang/year`).then((response) => {
        this.chartData.labels = response.data.year;
        this.chartData.datasets[0].data = response.data.harga_barang;
        this.renderChart(this.chartData, this.options);
      });
    },
};
</script>
