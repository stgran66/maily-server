import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function PieChart({ yes, no }) {
  const data = {
    labels: ['Yes', 'No'],
    datasets: [
      {
        data: [yes, no],
        backgroundColor: ['green', 'red'],
        hoverBackgroundColor: ['green', 'red'],
      },
    ],
  };

  return (
    <div style={{ width: '50%', height: '50%' }}>
      <p>Response</p>
      <Doughnut data={data} />
    </div>
  );
}

export default PieChart;
