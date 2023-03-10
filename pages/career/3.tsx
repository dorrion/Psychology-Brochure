import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import TapWrapper from 'components/Graduate/TapWrapper';
import { CurriProps, JobQnAProps } from 'shared/store/type';
import JobInterview from 'components/Career/JobInterview';

export default function Home({ WebProgrammer }: any) {
  const WebProgrammerCurri = WebProgrammer[0].map((el: CurriProps) => {
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

  const WebProgrammerInterview = WebProgrammer[1].map((el: JobQnAProps) => (
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
          <div className="container px-5 py-12 mx-auto flex flex-col">
            <section className="flexBox flex-col sm:flex-row">
              <Image
                className="w-60 h-60 circle"
                src="/images/취업그래픽디자인프로필.webp"
                width={250}
                height={250}
                alt="대학원 커리큘럼 이미지"
                priority={true}
              />
              {/* 소개란 */}
              <div className="ml-12 mt-5 sm:mt-0">
                <h2 className="text-2xl font-light">
                  "그동안 해왔던 것들은 배신하지 않는다"
                </h2>

                <h1 className="text-5xl font-black mb-5">익명</h1>
                <div className="flex">
                  <p className="text-base font-extrabold">직업군</p>
                  <p className="text-base font-light ml-3.5">it/웹개발</p>
                </div>
                <div className="flex">
                  <p className="text-base font-extrabold">직업명</p>
                  <p className="text-base font-light ml-3.5">웹개발자</p>
                </div>
              </div>
            </section>
            <section className="mt-40">
              <h1 className="text-5xl font-black">웹 개발자 추천 커리큘럼</h1>
              {WebProgrammerCurri}
            </section>
            <section className="mt-40">
              <h1 className="text-5xl font-black">웹 개발자 취업 이야기</h1>
              {WebProgrammerInterview}
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
  const WebProgrammer = await loadData({
    subfolder: 'Career',
    file: 'WebProgrammer',
  });

  return {
    props: {
      WebProgrammer,
    },
  };
}
