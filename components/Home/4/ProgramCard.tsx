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
  return (
    <div
      className="flex-col flexBox m-8 w-60 h-80 border-[1px]
     border-shadowColor rounded-2xl text-center p-5"
    >
      <div
        className={
          'w-20 h-20 flex-shrink-0 circle font-bold text-slate-50' +
          (category === '교내장학' ? ' bg-secondaryColor' : ' bg-primaryColor')
        }
      >
        {category}
      </div>
      <h2 className="text-base font-bold mt-5">{name}</h2>
      <h3 className="text-xs mt-1.5">{description}</h3>
      <p className="w-40 h-px bg-shadowColor my-4" />
      <h3 className="text-md font-medium">{area}</h3>
      <h3 className="text-md font-medium">{period}</h3>
    </div>
  );
}
