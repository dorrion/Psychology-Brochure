import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

export default function donut() {
  return (
    <>
      <Doughnut data={expData} options={options} />
    </>
  );
}

const expData = {
  labels: ['전공', '교양필수', '기타'],
  datasets: [
    {
      labels: ['전공', '교양필수', '기타'],
      data: [42, 32, 46],
      borderWidth: 2,
      hoverBorderWidth: 3,
      backgroundColor: ['#20C770', '#FFCC00', '#015BFF'],
      fill: true,
    },
  ],
};

const options = {
  //fasle :  상위 div에 구속
  // maintainAspectRatio: false,
};
