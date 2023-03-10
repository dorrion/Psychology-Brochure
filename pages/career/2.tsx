import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import TapWrapper from 'components/Graduate/TapWrapper';
import { CurriProps, JobQnAProps } from 'shared/store/type';
import JobInterview from 'components/Career/JobInterview';

export default function Home({ Analyst }: any) {
  const AnalystCurri = Analyst[0].map((el: CurriProps) => {
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

  const AnalystInterview = Analyst[1].map((el: JobQnAProps) => (
    <JobInterview
      key={el.id}
      name={el.name}
      color={el.color}
      interview={el.interview}
    />
  ));

  return (
    <>
      <Layout>
        <CareerHead />
        <section className="text-gray-600 body-font max-w-[64rem] mx-auto">
          {/* 프로필 */}
          <div className="container px-5 py-12  mx-auto flex flex-col">
            <section className="flexBox flex-col sm:flex-row">
              <Image
                className="w-60 h-60 circle"
                src="/images/취업신용분석프로필.webp"
                width={250}
                height={250}
                alt="대학원 커리큘럼 이미지"
                priority={true}
              />
              {/* 소개란 */}
              <div className="ml-12 mt-5 sm:mt-0">
                <h2 className="text-2xl font-light">"취업, 자신의 경쟁력"</h2>

                <h1 className="text-5xl font-black mb-5">김별명</h1>
                <div className="flex">
                  <p className="text-base font-extrabold">직업군</p>
                  <p className="text-base font-light ml-3.5">
                    경영/사무/금융/보험직
                  </p>
                </div>
                <div className="flex">
                  <p className="text-base font-extrabold">직업명</p>
                  <p className="text-base font-light ml-3.5">신용분석가</p>
                </div>
              </div>
            </section>
            <section className="mt-40">
              <h1 className="text-5xl font-black">신용분석가 추천 커리큘럼</h1>
              {AnalystCurri}
            </section>
            <section className="mt-40">
              <h1 className="text-5xl font-black">신용분석가 취업 이야기</h1>
              {AnalystInterview}
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
}

import loadData from 'shared/utils/loadData';
import CareerHead from 'components/Career/CareerHead';

export async function getStaticProps() {
  const Analyst = await loadData({
    subfolder: 'Career',
    file: 'Analyst',
  });

  return {
    props: {
      Analyst,
    },
  };
}
