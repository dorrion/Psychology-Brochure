import React from 'react';
import { Pie, Cell, Legend, Tooltip, PieChart, Label } from 'recharts';

const COLORS = [
  '#20C770',
  '#FFCC00',
  '#2E4EF9',
  '#909090',
  '#C3C3C3',
  '#D9D9D9',
];

const FirstJobChart: React.FC = () => {
  interface PieData {
    name: string;
    value: number;
  }

  const data: PieData[] = [
    { name: '경영 / 사무 / 금융 / 보험직', value: 49.2 },
    { name: '교육 / 법률 / 사회복지 / 경찰 / 소방직 및 군인', value: 23.1 },
    { name: '영업 / 판매 / 운전 / 운송직', value: 12.3 },
    { name: '미용 / 여행 / 숙박 / 음식 / 경비 / 청소직', value: 9.3 },
    { name: '보건 / 의료직', value: 3.1 },
    { name: '농립어업직 / 예술 / 디자인 / 방송 / 스포츠직', value: 3.0 },
  ];

  return (
    <PieChart width={350} height={500}>
      <Pie
        data={data} // 데이터
        cx="50%" // 중심 x
        cy="50%" // 중심 y
        innerRadius={70} // 속 크기
        outerRadius={100} // 겉 크기
        paddingAngle={0} // 영역 사이의 공간
        dataKey="value" // 각 영역에 대한 데이터 필드
        label // 차트 영역에서 value 튀어나오게 함
      >
        {/* 데이터의 Index에 따라 다른 색깔로 채움. */}
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          value="첫 직업 분야"
          position="center"
          fill="#333333"
          fontSize={20}
          fontWeight="bold"
        />
      </Pie>
      {/* hover시 data 나옴 */}
      <Tooltip />
    </PieChart>
  );
};

export default FirstJobChart;
