import Layout from 'components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Major from 'components/Graduate/Major';
import { MajorProps } from 'shared/store/type';
import GraduateHeader from 'components/Graduate/GraduateHeader';

export default function prepare({ data }: any) {
  const GraduateMajorData = data;
  const MajorQnAList: JSX.Element[] = GraduateMajorData.map(
    (el: MajorProps) => {
      return <Major key={el.id} major={el.major} explain={el.explain} id={0} />;
    },
  );

  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>전공별 질문</title>
        <meta name="description" content="대학원 준비과정에 대한 인터뷰" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex-row flex-wrap j w-full mb-20">
          <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative overflow-hidden">
            <div className="flex flex-col justify-center ml-8">
              <h1 className="text-xl font-bold mb-2 dark:text-slate-800">
                전공별 질문
              </h1>
              <h2 className="text-base dark:text-slate-800">
                세부 전공 별 정보를 알려드려요
              </h2>
            </div>
            {/* 반응형 위해 줄어들면 이미지는 없어지도록 */}
            <Image
              className="absolute -bottom-11 right-14 hidden lg:block"
              src="/images/대학원전공별.webp"
              width={570}
              height={325}
              alt="대학원 커리큘럼 이미지"
              layout="full"
            />
          </div>
          <GraduateHeader />
          {MajorQnAList}
        </div>
      </section>
    </Layout>
  );
}

import loadData from 'shared/utils/loadData';

export async function getStaticProps() {
  const data = await loadData({ subfolder: 'Graduate', file: 'Major' });

  return {
    props: {
      data,
    },
  };
}
