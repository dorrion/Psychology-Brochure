import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import GraduateHeader from 'components/Graduate/GraduateHeader';
import Tab from 'shared/components/Tab';
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from 'components/Graduate/Banners';
import CurriculumPage from 'components/Graduate/content/curriculum';
import PreparePage from 'components/Graduate/content/prepare';
import LifePage from 'components/Graduate/content/life';
import MajorPage from 'components/Graduate/content/major';
import FreePage from 'components/Graduate/content/free';
import GuidePage from 'components/Graduate/content/guide';

const Tabs = ({ Curriculum, Prepare, Life, Major, Free }: any) => {
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
          <div className="p-10">
            <Tab
              tabs={[
                {
                  id: '0',
                  label: '추천 커리큘럼',
                  banner: <Banner1 />,
                  content: <CurriculumPage Curriculum={Curriculum} />,
                },
                {
                  id: '1',
                  label: '대학원 준비',
                  banner: <Banner2 />,
                  content: <PreparePage GraduatePrepareData={Prepare} />,
                },
                {
                  id: '2',
                  label: '대학원 생활',
                  banner: <Banner3 />,
                  content: <LifePage GraduateLife={Life} />,
                },
                {
                  id: '3',
                  label: '전공별 질문',
                  banner: <Banner4 />,
                  content: <MajorPage GraduateMajor={Major} />,
                },
                {
                  id: '4',
                  label: '자유발언',
                  banner: <Banner5 />,
                  content: <FreePage Free={Free} />,
                },
                {
                  id: '5',
                  label: '입시요강',
                  banner: <Banner6 />,
                  content: <GuidePage />,
                },
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tabs;

import loadData from 'shared/utils/loadData';

export async function getStaticProps() {
  const Curriculum = await loadData({
    subfolder: 'Graduate',
    file: 'Curriculum',
  });
  const Prepare = await loadData({ subfolder: 'Graduate', file: 'Prepare' });
  const Life = await loadData({ subfolder: 'Graduate', file: 'Life' });
  const Major = await loadData({ subfolder: 'Graduate', file: 'Major' });
  const Free = await loadData({ subfolder: 'Graduate', file: 'Free' });

  return {
    props: {
      Curriculum,
      Prepare,
      Life,
      Major,
      Free,
    },
  };
}
