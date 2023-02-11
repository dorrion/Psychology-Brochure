import Head from 'next/head';
import { useState } from 'react';
import Layout from 'components/layout';
import MoneyCard from 'components/Home/2/MoneyCard';
import { DownArrow, UpArrow } from 'components/icon';
import { MoneyProps } from 'shared/store/type';

export default function index({ data }: any) {
  // 교내 더보기&접기 상태 저장
  const [isSchoolMoreView, setIsSchoolMoreView] = useState<Boolean>(false);
  const onClickMoreViewButton = () => {
    setIsSchoolMoreView(!isSchoolMoreView);
  }; // 클릭시 상태 반전

  // 교외 더보기&접기 상태 저장
  const [isSuburbsMoreView, setIsSuburbsMoreView] = useState<Boolean>(false);
  const onClickSuburbsMoreViewButton = () => {
    setIsSuburbsMoreView(!isSuburbsMoreView);
  }; // 클릭시 상태 반전

  // 더보기 버튼이 True일 때는 모두 보여주기
  // 더보기 버튼이 False일 때는 3개만 slice 해서 보여주기
  let SchoolMoney = isSchoolMoreView ? data[0] : data[0].slice(0, 3);
  let SuburbsMoney = isSuburbsMoreView ? data[1] : data[1].slice(0, 3);

  // 교내 장학
  const school = SchoolMoney?.map((el: MoneyProps) => {
    return (
      <MoneyCard
        key={el.name}
        name={el.name}
        description={el.description}
        category={el.category}
        benefit={el.benefit}
      />
    );
  });
  // 교외 장학
  const suburbs = SuburbsMoney?.map((el: MoneyProps) => {
    return (
      <MoneyCard
        key={el.name}
        name={el.name}
        description={el.description}
        category={el.category}
        benefit={el.benefit}
      />
    );
  });

  return (
    <Layout>
      <PostHead />
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-12  max-w-[64rem]  mx-auto flex-col flexBox">
          <h1 className="text-6xl font-black text-gray-900 mb-4">
            심리학과에서 장학금 받기
          </h1>
          <div className="flexBox flex-wrap max-w-[64rem] mx-auto">
            {school}
          </div>
          <button className="flex-col flexBox" onClick={onClickMoreViewButton}>
            <p className="mb-4 font-base">
              {isSchoolMoreView ? '접기' : '더보기'}
            </p>
            {isSchoolMoreView ? <UpArrow /> : <DownArrow />}
          </button>
          <div className="flexBox flex-wrap max-w-[64rem] mx-auto">
            {suburbs}
          </div>
          <button
            className="flex-col flexBox"
            onClick={onClickSuburbsMoreViewButton}
          >
            <p className="mb-4 font-base">
              {isSuburbsMoreView ? '접기' : '더보기'}
            </p>
            {isSuburbsMoreView ? <UpArrow /> : <DownArrow />}
          </button>
        </div>
      </section>
    </Layout>
  );
}

import loadData from 'shared/utils/loadData';
import PostHead from 'components/Home/PostHead';

export async function getStaticProps() {
  const data = await loadData({ subfolder: 'Home', file: 'Money' });

  return {
    props: {
      data,
    },
  };
}
