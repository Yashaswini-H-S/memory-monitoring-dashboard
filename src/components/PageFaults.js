import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PageFaultsChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart if it exists
    }

    const ctx = chartRef.current.getContext('2d');

    // Create a gradient for the bars
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(75, 192, 192, 0.6)');
    gradient.addColorStop(1, 'rgba(153, 102, 255, 0.6)');

    chartInstance.current = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March'], // X-axis labels
        datasets: [
          {
            label: 'Page Faults',
            data: [12, 19, 3], // Your data here
            borderColor: 'rgba(75, 192, 192, 1)', // Border color
            backgroundColor: gradient, // Using the gradient background
            borderWidth: 2, // Border width
            borderRadius: 10, // Rounded corners
            hoverBackgroundColor: 'rgba(153, 102, 255, 0.6)', // Hover effect
            hoverBorderColor: 'rgba(75, 192, 192, 1)', // Hover border effect
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Subtle grid lines for X-axis
            },
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Subtle grid lines for Y-axis
            },
            ticks: {
              beginAtZero: true, // Ensures the Y-axis starts at 0
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Page Faults Over Time', // Title of the chart
            font: {
              size: 20, // Title font size
              weight: 'bold', // Title font weight
            },
            padding: 20, // Padding around the title
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Tooltip background color
            titleColor: '#fff', // Tooltip title text color
            bodyColor: '#fff', // Tooltip body text color
            borderColor: 'rgba(75, 192, 192, 1)', // Tooltip border color
            borderWidth: 1, // Tooltip border width
          },
        },
      },
    });

    // Cleanup chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array means this runs once when the component is mounted

  return <canvas ref={chartRef}></canvas>;
};

export default PageFaultsChart;
