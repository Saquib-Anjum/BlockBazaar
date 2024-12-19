import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ historcalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historcalData && historcalData.prices) {
      historcalData.prices.forEach(([timestamp, price]) => {
        const formattedDate = new Date(timestamp).toLocaleDateString(); // Convert timestamp to date
        dataCopy.push([formattedDate, price]);
      });
      setData(dataCopy);
    }
  }, [historcalData]);

  return (
    <div style={{ width: "100%", height: "500px" }}> {/* Set explicit height */}
      <Chart
        chartType="LineChart"
        data={data}
        options={{
          title: "Price History",
          hAxis: { title: "Date" },
          vAxis: { title: "Price" },
          legend: { position: "none" },
        }}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default LineChart;
