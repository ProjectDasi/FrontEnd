import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

interface PopulationData {
  Year: string;
  'Total Population': number;
  'Population 65+': number;
  'Aging Index': number;
}

interface PopulationChartProps {
  data: PopulationData[];
}

const PopulationChart: React.FC<PopulationChartProps> = ({ data }) => {
  const years = data.map((d) => d.Year);
  const totalPopulation = data.map((d) => d['Total Population']);
  const population65Plus = data.map((d) => d['Population 65+']);
  const agingIndex = data.map((d) => d['Aging Index']);

  const combinedData = {
    labels: years,
    datasets: [
      {
        label: '전체 인구',
        type: 'bar' as const,
        data: totalPopulation,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        yAxisID: 'y-axis-1',
      },
      {
        label: '65세 이상',
        type: 'bar' as const,
        data: population65Plus,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y-axis-1',
      },
      {
        label: '노령화지수',
        type: 'line' as const,
        data: agingIndex,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
        yAxisID: 'y-axis-2',
      },
    ],
  };

  const options = {
    scales: {
      'y-axis-1': {
        type: 'linear' as const,
        position: 'left' as const,
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return value.toLocaleString();
          },
        },
      },
      'y-axis-2': {
        type: 'linear' as const,
        position: 'right' as const,
        beginAtZero: true,
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
            if (context.dataset.label === 'Aging Index') {
              return `${context.dataset.label}: ${context.raw.toFixed(2)}%`;
            } else {
              return `${context.dataset.label}: ${context.raw.toLocaleString()}`;
            }
          },
        },
      },
    },
  };

  return (
    <div className='w-[67vw] h-[67vh] items-center flex flex-col justify-center'>
      <h2 className='text-2xl font-bold mb-10'>대한민국 전체 인구 및 노인 인구 (2004 - 2024)</h2>
      <Chart type="bar" data={combinedData} options={options} />
    </div>
  );
};

export default PopulationChart;
