import Head from 'next/head';
import Layout from 'components/layout';
import Major from 'components/Graduate/Major';
import { MajorProps } from 'shared/store/type';

export default function prepare({ GraduateMajor }: any) {
  const MajorQnAList: JSX.Element[] = GraduateMajor.map((el: MajorProps) => {
    return <Major key={el.id} major={el.major} explain={el.explain} id={0} />;
  });

  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>전공별 질문</title>
        <meta name="description" content="대학원 준비과정에 대한 인터뷰" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {MajorQnAList}
    </Layout>
  );
}
