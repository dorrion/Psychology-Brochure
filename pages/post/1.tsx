import Head from 'next/head';
import Layout from 'components/layout';
import GraduationCriteria from 'components/Home/1/GraduationCriteria';
import GPA from 'components/Home/1/GPA';
import English from 'components/Home/1/English';
import CompleteSemester from 'components/Home/1/CompleteSemester';

export default function index() {
  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>졸업</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <GraduationCriteria />
          <div className="bg-gray-200 dark:bg-slate-700">
            <GPA />
          </div>
          <English />
          <CompleteSemester />
        </div>
      </section>
    </Layout>
  );
}
