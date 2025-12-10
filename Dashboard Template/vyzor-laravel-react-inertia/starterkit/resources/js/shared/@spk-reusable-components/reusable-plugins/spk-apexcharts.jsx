import React from 'react';
import ReactApexChart from "react-apexcharts";

const Spkapexcharts = ({ chartOptions, chartSeries, height, width, type }) => {

  return (
    <ReactApexChart options={chartOptions} series={chartSeries} height={height} width={width} type={type} />
  );

};

export default Spkapexcharts;
