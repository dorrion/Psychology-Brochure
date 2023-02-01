import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import { CurriProps } from 'shared/store/type';
import TapWrapper from 'components/Graduate/TapWrapper';
import GraduateHeader from 'components/Graduate/GraduateHeader';
import loadData from 'shared/utils/loadData';

const Tabs = ({ data }: any) => {
  const CurriData = data;
  const TapWrap = CurriData.map((el: CurriProps) => {
    return (
      <TapWrapper
        key={el.id}
        major={el.major}
        freshmen={el.freshmen}
        junior={el.junior}
        sophomore={el.sophomore}
        senior={el.senior}
      />
    );
  });

  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>대학원 추천 커리큘럼</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative overflow-hidden">
            <div className="flex flex-col justify-center ml-8">
              <h1 className="text-xl font-bold mb-2 dark:text-slate-800">
                추천 커리큘럼
              </h1>
              <h2 className="text-base dark:text-slate-800">
                세부 전공 별 추천 이수 과목을 알려드려요
              </h2>
            </div>
            {/* 반응형 위해 줄어들면 이미지는 없어지도록 */}
            <Image
              className="absolute -bottom-14 right-0 hidden lg:block"
              src="/images/대학원커리.webp"
              width={534}
              height={212}
              alt="대학원 커리큘럼 이미지"
              layout="full"
            />
          </div>
          <GraduateHeader />
          {TapWrap}
        </div>
      </section>
    </Layout>
  );
};

export default Tabs;

export async function getStaticProps() {
  const data = await loadData({ subfolder: 'Graduate', file: 'Curricularm' });

  return {
    props: {
      data,
    },
  };
}
