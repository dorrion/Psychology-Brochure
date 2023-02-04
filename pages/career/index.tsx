import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import { CarrerProps } from 'shared/store/type';
import InterviewWrapper from 'components/Career/InterviewWrapper';
import Link from 'next/link';

export default function Home({ data }: any) {
  const CareerInterview = data;
  const CarrerList: JSX.Element[] = CareerInterview.map((tip: CarrerProps) => (
    <InterviewWrapper
      key={tip.tipId}
      tipId={tip.tipId}
      title={tip.title!}
      subtitle={tip.subtitle!}
      carrerImg={tip.carrerImg!}
    />
  ));
  return (
    <>
      <Layout>
        <Head>
          {/* 메타데이터 */}
          <title>심리학과 취업</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font bg-slate-200 dark:bg-slate-800 ">
          {/* 상단 배너 */}
          <Image
            src={'/images/취업.webp'}
            className="lg:h-48 md:h-36 w-full object-cover object-center mb-4"
            alt="picture"
            width={1920}
            height={200}
            priority={true}
          />
          <div className="container px-5 py-24 mx-auto relative">
            <div className="w-2/3 max-w-5xl mb-36">
              {/* 취업 현황 배너 */}
              <h1 className="text-5xl mb-4 font-medium">취업 현황</h1>
              <Image
                src={'/images/취업현황.webp'}
                className="absolute w-full h-64 object-cover object-center mb-4"
                alt="picture"
                width={1920}
                height={200}
                layout="fixed"
              />
              <div className="absolute w-full flex-col flex justify-end items-center">
                {/* 반투명한 검은 배경 */}
                <div className="w-full h-64 bg-gray-900 opacity-50" />
                {/* 흰색 취업 관련 정보 */}
                <div className="absolute h-64 flex-col flex justify-end items-center p-8">
                  <h1 className="text-4xl font-bold mb-2.5 text-slate-100">
                    취업 관련 정보
                  </h1>
                  <h2 className="text-base font-extralight text-slate-100 mb-6">
                    심리학과 취업률, 급여, 취직 분야 통계 자료
                  </h2>
                  {/* 취업 정보 바로 가기 버튼 */}
                  <Link href="/carrer/info">
                    <button
                      className="w-40 h-9 border border-slate-100  flexBox
                   hover:bg-slate-800 hover:scale-110 transition-transform ease-in-out duration-100"
                    >
                      <h2 className="px-5 text-base font-medium text-slate-100">
                        취업 정보 바로가기
                      </h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 취업 인터뷰 */}
          <div className="container px-5 py-24 mx-auto relative">
            <h1 className="text-5xl mb-4 font-medium">취업 인터뷰</h1>
            <p className="mb-8 text-base font-extralight text-gray-500">
              심리학과 졸업생들의 취업 이야기. 취업과 관련된 다양한 궁금증을
              물어봤습니다.
            </p>
            <div className="flex flex-wrap -m-4">{CarrerList}</div>
          </div>
        </section>
      </Layout>
    </>
  );
}

import loadData from 'shared/utils/loadData';

export async function getStaticProps() {
  const data = await loadData({ subfolder: 'Career', file: 'Interview' });

  return {
    props: {
      data,
    },
  };
}
