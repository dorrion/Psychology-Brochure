import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// 인원는 퍼센트
// name은 월급
const data = [
  {
    name: '100만원미만',
    인원: 13,
    percent: 0.01,
  },
  {
    name: '100~200만원',
    인원: 134,
    percent: 0.11,
  },
  {
    name: '200~300만원',
    인원: 435,
    percent: 0.36,
  },
  {
    name: '300~400만원',
    인원: 407,
    percent: 0.34,
  },
  {
    name: '400만원 이상',
    인원: 223,
    percent: 0.19,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <AreaChart
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="인원" />
        <Tooltip />
        <Area type="monotone" dataKey="인원" stroke="#8296FF" fill="#8296FF" />
      </AreaChart>
    );
  }
}
