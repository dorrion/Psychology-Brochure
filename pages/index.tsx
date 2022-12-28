import Head from 'next/head';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';
import Layout from '../components/layout';
import Alert from '../components/modal';

export default function Home({ HomeData }: any) {

  return (
    <>
      <Layout>
        <Head>
          {/* 메타데이터 */}
          <title>심리학과 요람</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Alert />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex-col flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-100">
                  심리학과에서 살아남기
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                아주대학교 심리학과 학생들에게 유용한 정보를 소개합니다.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    아주대학교 심리학과 졸업 규정
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    심리학과에서 졸업하기
                  </h2>
                  <span className="tag-category">아티클</span>
                  <span className="tag">이수학점</span>
                  <span className="tag">어학점수</span>
                  <span className="tag">학점</span>
                  <span className="tag">교필</span>
                  <span className="tag">전필/전선</span>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    교내/교외 장학금 모음.zip
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    심리학과에서 장학금 받기
                  </h2>
                  <span className="tag-category">아티클</span>
                  <span className="tag">장학금</span>
                  <span className="tag">기준</span>
                  <span className="tag">전액</span>
                  <span className="tag">생활비성</span>
                  <span className="tag">교외/교내</span>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    교수님 안녕하십니까. 감자학개론 수강생 김감자입니다.
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    심리학과에서 메일 쓰기
                  </h2>
                  <span className="tag-category">아티클</span>
                  <span className="tag">인사말</span>
                  <span className="tag">자기소개</span>
                  <span className="tag">본론</span>
                  <span className="tag">마무리</span>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    우리 학교는 무엇을 지원해 주는가 : 방학 Todo list
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    심리학과에서 비교과 프로그램 하기
                  </h2>
                  <span className="tag-category">아티클</span>
                  <span className="tag">비교과</span>
                  <span className="tag">자격증</span>
                  <span className="tag">대회</span>
                  <span className="tag">스펙</span>
                  <span className="tag">교외활동</span>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    노동하고 먹고 자기
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    심리학과에서 노식주
                  </h2>
                  <span className="tag-category">인터뷰</span>
                  <span className="tag">학교근로</span>
                  <span className="tag">맛집리스트</span>
                  <span className="tag">기숙사</span>
                  <span className="tag">통학</span>
                  <span className="tag">자취</span>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    수강신청, 공부, 논문 검색의 모든 것
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    심리학과에서 공부하기
                  </h2>
                  <span className="tag-category">인터뷰</span>
                  <span className="tag">수강신청</span>
                  <span className="tag">전공공부</span>
                  <span className="tag">논문</span>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    마이쭈 먹을래?
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    심리학과에서 놀기
                  </h2>
                  <span className="tag-category">인터뷰</span>
                  <span className="tag">MT</span>
                  <span className="tag">연애 ❣️️</span>
                  <span className="tag">친구</span>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    아무노래나 일단 틀어 아무거나 신나는 걸로
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Free Talk
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // 살아남기 데이터 경로
  const filePath = path.join(process.cwd(), 'data', 'HomeData.json');
  const HomeData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(HomeData);

  return {
    props: {
      HomeData: await Promise.all(objectData),
    },
  };
}
