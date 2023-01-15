import GraduateLife from 'data/GraduateLife.json';
import Layout from 'components/layout';
import Head from 'next/head';
import GraduateHeader from 'components/Graduate/GraduateHeader';
import Life from 'components/Graduate/Life';
import { QnAProps } from 'shared/store/type';

export default function main() {
  console.log(GraduateLife);
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
      <section className="text-gray-600 body-font  dark:bg-slate-800">
        <div className="container px-5 py-24 mx-auto flex-row flex-wrap flexBox w-full mb-20">
          <GraduateHeader />
          {GraduateLifeList}
        </div>
      </section>
    </Layout>
  );
}