import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import { CarrerProps } from 'shared/store/type';
import { CareerInterview } from 'data/Data';
import InterviewWrapper from 'components/Career/InterviewWrapper';

export default function Home() {
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
          {/* 크롭해서 사용하기 때문에 화질 저하 문제 발생하는 것으로 보임. */}
          <Image
            src={'/images/취업.webp'}
            className="lg:h-48 md:h-36 w-full object-cover object-center mb-4"
            alt="picture"
            width={1920}
            height={200}
            priority={true}
          />
          <div className="container px-5 py-24 mx-auto">
            <div className=" mb-36">
              {/* 취업 현황 배너 */}
              <h1 className="text-4xl mb-4 font-bold">취업 현황</h1>
              <div className="w-full max-w-5xl h-64 bg-gray-400 flex-col flex justify-end items-center p-8">
                <h1 className="text-2xl font-bold mb-2 text-slate-100 mb-2.5">
                  취업 관련 정보
                </h1>
                <h2 className="text-base text-slate-100 mb-6">
                  심리학과 취업률, 급여, 취직 분야 통계 자료
                </h2>
                <div className="w-40 h-9 border border-slate-100 flexBox">
                  <h2 className="px-5 text-xs text-slate-100">
                    취업 정보 바로가기
                  </h2>
                </div>
              </div>
            </div>
            <h1 className="text-4xl mb-4 font-bold">취업 인터뷰</h1>
            <p className="mb-8 leading-relaxed text-gray-500">
              심리학과 졸업생들의 취업 이야기. 취업과 관련된 다양한 궁금증을
              물어봤습니다.
            </p>
            <div className="flexBox -m-4">{CarrerList}</div>
          </div>
        </section>
      </Layout>
    </>
  );
}
