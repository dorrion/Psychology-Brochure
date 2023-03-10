import Head from 'next/head';
import { useState } from 'react';
import Layout from 'components/layout';

import { ProgramProps } from 'shared/store/type';
import { DownArrow, UpArrow } from 'components/icon';
import ProgramCard from 'components/Home/4/ProgramCard';
import { EnrolementProps } from 'shared/store/type';
import FiveCard from 'components/Home/5/Five';

export default function index({ data }: any) {
  // 강의형
  const [isLectureMoreView, setIsLectureMoreView] = useState<Boolean>(false);
  const onClickMoreViewButton = () => {
    setIsLectureMoreView(!isLectureMoreView);
  };

  // 세미나형
  const [isSeminarMoreView, setIsSeminarMoreView] = useState<Boolean>(false);
  const onClickSeminarMoreViewButton = () => {
    setIsSeminarMoreView(!isSeminarMoreView);
  };

  // 더보기 버튼이 True일 때는 모두 보여주기
  // 더보기 버튼이 False일 때는 3개만 slice 해서 보여주기
  let LectureList = isLectureMoreView ? data[0] : data[0].slice(0, 3);
  let SeminarList = isSeminarMoreView ? data[1] : data[1].slice(0, 3);

  // 강의형
  const lecture = LectureList?.map((el: ProgramProps) => {
    return (
      <ProgramCard
        key={el.name}
        name={el.name}
        description={el.description}
        category={el.category}
        area={el.area}
        period={el.period}
      />
    );
  });
  // 세미나형
  const seminar = SeminarList?.map((el: ProgramProps) => {
    return (
      <ProgramCard
        key={el.name}
        name={el.name}
        description={el.description}
        category={el.category}
        area={el.area}
        period={el.period}
      />
    );
  });
  // 캠프, 연수형
  const camp = data[2]?.map((el: ProgramProps) => {
    return (
      <ProgramCard
        key={el.name}
        name={el.name}
        description={el.description}
        category={el.category}
        area={el.area}
        period={el.period}
      />
    );
  });

  // 파란학기
  const Blue = data[3]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });

  // 대외활동
  const Outside = data[4]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });

  // 토익
  const Toeic = data[5]?.map((el: EnrolementProps) => {
    return <FiveCard key={el.name} name={el.name} tip={el.tip} />;
  });

  interface Tab {
    id?: string;
    label?: string;
    content?: React.ReactNode;
  }

  interface Props {
    tabs: Tab[];
  }

  const Tabs: React.FC<Props> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
      <>
        {/* 탭 나열 */}
        <ul className="flexBox flex-shrink-0 border-gray-200">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              // 프로그램 디자인에 맞춰 크기 변경
              className={`m-4 w-28 h-9 p-4 flexBox text-sm text-center cursor-pointer border-0 rounded-2xl ${
                activeTab === tab.id ? 'text-slate-50 bg-secondaryColor' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="p-6">
          {/* 현재 선택된 탭의 content 삽입 */}
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </>
    );
  };

  return (
    <Layout>
      <PostHead />
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-12 mx-auto flex-col flexBox">
          <h1 className="text-6xl font-black text-gray-900 mb-4 text-center">
            심리학과 비교과 프로그램 하기
          </h1>
          <Tabs
            tabs={[
              {
                id: '0',
                label: '프로그램',
                content: (
                  <div className="flexBox flex-col">
                    <div className="flex-wrap flexBox max-w-[64rem]">
                      {lecture}
                    </div>
                    <button
                      className="flex-col flexBox"
                      onClick={onClickMoreViewButton}
                    >
                      <p className="mb-4 font-base">
                        {isLectureMoreView ? '접기' : '더보기'}
                      </p>
                      {isLectureMoreView ? <UpArrow /> : <DownArrow />}
                    </button>
                    <div className="flex-wrap flexBox max-w-[64rem]">
                      {seminar}
                    </div>
                    <button
                      className="flex-col flexBox"
                      onClick={onClickSeminarMoreViewButton}
                    >
                      <p className="mb-4 font-base">
                        {isSeminarMoreView ? '접기' : '더보기'}
                      </p>
                      {isSeminarMoreView ? <UpArrow /> : <DownArrow />}
                    </button>
                    <div className="flex-wrap flexBox max-w-[64rem]">
                      {camp}
                    </div>
                  </div>
                ),
              },
              {
                id: '1',
                label: '비교과 후기',
                content: (
                  <div className="text-gray-600 body-font max-w-[64rem] mx-auto">
                    <section className="bg-secondaryColor">
                      <div className="container px-5 py-16 mx-auto flex-col flexBox ">
                        <h1 className="text-xl font-semibold mb-8">
                          파란학기 관련 꿀팁!🍯
                        </h1>
                        <div className="w-full h-40 flex flex-col flex-wrap items-center p-4">
                          {Blue}
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="container px-5 py-16 mx-auto flex-col flexBox">
                        <h1 className="text-xl font-semibold mb-8">
                          대외활동 꿀팁!🍯
                        </h1>
                        <div className="overflow-y-auto w-full h-72 flex flex-col flex-wrap items-center p-4 bg-fixed">
                          {Outside}
                        </div>
                      </div>
                    </section>
                    <section className="bg-shadowColor">
                      {/* 스크롤 추가 */}
                      <div className="container px-5 py-16 mx-auto flex-col flexBox">
                        <h1 className="dark:text-slate-700 text-xl font-semibold mb-8">
                          토익사관학교 관련 꿀팁!🍯
                        </h1>
                        <div className="overflow-y-auto w-full h-[700px] flex flex-col flex-wrap items-center p-4">
                          {Toeic}
                        </div>
                      </div>
                    </section>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
    </Layout>
  );
}

import loadData from 'shared/utils/loadData';
import PostHead from 'components/Home/PostHead';

export async function getStaticProps() {
  const data = await loadData({ subfolder: 'Home', file: 'Program' });

  return {
    props: {
      data,
    },
  };
}
