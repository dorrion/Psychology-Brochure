import React, { PureComponent } from 'react';
import { Area, Line, XAxis, YAxis, Tooltip, ComposedChart } from 'recharts';

// name은 월급
// people는 인원수
// per는 퍼센트
const data = [
  {
    name: '100만원미만',
    people: 13,
    per: 1,
  },
  {
    name: '100~200만원',
    people: 134,
    per: 11,
  },
  {
    name: '200~300만원',
    people: 435,
    per: 36,
  },
  {
    name: '300~400만원',
    people: 407,
    per: 34,
  },
  {
    name: '400만원 이상',
    people: 223,
    per: 19,
  },
];

// active : hover 상태 / payload 관련 값 / label 초봉 이름
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div className="bg-white rounded-lg shadow-md p-3">
        <p className="text-xl font-normal">{label}</p>
        <p className="text-4xl font-black">{`${payload[0].payload.per}%`}</p>
      </div>
    );
  }
  return null;
};

export default class AverageSalaryChart extends PureComponent {
  render() {
    return (
      <ComposedChart
        width={1024}
        height={522}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Area
          type="monotone"
          dataKey="people"
          stroke="#8296FF"
          fill={`url(#gradient)`}
        />
        {/* 그라데이션  */}
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8296FF" />
            <stop offset="95%" stopColor="white" />
          </linearGradient>
        </defs>

        {/* 스트로크와 동그라미 */}
        <Line
          type="monotone"
          dataKey="people"
          stroke="#2E4EF9"
          dot={{ r: 4, fill: '#2E4EF9' }}
        />
        <Tooltip content={<CustomTooltip />} />
      </ComposedChart>
    );
  }
}
