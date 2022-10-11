import React from "react";
import { Bar } from "react-chartjs-2";
import './Linechartcomp.css'
import {
  Chart as ChartJS,
  Title,
  Legend,
  Tooltip,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Legend,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement
);

const Barchartcomp = () => {
  return (
    <div className="barchartcomp">
      <Bar
        datasetIdKey="id"
        data={{
          labels: ["Mon", "Tue", "Wed","Thu","Fri","Sat","Sun"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [10, 20, 30,60,50,25,50],
            },
          ],
        }}
      />
    </div>
  );
};

export default Barchartcomp;
