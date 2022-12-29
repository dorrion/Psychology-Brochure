import Head from 'next/head';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';

import Layout from '../components/layout';
import SurvivalWrapper from '../components/Home/SurvivalWrapper';
import { SurvivalProps } from '../shared/types';

export default function Home({ HomeData }: any) {
  const TipList: JSX.Element[] = HomeData.map((tip: SurvivalProps) => (
    <SurvivalWrapper
      key={tip.tipId}
      title={tip.title!}
      subtitle={tip.subtitle!}
      category={tip.category!}
      tag={tip.tag!}
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
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex-col flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-100">
                  심리학과에서 살아남기
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                아주대학교 심리학과 학생들에게 유용한 정보를 소개합니다.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">{TipList}</div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // 살아남기 데이터 경로
  const filePath = path.join(process.cwd(), 'data', 'HomeData.json');
  const HomeData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(HomeData);

  return {
    props: {
      HomeData: await Promise.all(objectData),
    },
  };
}
