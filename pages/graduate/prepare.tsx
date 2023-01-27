import Layout from 'components/layout';
import Head from 'next/head';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';
import Interview from 'components/Graduate/Interview';
import { QnAProps } from 'shared/store/type';
import GraduateHeader from 'components/Graduate/GraduateHeader';

export default function prepare({ GraduatePrepareData }: any) {
  const InterviewList: JSX.Element[] = GraduatePrepareData.map(
    (QnA: QnAProps) => {
      return (
        <Interview key={QnA.id} question={QnA.question} answer={QnA.answer} />
      );
    },
  );

  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>대학원 준비</title>
        <meta name="description" content="대학원 준비과정에 대한 인터뷰" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex-row flex-wrap j w-full mb-20">
          <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative ">
            <div className="flex flex-col justify-center ml-8">
              <h1 className="text-xl font-bold mb-2 dark:text-slate-800">
                대학원 준비
              </h1>
              <h2 className="text-base dark:text-slate-800">
                세부 전공 별 대학원 입시 준비에 대한 정보를 알려드려요
              </h2>
            </div>
            {/* 반응형 위해 줄어들면 이미지는 없어지도록 */}
            <Image
              className="absolute -bottom-6 -right-8 hidden lg:block"
              src="/images/대학원준비.webp"
              width={491}
              height={221}
              alt="대학원 커리큘럼 이미지"
              layout="full"
            />
          </div>
          <GraduateHeader />
          {InterviewList}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // 살아남기 데이터 경로
  const filePath = path.join(process.cwd(), 'data', 'GraduateGeneral.json');
  const GraduatePrepareData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(GraduatePrepareData);

  return {
    props: {
      GraduatePrepareData: await Promise.all(objectData),
    },
  };
}
