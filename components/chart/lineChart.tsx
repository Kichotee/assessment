/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  PointElement,
  Legend,
  ChartOptions,
  Title,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, Tooltip, Legend, LinearScale, PointElement, Title, LineElement);

interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

const data: LineProps["data"] = {
  labels: ["Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Transaction Volume by month",
      data: [2000, 4320, 8000, 9899, ],
      backgroundColor: "white",
      borderColor: "#F4623A",
      pointBorderColor: "#F4623A",
      tension: 0.4,
    },
  ],
};
const options: LineProps["options"] = {
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: "Transactions",
      align: "start",
      // position:"left"
    },
  },
  scales: {
    y: {
      min: 0,
      max: 12000,
    },
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="w-[32rem] min-h-[20rem]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
