import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/layout';
import React, { Suspense } from 'react';
export default function Info() {
  const StatusChart = dynamic(() => import('components/Career/StatusChart'), {
    ssr: false,
  });
  const FirstJobChart = dynamic(
    () => import('components/Career/FirstJobChart'),
    {
      ssr: false,
    },
  );
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
            <Suspense fallback={<div>Loading...</div>}>
              <StatusChart />
              <FirstJobChart />
              
            </Suspense>
          </div>
        </section>
      </Layout>
    </>
  );
}
