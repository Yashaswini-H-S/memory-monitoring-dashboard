import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './MemoryUsage.css'; // Import the updated CSS file

// Register the required components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const MemoryUsage = () => {
  const [memoryData, setMemoryData] = useState({ used: 0, free: 100 });
  const [processes, setProcesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateMemoryUsage = () => {
      // Simulate process memory usage
      const processList = [
        { name: 'Process A', memoryUsage: Math.random() * 50 },
        { name: 'Process B', memoryUsage: Math.random() * 50 },
        { name: 'Process C', memoryUsage: Math.random() * 50 },
      ];

      const totalMemory = 1024; // Simulate a total memory of 1024MB
      const usedMemory = processList.reduce((sum, process) => sum + process.memoryUsage, 0);
      const freeMemory = totalMemory - usedMemory;

      const usedPercentage = (usedMemory / totalMemory) * 100;
      const freePercentage = 100 - usedPercentage;

      setMemoryData({
        used: usedPercentage,
        free: freePercentage,
      });
      setProcesses(processList); // Set processes list to state
      setIsLoading(false); // Data is now loaded
    };

    const interval = setInterval(updateMemoryUsage, 2000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ['Used', 'Free'],
    datasets: [
      {
        data: [memoryData.used, memoryData.free],
        backgroundColor: ['#007bff', '#28a745'],
      },
    ],
  };

  return (
    <div className="memory-usage-container">
      <h2>Memory Usage - Task Manager</h2>

      {isLoading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <>
          <div className="chart-container">
            <Doughnut data={data} options={{ responsive: true }} />
          </div>

          <div className="memory-details">
            <p><strong>Total Used Memory:</strong> {memoryData.used.toFixed(2)}%</p>
            <p><strong>Total Free Memory:</strong> {memoryData.free.toFixed(2)}%</p>
          </div>

          <div className="process-list">
            <h3>Running Processes</h3>
            <table className="process-table">
              <thead>
                <tr>
                  <th>Process</th>
                  <th>Memory Usage (%)</th>
                </tr>
              </thead>
              <tbody>
                {processes.length === 0 ? (
                  <tr>
                    <td colSpan="2">No processes available.</td>
                  </tr>
                ) : (
                  processes.map((process, index) => (
                    <tr key={index}>
                      <td>{process.name}</td>
                      <td>{process.memoryUsage.toFixed(2)}%</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MemoryUsage;
