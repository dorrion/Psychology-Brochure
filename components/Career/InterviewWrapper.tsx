import { ArrowRightIcon } from 'components/icon';
import Image from 'next/image';
import Link from 'next/link';
import { CarrerProps } from 'shared/store/type';

export default function InterviewWrapper({
  tipId,
  title,
  subtitle,
  carrerImg,
}: CarrerProps) {
  return (
    <>
      <div className="w-full md:w-1/3 lg:w-1/4 m-4">
        <div className="h-[285px] drop-shadow-xl dark:bg-slate-700 bg-gray-50 overflow-hidden relative">
          <Link href={`/carrer/$[tipId]`} as={`/career/${tipId}`}>
            <Image
              src={carrerImg!}
              className="h-32 w-full object-cover object-center mb-4"
              alt="picture"
              width={232}
              height={140}
            />

            <div className="p-4 mb-4 md:mb-12">
              <h1 className="text-2xl font-normal text-gray-900">{title}</h1>
              <p className="hidden sm:block whitespace-pre-wrap text-base font-extralight text-gray-600 leading-relaxed mb-3">
                {subtitle}
              </p>
            </div>
            <div className="absolute text-base font-extralight bottom-4 left-4 flexBox text-slate-400 inline-flex items-center md:mb-2 lg:mb-0 ">
              보기
              <ArrowRightIcon />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
