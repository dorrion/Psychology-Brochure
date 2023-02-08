import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import Ing from 'public/images/제작중.webp';

function PageNotFound() {
  return (
    <Layout>
      <Head>
        <title>공사중!!!</title>
        <meta name="description" content="잘못된 경로입니다!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flexBox flex-col">
            <div className="w-[35rem] h-[35rem] inline-flex items-center justify-center rounded-full bg-slate-100 mb-5 flex-shrink-0">
              <Image src={Ing} alt="제작 중입니다" width={500} height={500} />
            </div>
            <h1 className="sm:text-5xl text-2xl font-bold  mb-4 text-gray-900">
              공사 중입니다! 돌아가주세요!
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default PageNotFound;
