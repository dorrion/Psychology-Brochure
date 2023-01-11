import Layout from 'components/layout';
import Head from 'next/head';
import { promises as fs } from 'fs';
import path from 'path';
import Life from 'components/Graduate/Life';
import { MajorProps } from 'shared/store/type';
import GraduateHeader from 'components/Graduate/GraduateHeader';

export default function prepare({ GraduateMajorData }: any) {
  const MajorQnAList: JSX.Element[] = GraduateMajorData.map(
    (el: MajorProps) => {
      return <Life key={el.id} major={el.major} explain={el.explain} id={0} />;
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

export async function getStaticProps() {
  // 살아남기 데이터 경로
  const filePath = path.join(process.cwd(), 'data', 'GraduateMajor.json');
  const GraduateMajorData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(GraduateMajorData);

  return {
    props: {
      GraduateMajorData: await Promise.all(objectData),
    },
  };
}
