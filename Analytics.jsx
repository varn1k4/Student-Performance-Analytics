import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const grades =
    JSON.parse(
      localStorage.getItem("grades")
    ) || [];

  const data = {
    labels: grades.map(
      (g) => g.roll
    ),

    datasets: [
      {
        label: "Marks",
        data: grades.map(
          (g) => g.marks
        )
      }
    ]
  };

  return (
    <div>
      <h1>Analytics</h1>

      <Bar data={data} />
    </div>
  );
}

export default Analytics;