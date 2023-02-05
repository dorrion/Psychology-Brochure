import Head from 'next/head';
import Layout from 'components/layout';
import Image from 'next/image';

export default function Home({ data }: any) {
  return (
    <>
      <Layout>
        <Head>
          {/* 메타데이터 */}
          <title>공군 장교</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font">
          {/* 프로필 */}
          <div className="container py-12 mx-auto flex flexBox">
            <Image
              className="w-60 h-60 circle"
              src="/images/취업공군프로필.webp"
              width={250}
              height={250}
              alt="대학원 커리큘럼 이미지"
            />
            {/* 소개란 */}
            <div className="ml-12">
              <h2 className="text-2xl font-light">
                "대한민국 영공을 수호하는 강력한 힘"
              </h2>

              <h1 className="text-5xl font-black mb-5">참새</h1>
              <div className="flex">
                <p className="text-base font-extrabold">직업군</p>
                <p className="text-base font-extralight ml-3.5">
                  교육/법률/사회복지/경찰/소방직 및 군인
                </p>
              </div>
              <div className="flex">
                <p className="text-base font-extrabold">직업명</p>
                <p className="text-base font-extralight ml-3.5">공군 장교</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

import loadData from 'shared/utils/loadData';

export async function getStaticProps() {
  const data = await loadData({ subfolder: 'Career', file: 'Interview' });

  return {
    props: {
      data,
    },
  };
}
