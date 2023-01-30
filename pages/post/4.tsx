import Head from 'next/head';
import Layout from 'components/layout';
import { Lecture, Seminar, Camp } from 'data/Data';
import ProgramCard from 'components/Home/4/ProgramCard';
import { useState } from 'react';
import { DownArrow, UpArrow } from 'components/icon';

export default function index() {
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

  // 캠프형
  const [isCampMoreView, setIsCampMoreView] = useState<Boolean>(false);
  const onClickCampMoreViewButton = () => {
    setIsCampMoreView(!isCampMoreView);
  };

  // 더보기 버튼이 True일 때는 모두 보여주기
  // 더보기 버튼이 False일 때는 3개만 slice 해서 보여주기
  let LectureList = isLectureMoreView ? Lecture : Lecture.slice(0, 3);
  let SeminarList = isSeminarMoreView ? Seminar : Seminar.slice(0, 3);

  // 강의형
  const lecture = LectureList?.map((el) => {
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
  const seminar = SeminarList?.map((el) => {
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
  const camp = Camp?.map((el) => {
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

  return (
    <Layout>
      <Head>
        {/* 메타데이터 */}
        <title>심리학과에서 비교과하기</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex-col flexBox">
          <div className="flex flex-wrap">{lecture}</div>
          <button className="flex-col flexBox" onClick={onClickMoreViewButton}>
            <p className="mb-4 font-base">
              {isLectureMoreView ? '접기' : '더보기'}
            </p>
            {isLectureMoreView ? <UpArrow /> : <DownArrow />}
          </button>
          <div className="flex flex-wrap">{seminar}</div>
          <button
            className="flex-col flexBox"
            onClick={onClickSeminarMoreViewButton}
          >
            <p className="mb-4 font-base">
              {isSeminarMoreView ? '접기' : '더보기'}
            </p>
            {isSeminarMoreView ? <UpArrow /> : <DownArrow />}
          </button>
          <div className="flex flex-wrap">{camp}</div>
        </div>
      </section>
    </Layout>
  );
}
