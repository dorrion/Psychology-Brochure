import React, { PureComponent } from 'react';
import {
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Legend,
  Bar,
} from 'recharts';

const data = [
  {
    name: '대기업',
    인원: 271,
    per: 22,
  },
  {
    name: '중견기업',
    인원: 168,
    per: 14,
  },
  {
    name: '중소기업',
    인원: 374,
    per: 31,
  },
  {
    name: '국가 및 지방자치 단체',
    인원: 138,
    per: 11,
  },
  {
    name: '공공기관 및 공기업',
    인원: 74,
    per: 6,
  },
  {
    name: '비영리법인',
    인원: 187,
    per: 15,
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

export default class EmploymentChart extends PureComponent {
  render() {
    return (
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="인원" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
        {/* <ResponsiveContainer width="100%" height="100%">
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
              dataKey="인원"
              stroke="#8296FF"
              fill={`url(#gradient)`}
            /> */}
        {/* 그라데이션  */}
        {/* <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8296FF" />
                <stop offset="95%" stopColor="white" />
              </linearGradient>
            </defs> */}

        {/* 스트로크와 동그라미 */}
        {/* <Line
              type="monotone"
              dataKey="인원"
              stroke="#2E4EF9"
              dot={{ r: 4, fill: '#2E4EF9' }}
            />
            <Tooltip content={<CustomTooltip />} />
          </ComposedChart>
        </ResponsiveContainer> */}
      </div>
    );
  }
}
