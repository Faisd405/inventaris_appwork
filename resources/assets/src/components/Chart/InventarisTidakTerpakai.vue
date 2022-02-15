<script>
import { Line } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Line,
  props: ["options"],
  data() {
    return {
      chartData: {
        // Labels for the bars
        labels: ["2015", "2016", "2017", "2018", "2019"],
        datasets: [
          {
            label: "Kategori A",
            // Colors for the bars
            backgroundColor: "rgba(185, 0, 0, 0.2)",

            borderColor: "rgba(118, 159, 205, 1)",

            pointBorderColor: "#2554FF",
            // length of the bar
            data: ["10", "30", "20", "40", "50"],
          },
          {
            label: "Kategori B",
            // Colors for the bars
            backgroundColor: "rgba(255, 0, 0 , 0.2)",

            borderColor: "rgba(255, 0, 0 , 1)",

            pointBorderColor: "#2554FF",

            data: ["30","60","40","80","100"],
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
    axios.get('/api/inventaris/inventarisTidakDipakai').then((response) => {
        this.chartData.labels = response.data.tanggal;

      this.renderChart(this.chartData, this.options);
    });
  },
};
</script>
