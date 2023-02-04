import Head from 'next/head';
import Layout from 'components/layout';
import SurvivalWrapper from 'components/Home/SurvivalWrapper';
import { SurvivalProps } from 'shared/store/type';

export default function Home({ data }: any) {
  const HomeData = data;
  const TipList: JSX.Element[] = HomeData.map((tip: SurvivalProps) => (
    <SurvivalWrapper
      key={tip.tipId}
      tipId={tip.tipId}
      title={tip.title!}
      subtitle={tip.subtitle!}
      category={tip.category!}
      homeImg={tip.homeImg!}
    />
  ));

  return (
    <>
      <Layout>
        <Head>
          {/* 메타데이터 */}
          <title>심리학과 요람</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font bg-slate-200 dark:bg-slate-800">
          <div className="container px-5 py-24 mx-auto ">
            <div className="flex-col flex-wrap flexBox w-full mb-20">
              <div className="w-full lg:w-1/2 flexBox flex-col mb-6 lg:mb-0 text-center">
                <h1 className="sm:text-4xl text-2xl font-bold title-font mb-1.5 text-gray-900 dark:text-gray-100">
                  심리학과에서 살아남기
                </h1>
                <p className="w-full leading-relaxed font-light text-gray-500">
                  아주대학교 심리학과 학생들에게 유용한 정보를 소개합니다.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">{TipList}</div>
          </div>
        </section>
      </Layout>
    </>
  );
}

import loadData from 'shared/utils/loadData';

export async function getStaticProps() {
  const data = await loadData({ subfolder: 'Home', file: 'HomeData' });

  return {
    props: {
      data,
    },
  };
}
