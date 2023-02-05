import React from 'react';
import { Pie, Cell, Legend, Tooltip, PieChart, Label } from 'recharts';

const COLORS = ['#2E4EF9', '#20C770', '#EDEDED'];

const StatusChart: React.FC = () => {
  interface PieData {
    name: string;
    value: number;
  }

  const data: PieData[] = [
    { name: '진학', value: 20.6 },
    { name: '취업', value: 55.1 },
    { name: '기타', value: 24.3 },
  ];

  return (
    <>
      <PieChart width={350} height={350}>
        <Pie
          data={data} // 데이터
          cx="50%" // 중심 x
          cy="50%" // 중심 y
          innerRadius={80} // 속 크기
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
            value="진로진학 현황"
            position="center"
            fill="#333333"
            fontSize={20}
            fontWeight="bold"
          />
        </Pie>
        {/* 범례 */}
        <Legend />
        {/* hover시 data 나옴 */}
        <Tooltip />
      </PieChart>
    </>
  );
};

export default StatusChart;
