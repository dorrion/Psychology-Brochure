import Head from 'next/head';
import Layout from 'components/layout';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

export default function Home() {
  const DoughnutChart = () => {
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          data: [20, 30, 50],
          backgroundColor: ['red', 'green', 'blue'],
        },
      ],
    };

    return (
      <div>
        <Doughnut data={data} />
      </div>
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

        <section className="text-gray-600 body-font bg-slate-200 dark:bg-slate-800 ">
          <DoughnutChart />
        </section>
      </Layout>
    </>
  );
}
