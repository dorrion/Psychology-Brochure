import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import TapWrapper from 'components/Graduate/TapWrapper';
import { CurriProps, JobQnAProps } from 'shared/store/type';
import JobInterview from 'components/Career/JobInterview';

export default function Home({ AirForce }: any) {
  const AirForceCurri = AirForce[0].map((el: CurriProps) => {
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

  const AirForceInterview = AirForce[1].map((el: JobQnAProps) => (
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
                src="/images/취업공군프로필.webp"
                width={250}
                height={250}
                alt="대학원 커리큘럼 이미지"
                priority={true}
              />
              {/* 소개란 */}
              <div className="ml-12 mt-5 sm:mt-0">
                <h2 className="text-2xl font-light">
                  "대한민국 영공을 수호하는 강력한 힘"
                </h2>

                <h1 className="text-5xl font-black mb-5">참새</h1>
                <div className="flex">
                  <p className="text-base font-extrabold">직업군</p>
                  <p className="text-base font-light ml-3.5">
                    교육/법률/사회복지/경찰/소방직 및 군인
                  </p>
                </div>
                <div className="flex">
                  <p className="text-base font-extrabold">직업명</p>
                  <p className="text-base font-light ml-3.5">공군 장교</p>
                </div>
              </div>
            </section>
            <section className="mt-40">
              <h1 className="text-5xl font-black">공군 장교 추천 커리큘럼</h1>
              {AirForceCurri}
            </section>
            <section className="mt-40">
              <h1 className="text-5xl font-black">공군 장교 취업 이야기</h1>
              {AirForceInterview}
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
  const AirForce = await loadData({
    subfolder: 'Career',
    file: 'AirForce',
  });

  return {
    props: {
      AirForce,
    },
  };
}
