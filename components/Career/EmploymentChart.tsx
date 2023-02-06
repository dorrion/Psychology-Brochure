import React, { PureComponent } from 'react';
import {
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '대기업',
    uv: 271,
  },
  {
    name: '중견기업',
    uv: 168,
  },
  {
    name: '중소기업',
    uv: 374,
  },
  {
    name: '국가 및 지방자치 단체',
    uv: 138,
  },
  {
    name: '공공기관 및 공기업',
    uv: 74,
  },
  {
    name: '비영리법인',
    uv: 187,
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
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
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
        </ResponsiveContainer>
      </div>
    );
  }
}
