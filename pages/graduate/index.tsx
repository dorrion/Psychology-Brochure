import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import path from 'path';
import { promises as fs } from 'fs';
import Layout from 'components/layout';
import { Tab } from '@headlessui/react';
import { CurriProps } from 'shared/store/type';
import TapWrapper from 'components/Graduate/TapWrapper';

const Tabs = ({ CurriData }: any) => {
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
        <div className="container px-5 py-24 mx-auto">{TapWrap}</div>
      </section>
    </Layout>
  );
};

export default Tabs;

export async function getStaticProps() {
  // 커리큘럼
  const filePath = path.join(process.cwd(), 'data', 'GraduateCrc.json');
  const CurriData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(CurriData);

  return {
    props: {
      CurriData: await Promise.all(objectData),
    },
  };
}