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
          <title>아주대학교 심리학과 요람</title>
          <meta
            name="description"
            content="아주대학교 심리학과 학생들에게 유용한 정보를 소개합니다. 장학금, 비교과, 기숙사 등 다양한 정보를 알아보세요."
          />
          <meta
            name="keywords"
            content="아주대학교, 심리학과, 졸업, 장학금, 메일, 비교과, 공부, 근로, 기숙사, 맛집, 놀기"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="아주대학교 심리학과 요람" />
          <meta
            property="og:description"
            content="아주대학교 심리학과 학생들에게 유용한 정보를 소개합니다."
          />
          <meta
            property="og:image"
            content="/_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=256&q=75 1x, /_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=640&q=75 2x"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/"
          />
          <meta property="og:type" content="website" />
          {/* 구글 사이트 소유권 확인 */}
          <meta
            name="google-site-verification"
            content="fVvEtegr_mRmp8tq8syCT0mePQo_FjAfiSMpSs9MWRU"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="body-font bg-slate-200 dark:bg-slate-800">
          <div className="container px-5 py-12 mx-auto ">
            <div className="flex-col flex-wrap flexBox w-full mb-20">
              <div className="w-full lg:w-1/2 flexBox flex-col mb-6 lg:mb-0 text-center">
                <h1 className="text-6xl font-black mb-1.5 text-gray-900 dark:text-gray-100">
                  심리학과에서 살아남기
                </h1>
                <p className="text-2xl font-light w-full leading-relaxed">
                  아주대학교 심리학과 학생들에게 유용한 정보를 소개합니다.
                </p>
              </div>
            </div>
            {/* 노트북 반응형 */}
            <div className="flex flex-wrap max-w-[64rem] mx-auto -m-4">
              {TipList}
            </div>
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
