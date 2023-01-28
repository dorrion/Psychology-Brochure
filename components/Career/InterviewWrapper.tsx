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
      <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-4">
        <div className="drop-shadow-xl h-96 dark:bg-slate-700 bg-gray-50 overflow-hidden relative">
          <Link href={`/carrer/$[tipId]`} as={`/career/${tipId}`}>
            <Image
              src={carrerImg!}
              className="h-48 w-full object-cover object-center mb-4"
              alt="picture"
              width={200}
              height={140}
            />

            <div className="p-4 mb-4 md:mb-12">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {title}
              </h1>
              <p className="whitespace-pre text-gray-600 leading-relaxed mb-3">
                {subtitle}
              </p>
            </div>
            <div className="absolute bottom-4 left-4 flexBox text-slate-400 inline-flex items-center md:mb-2 lg:mb-0 ">
              보기
              <ArrowRightIcon />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
