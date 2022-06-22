let chart = document.getElementById("lineChart");
const myChart = new Chart(chart, {
  type: "line",
  data: {
    labels: [
      0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3,
      3.2, 3.4, 3.6, 3.8, 4,
    ],
    datasets: [
      {
        label: "price in EGP",
        data: [
          0, 10, 5, 13, 7, 10, 16, 6, 13, 5, 12, 7, 16, 8, 10, 5, 9, 2, 11, 5,
          7,
        ],

        fill: true,
        borderColor: "#bd9030",
        tension: 0.1,
      },
    ],
  },
});
