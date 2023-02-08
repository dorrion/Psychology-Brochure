import Head from 'next/head';
import Layout from 'components/layout';
import { EnrolementProps } from 'shared/store/type';
import FiveCard from 'components/Home/5/Five';

export default function index({ data }: any) {
  const FreeTalk = data?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });
  return (
    <Layout>
      <PostHead />
      <div className="text-gray-600 body-font max-w-[64rem] mx-auto">
        <section>
          <div className="container py-12 px-5 mx-auto flex-col flexBox ">
            <h1 className="text-5xl font-bold font-sans text-gray-900 mb-4 text-left">
              Free Talk
            </h1>
          </div>
        </section>
        {/* section별로 overflow-y-scroll 추가해서 세로 넘칠 때 넣기 */}
        <section className="bg-secondaryColor">
          <div className="container px-5 py-16 mx-auto flex-col flexBox ">
            <div className="overflow-y-auto w-full h-96 flex flex-col flex-wrap items-center p-4">
              {FreeTalk}
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
  const data = await loadData({ subfolder: 'Home', file: 'FreeTalk' });

  return {
    props: {
      data,
    },
  };
}
