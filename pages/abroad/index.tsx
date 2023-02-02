import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import Tab from 'shared/components/Tab';
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from 'components/Abroad/Banners';
import BridgePage from 'components/Abroad/content/BridgePage';
import PreparePage from 'components/Graduate/content/prepare';
import LifePage from 'components/Graduate/content/life';
import MajorPage from 'components/Graduate/content/major';
import FreePage from 'components/Graduate/content/free';
import GuidePage from 'components/Graduate/content/guide';

const Tabs = ({ Bridge, Prepare, Life, Major, Free }: any) => {
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
          <Tab
            tabs={[
              {
                id: '0',
                label: '파란사다리',
                banner: <Banner1 />,
                content: <BridgePage Bridge={Bridge} />,
              },
              {
                id: '1',
                label: '교환학생',
                banner: <Banner2 />,
                content: <PreparePage GraduatePrepareData={Prepare} />,
              },
              {
                id: '2',
                label: '복수학위',
                banner: <Banner3 />,
                content: <LifePage GraduateLife={Life} />,
              },
              {
                id: '3',
                label: '단기해외연수',
                banner: <Banner4 />,
                content: <MajorPage GraduateMajor={Major} />,
              },
              {
                id: '4',
                label: '글로벌인턴쉽',
                banner: <Banner5 />,
                content: <FreePage Free={Free} />,
              },
              {
                id: '5',
                label: '선배님의 조언',
                banner: <Banner6 />,
                content: <GuidePage />,
              },
            ]}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Tabs;

import loadData from 'shared/utils/loadData';

export async function getStaticProps() {
  const Bridge = await loadData({
    subfolder: 'Abroad',
    file: 'Bridge',
  });

  return {
    props: {
      Bridge,

    },
  };
}
