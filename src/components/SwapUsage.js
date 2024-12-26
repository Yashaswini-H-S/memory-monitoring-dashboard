import React from 'react';
import { Bar } from 'react-chartjs-2';

const SwapUsage = () => {
  const data = {
    labels: ['Swap 1', 'Swap 2'],
    datasets: [
      {
        label: 'Swap Usage (%)',
        data: [40, 60],
        backgroundColor: ['#3498db', '#e74c3c'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Swap Usage</h2>
      <Bar data={data} />
    </div>
  );
};

export default SwapUsage;
