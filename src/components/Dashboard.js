import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="content">
        <h2 className="title">Welcome to the Virtual Memory Monitoring Dashboard</h2>
        <p className="intro">Select a feature from the navigation bar to view details.</p>
        <div className="feature-boxes">
          <div className="feature-box animate-box">
            <h3>Memory Usage</h3>
            <p>Real-time tracking of memory usage, showing current utilization and trends.</p>
          </div>
          <div className="feature-box animate-box">
            <h3>Page Faults</h3>
            <p>Monitor page faults to optimize virtual memory performance and efficiency.</p>
          </div>
          <div className="feature-box animate-box">
            <h3>Memory Leaks</h3>
            <p>Identify potential memory leaks and take action to prevent performance degradation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
