import Layout from 'components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Interview from 'components/Graduate/Interview';
import { QnAProps } from 'shared/store/type';
import GraduateHeader from 'components/Graduate/GraduateHeader';

export default function prepare({ GraduatePrepareData }: any) {
  const InterviewList: JSX.Element[] = GraduatePrepareData.map(
    (QnA: QnAProps) => {
      return (
        <Interview key={QnA.id} question={QnA.question} answer={QnA.answer} />
      );
    },
  );

  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>대학원 준비</title>
        <meta name="description" content="대학원 준비과정에 대한 인터뷰" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {InterviewList}
    </Layout>
  );
}
