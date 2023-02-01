import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import { CurriProps } from 'shared/store/type';
import TapWrapper from 'components/Graduate/TapWrapper';

const CurricularmPage = ({ CurriData }: any) => {
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
      {TapWrap}
    </Layout>
  );
};

export default CurricularmPage;
