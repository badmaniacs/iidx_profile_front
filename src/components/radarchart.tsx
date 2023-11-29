import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  plugins,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  plugins,
);

interface RadarchartProps {
  radardata: {
    PEAK: string;
    CHORD: string;
    CHARGE: string;
    SOFLAN: string;
    SCRATHCH: string;
    NOTES: string;
  };
}

const Radarchart: React.FC<RadarchartProps> = ({ radardata }) => {
  const data = {
    labels: [
      ['NOTES', radardata.NOTES],
      ['PEAK', radardata.PEAK],
      ['SCRATHCH', radardata.SCRATHCH],
      ['SOF-LAN', radardata.SOFLAN],
      ['CHARGE', radardata.CHARGE],
      ['CHORD', radardata.CHORD],
    ],
    datasets: [
      {
        data: [
          Number(radardata.PEAK),
          Number(radardata.CHORD),
          Number(radardata.NOTES),
          Number(radardata.CHARGE),
          Number(radardata.SOFLAN),
          Number(radardata.SCRATHCH),
        ],
        backgroundColor: 'rgba(255, 255, 0, 0.6)',
        pointRadius: 0,
        fill: true,
      },
    ],
  };
  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgb(30, 30, 30)',
        },
        min: 0,
        max: 200,
        ticks: {
          stepSize: 100,
          suggestedMin: 0,
          suggestedMax: 200,
          display: false,
        },
        grid: {
          color: ['rgb(255,255,255)', 'rgb(0,0,0)'],
          circular: true,
        },
        pointLabels: {
          display: true,
          color: [
            'rgb(255,0,255)',
            'rgb(255,165,0)',
            'rgb(255,0,0)',
            'rgb(153,204,255)',
            'rgb(0,0,255)',
            'rgb(255,255,0)',
          ],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default Radarchart;
