document.addEventListener("DOMContentLoaded", function () {
  // Data for the line chart
  var data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Loyal Customers",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#A700FF",
        data: [250, 380, 300, 200, 220, 250, 260, 280, 270, 260, 240, 250],
        fill: false,
        yAxisID: "y-axis-0",
        pointRadius: 0,
      },
      {
        label: "New Customers",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#EF4444",
        data: [150, 200, 180, 220, 200, 210, 190, 240, 230, 260, 200, 210],
        fill: false,
        yAxisID: "y-axis-0",
        pointRadius: 0,
      },
      {
        label: "Unique Customers",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#3CD856",
        data: [230, 250, 300, 320, 280, 230, 280, 290, 320, 340, 300, 280],
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  // Configuration options
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 400,
        ticks: {
          stepSize: 100,
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      labels: {
        font: {
          size: 12,
        },
      },
    },
  };

  // Get the context of the canvas element we want to select
  var ctx = document.getElementById("myLineChart").getContext("2d");

  // Create a new line chart with the provided data and options
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
});
