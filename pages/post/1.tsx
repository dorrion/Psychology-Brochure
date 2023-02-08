import Head from 'next/head';
import Layout from 'components/layout';
import GraduationCriteria from 'components/Home/1/GraduationCriteria';
import GPA from 'components/Home/1/GPA';
import English from 'components/Home/1/English';
import CompleteSemester from 'components/Home/1/CompleteSemester';
import PostHead from 'components/Home/PostHead';

export default function index() {
  return (
    <Layout>
      <PostHead />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12  max-w-[64rem]  mx-auto">
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
