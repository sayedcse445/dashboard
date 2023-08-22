import { Chart } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Click me!',
      data: [10, 15, 8, 12, 7, 9],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
  ],
};

const options = {
  onClick: (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      // Define your URLs based on the index clicked
      const urls = ['https://example.com/jan', 'https://example.com/feb', 'https://example.com/mar', 'https://example.com/apr', 'https://example.com/may', 'https://example.com/jun'];
      window.open(urls[index], '_blank'); // Open the URL in a new tab
    }
  },
};

const ClickableLineChart = () => {
  return (
    <div>
      <h2>Clickable Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ClickableLineChart;
