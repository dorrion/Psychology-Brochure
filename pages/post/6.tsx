import Head from 'next/head';
import Layout from 'components/layout';
import { Enrolement, Study } from 'data/Data';
import EnrolementCard from 'components/Home/6/EnrolementCard';

export default function index() {
  const Enrole = Enrolement?.map((el) => {
    return <EnrolementCard key={el.name} name={el.name} tip={el.tip} />;
  });

  const StudyTip = Study?.map((el) => {
    return <EnrolementCard key={el.name} name={el.name} tip={el.tip} />;
  });
  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>심리학과에서 공부하기</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font bg-secondaryColor">
        <div className="container px-5 py-24 mx-auto flex-col flexBox ">
          <h1 className="text-xl font-semibold">수강신청 성공하는 꿀팁!🍯</h1>
          <div className="w-full h-96 flex flex-col flex-wrap items-center p-4 bg-fixed">
            {Enrole}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex-col flexBox ">
          <h1 className="text-xl font-semibold">학과 공부 꿀팁!🍯</h1>
          <div className="w-full h-96 flex flex-col flex-wrap items-center p-4 bg-fixed">
            {StudyTip}
          </div>
        </div>
      </section>
    </Layout>
  );
}
