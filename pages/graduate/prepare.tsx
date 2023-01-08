import Layout from 'components/layout';
import Head from 'next/head';
import { promises as fs } from 'fs';
import path from 'path';
import Interview from 'components/Graduate/Interview';
import { QnAProps } from 'shared/store/type';

export default function prepare({ GraduatePrepareData }: any) {
  const InterviewList: JSX.Element[] = GraduatePrepareData.map(
    (QnA: QnAProps) => {
      return (
        <>
          <Interview key={QnA.id} question={QnA.question} answer={QnA.answer} />
        </>
      );
    },
  );

  console.log(InterviewList);
  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>대학원 준비</title>
        <meta name="description" content="대학원 준비과정에 대한 인터뷰" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font bg-slate-200 dark:bg-slate-800">
        <div className="container px-5 py-24 mx-auto flex-row flex-wrap flexBox w-full mb-20">
          {InterviewList}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // 살아남기 데이터 경로
  const filePath = path.join(process.cwd(), 'data', 'GraduateGeneral.json');
  const GraduatePrepareData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(GraduatePrepareData);

  return {
    props: {
      GraduatePrepareData: await Promise.all(objectData),
    },
  };
}
