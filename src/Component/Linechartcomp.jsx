import React, { useState } from "react";
import "./Linechartcomp.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Legend,
  Tooltip,
  LineElement,
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
  PointElement
);

const Linechartcomp = () => {
  return (
    <div className="linechartcomp">
      <Line
        datasetIdKey="id"
        data={{
          labels: ["Apr","May","Jun","Aug","Sep","Oct","Nov","Dec"],
          datasets: [
            {
              id: 1,
              label: "First Data set",
              data: [100, 200, 400,400,500,200,300,600],
            },
            {
              id: 2,
              label: "Second Data set",
              data: [200, 300, 500,500,600,300,400,100],
            },
          ],
        }}
        
      />
    </div>
  );
};

export default Linechartcomp;
