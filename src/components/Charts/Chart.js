import React, { useState, useEffect } from "react";
import { fetchDailyDate } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.css";
function Chart() {
  const [dailyData, setDailyData] = useState([]);

  //getting data
  useEffect(() => {
    async function getDailydata() {
      setDailyData(await fetchDailyDate());
    }
    getDailydata();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",

            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Infected",
            borderColor: "red",
            backgroundColor: "rgb(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : (
    <div>sadsaads</div>
  );
  return <div className="containerchart">{lineChart}</div>;
}

export default Chart;
