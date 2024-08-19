import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

interface ElderlyData {
    Year: string;
    ElderlyPercentage: number;
    EmploymentRate: number;
  }
  
  interface ElderlyChartProps {
    data: ElderlyData[];
  }
  
  const ElderlyChart: React.FC<ElderlyChartProps> = ({ data }) => {
    const years = data.map((d) => d.Year);
    const elderlyPercentage = data.map((d) => d.ElderlyPercentage);
    const employmentRate = data.map((d) => d.EmploymentRate);
  
    const combinedData = {
      labels: years,
      datasets: [
        {
          label: '고령자 비율 (55~64세)',
          type: 'bar' as const,
          data: elderlyPercentage,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          yAxisID: 'y-axis-1',
        },
        {
          label: '고령자 고용률 (55~64세)',
          type: 'line' as const,
          data: employmentRate,
          fill: false,
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          tension: 0.1,
          yAxisID: 'y-axis-2',
        },
      ],
    };
  
    const options = {
      maintainAspectRatio: false,
      scales: {
        'y-axis-1': {
          type: 'linear' as const,
          position: 'left' as const,
          min: 17,  // Set a minimum value to emphasize the change
          max: 19,  // Set a maximum value to emphasize the change
          ticks: {
            callback: function (value: any) {
              return value + '%';
            },
          },
        },
        'y-axis-2': {
          type: 'linear' as const,
          position: 'right' as const,
          min: 65,  // Set a minimum value to emphasize the change
          max: 75,  // Set a maximum value to emphasize the change
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: function (value: any) {
              return value + '%';
            },
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context: any) {
              return `${context.dataset.label}: ${context.raw.toFixed(2)}%`;
            },
          },
        },
      },
    };
  return (
    <div className='w-[67vw] h-[67vh] items-center flex flex-col justify-center'>
      <h2 className='text-2xl font-bold mb-10'>고령자 비율 및 고용률 (2019 - 2024)</h2>
      <Chart type="bar" data={combinedData} options={options} />
    </div>
  );
};

export default ElderlyChart;
