import Head from 'next/head';
import Layout from 'components/layout';
import { EnrolementProps } from 'shared/store/type';

import FiveCard from 'components/Home/5/Five';

export default function index({ data }: any) {
  const Enrole = data[0]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });

  const StudyTip = data[1]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });

  const SearchTip = data[2]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });
  return (
    <Layout>
      <PostHead />
      <div className="max-w-[64rem] mx-auto">
        <section>
          <div className="container py-12 px-5 mx-auto flex-col flexBox ">
            <h1 className="text-6xl font-black text-gray-900 mb-4 text-left">
              심리학과에서 공부하기
            </h1>
          </div>
        </section>
        <section className="text-gray-600 body-font bg-secondaryColor">
          <div className="container px-5 py-12 mx-auto flex-col flexBox ">
            <h1 className="text-xl font-semibold mb-8">
              수강신청 성공하는 꿀팁!🍯
            </h1>
            <div className="overflow-y-auto w-full h-96 flex flex-col flex-wrap items-center p-4 bg-fixed">
              {Enrole}
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto flex-col flexBox ">
            <h1 className="text-xl font-semibold mb-8">학과 공부 꿀팁!🍯</h1>
            <div className="overflow-y-auto w-full h-96 flex flex-col flex-wrap items-center p-4 bg-fixed">
              {StudyTip}
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font bg-shadowColor">
          <div className="container px-5 py-12 mx-auto flex-col flexBox ">
            <h1 className="dark:text-slate-700 text-xl font-semibold mb-8">
              논문 검색 꿀팁!🍯
            </h1>
            <div className="overflow-y-auto w-full h-96 flex flex-col flex-wrap items-center p-4 bg-fixed">
              {SearchTip}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

import loadData from 'shared/utils/loadData';
import PostHead from 'components/Home/PostHead';

export async function getStaticProps() {
  const data = await loadData({ subfolder: 'Home', file: 'Study' });

  return {
    props: {
      data,
    },
  };
}
