import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, elements } from 'chart.js';
Chart.register(ArcElement);

export default function donut() {
  return (
    <div className="relative">
      <Doughnut data={expData} />
      <div className="text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        120학점
      </div>
    </div>
  );
}

const expData = {
  labels: ['전공', '교양필수', '기타'],
  datasets: [
    {
      labels: ['전공', '교양필수', '기타'],
      data: [42, 32, 46],
      borderWidth: 1,
      hoverBorderWidth: 3,
      backgroundColor: ['#20C770', '#FFCC00', '#015BFF'],
      fill: false,
      cutout: '70%',
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
