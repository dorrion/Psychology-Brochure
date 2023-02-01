import Head from 'next/head';
import Layout from 'components/layout';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);
import Career from 'data/Career.json';
import { CareerInfo1, CareerInfo2 } from 'data/Data';
import { Line, Pie } from '@ant-design/charts';

export default function Home() {
  const DemoPie = () => {
    const data = [
      {
        type: '진학',
        value: 20.6,
        color: '#2E4EF9',
      },
      {
        type: '취업',
        value: 55.1,
        color: '#20C770',
      },
      {
        type: '자택',
        value: 24.3,
        color: '#EDEDED',
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.64,
      label: {
        type: 'inner',
        offset: '-50%',
        style: {
          textAlign: 'center',
        },
        autoRotate: false,
        content: '{value}',
      },
      statistic: {
        title: {
          offsetY: -4,
        },
        content: {
          offsetY: 4,
          style: {
            fontSize: '25px',
          },
        },
      },
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
        {
          type: 'pie-statistic-active',
        },
      ],
    };
    return <Pie {...config} />;
  };

  const DoughnutChart = () => {
    return (
      <>
        <div className="w-64 h-64 mx-auto relative">
          <h3 className="text-center text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            진로진학
            <br />
            현황
          </h3>
          <Doughnut data={CareerInfo1} />
        </div>
        <div className="mt-20 w-64 h-64 mx-auto relative">
          <h3 className="text-center text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            첫 직업 분야
          </h3>
          <Doughnut data={CareerInfo2} />
        </div>
      </>
    );
  };
  return (
    <>
      <Layout>
        <Head>
          {/* 메타데이터 */}
          <title>심리학과 취업정보</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto flexBox flex-col">
            <DoughnutChart />
            <DemoPie />
          </div>
        </section>
      </Layout>
    </>
  );
}
