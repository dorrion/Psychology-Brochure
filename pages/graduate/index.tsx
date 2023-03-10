import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import GraduateTab from 'shared/components/Tab/GraduateTab';
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
import MajorInfo from 'components/Graduate/MajorInfo';
import GraduateHead from 'components/Graduate/GraduateHead';

const Tabs = ({ Curriculum, Prepare, Life, Major, Free }: any) => {
  return (
    <Layout>
      <GraduateHead />
      <section className="text-gray-600 body-font max-w-[64rem] mx-auto">
        <div className="container px-5 mx-auto">
          <GraduateTab
            tabs={[
              {
                id: 1,
                label: '추천 커리큘럼',
                banner: <Banner1 />,
                content: <CurriculumPage Curriculum={Curriculum} />,
              },
              {
                id: 2,
                label: '대학원 준비',
                banner: <Banner2 />,
                content: (
                  <>
                    <MajorInfo />
                    <PreparePage GraduatePrepareData={Prepare} />
                  </>
                ),
              },
              {
                id: 3,
                label: '대학원 생활',
                banner: <Banner3 />,
                content: (
                  <>
                    <MajorInfo />
                    <LifePage GraduateLife={Life} />
                  </>
                ),
              },
              {
                id: 4,
                label: '전공별 질문',
                banner: <Banner4 />,
                content: (
                  <>
                    <MajorInfo /> <MajorPage GraduateMajor={Major} />
                  </>
                ),
              },
              {
                id: 5,
                label: '자유발언',
                banner: <Banner5 />,
                content: <FreePage Free={Free} />,
              },
              {
                id: 6,
                label: '입시요강',
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
