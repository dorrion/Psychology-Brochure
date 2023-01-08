import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import Ing from 'public/images/제작중.webp';

function PageNotFound() {
  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>Page Not Found</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flexBox flex-col">
            <div className="w-[35rem] h-[35rem] inline-flex items-center justify-center rounded-full bg-slate-100 mb-5 flex-shrink-0">
              <Image src={Ing} alt="제작 중입니다" width={500} height={500} />
            </div>
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              공사 중입니다! 돌아가주세요!
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default PageNotFound;
