import Head from 'next/head';
import Layout from 'components/layout';
import GraduationCriteria from 'components/Home/post/GraduationCriteria';
import GPA from 'components/Home/post/GPA';
import English from 'components/Home/post/English';
import CompleteSemester from 'components/Home/post/CompleteSemester';

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
      <GraduationCriteria />
      <div className="bg-gray-200 dark:bg-slate-700">
        <GPA />
      </div>
      <div className="bg-slate-100 dark:bg-slate-700">
        <English />
        <CompleteSemester />
      </div>
    </Layout>
  );
}
