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
