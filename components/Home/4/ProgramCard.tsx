import React from 'react';
import Image from 'next/image';
import { ProgramProps } from 'shared/store/type';

export default function ProgramCard({
  name,
  description,
  category,
  area,
  period,
}: ProgramProps) {
  // category로 분기처리해서 색깔 하나 지정하고 가자
  let color;
  if (category === '강의형') {
    color = 'secondaryColor';
  } else if (category === '세미나형') {
    color = 'primaryColor';
  } else {
    color = 'interview-200';
  }

  return (
    <div
      className="flex-col flex justify-start items-center m-8 w-60 h-80 border-[1px]
     border-shadowColor rounded-2xl text-center p-5 relative"
    >
      <div
        className={
          'mt-9 w-20 h-20 flex-shrink-0 circle text-lg font-black text-slate-50 bg-' +
          color
        }
      >
        {category}
      </div>
      <h2 className="text-xl font-black mt-5">{name}</h2>
      <h3 className="text-lg mt-1.5 whitespace-pre-wrap">{description}</h3>

      {/* 영역, 모집시기는 왼쪽 정렬 */}
      <div className="absolute bottom-4 left-4">
        <div className="flex">
          {/* 이유는 알 수 없지만 이렇게 앞에서 언급해야 색깔이 보이는 에러가 있는 것 같음. */}
          <p className="text-secondaryColor" />
          <p className="text-interview-200" />
          <h3 className={`text-lg text-${color}`}>영역 </h3>
          <h3 className="text-lg">{area}</h3>
        </div>
        <div className="flex">
          <h3 className={`text-lg text-${color}`}>모집시기 </h3>
          <h3 className="text-lg">{period}</h3>
        </div>
      </div>
    </div>
  );
}
