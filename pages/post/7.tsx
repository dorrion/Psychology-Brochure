import Head from 'next/head';
import Layout from 'components/layout';
import { EnrolementProps } from 'shared/store/type';
import FiveCard from 'components/Home/5/Five';

export default function index({ data }: any) {
  const Love = data[0]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });

  const Friend = data[1]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });

  const MT = data[2]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });
  return (
    <Layout>
      <PostHead />
      <div className="text-gray-600 body-font max-w-[64rem] mx-auto">
        <section>
          <div className="container py-12 px-5 mx-auto flex-col flexBox ">
            <h1 className="text-6xl font-black text-gray-900 mb-4 text-left">
              심리학과에서 놀기
            </h1>
          </div>
        </section>
        {/* section별로 overflow-y-scroll 추가해서 세로 넘칠 때 넣기 */}
        <section className="bg-secondaryColor">
          <div className="container px-5 py-16 mx-auto flex-col flexBox ">
            <h1 className="text-xl font-semibold mb-8">
              자고로 연애란 말이다🍯
            </h1>
            <div className="overflow-y-auto w-full h-72 flex flex-col flex-wrap items-center p-4">
              {Love}
            </div>
          </div>
        </section>
        <section>
          <div className="container px-5 py-16 mx-auto flex-col flexBox">
            <h1 className="text-xl font-semibold mb-8">
              어떻게 인싸가 될 수 있냐면~ 🍯
            </h1>
            <div className="overflow-y-auto w-full  h-72  flex flex-col flex-wrap items-center p-4 bg-fixed">
              {Friend}
            </div>
          </div>
        </section>
        <section className="bg-shadowColor">
          {/* 스크롤 추가 */}
          <div className="container px-5 py-16 mx-auto flex-col flexBox">
            <h1 className="dark:text-slate-700 text-xl font-semibold mb-8">
              아직 가보지않은 친구들을 위한 MT 즐기기 꿀팁!🍯
            </h1>
            <div className="overflow-y-auto w-full h-72 flex flex-col flex-wrap items-center p-4">
              {MT}
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
  const data = await loadData({ subfolder: 'Home', file: 'Play' });

  return {
    props: {
      data,
    },
  };
}
