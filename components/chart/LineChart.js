// components/chart/LineChart.js
import React from 'react';
import { Line } from 'recharts';

const LineChart = ({ data }) => {
  return (
    <Line
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    />
  );
};

export default LineChart;
