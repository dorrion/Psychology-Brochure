import Layout from 'components/layout';
import Head from 'next/head';
import Image from 'next/image';
import GraduateHeader from 'components/Graduate/GraduateHeader';
import Life from 'components/Graduate/Life';
import { QnAProps } from 'shared/store/type';

export default function main({ GraduateLife }: any) {
  const GraduateLifeList: JSX.Element[] = GraduateLife.map((el: QnAProps) => (
    <Life key={el.id} question={el.question} answer={el.answer} />
  ));
  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>대학원 생활</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {GraduateLifeList}
    </Layout>
  );
}