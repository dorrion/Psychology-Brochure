import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, elements } from 'chart.js';
Chart.register(ArcElement);

export default function donut() {
  return (
    <div className="relative">
      <Doughnut data={expData} />
      <p className="text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        120학점
      </p>
    </div>
  );
}

const expData = {
  labels: ['전공', '교양필수', '기타'],
  datasets: [
    {
      labels: ['전공', '교양필수', '기타'],
      data: [42, 32, 46],
      borderWidth: 0,
      hoverBorderWidth: 3,
      backgroundColor: ['#20C770', '#FFCC00', '#015BFF'],
      fill: false,
      cutout: '75%',
    },
  ],
};

const options = {
  maintainAspectRatio: false, //fasle :  상위 div에 구속
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'adf',
    },
  },
};
