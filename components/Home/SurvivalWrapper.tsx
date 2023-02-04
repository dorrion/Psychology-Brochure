import { SurvivalProps } from 'shared/store/type';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'components/icon';

export default function SurvivalWrapper({
  tipId,
  title,
  subtitle,
  category,
  homeImg,
}: SurvivalProps) {
  return (
    <>
      {/* 기본적으로 1/2 768px부터 1/3 1024부터 1/4*/}
      <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <div className="h-[285px] dark:bg-slate-700 bg-gray-50 overflow-hidden relative">
          <Link href="/post/[id]" as={`/post/${tipId}`}>
            {homeImg === '/images/홈졸업.webp' ? (
              // The Largest Contentful Paint 해결
              <Image
                src={homeImg!}
                className="h-32 w-full object-cover object-center mb-4"
                alt="picture"
                width={200}
                height={200}
                priority={true}
              />
            ) : (
              <Image
                src={homeImg!}
                className="h-32 w-full object-cover object-center mb-4"
                alt="picture"
                width={200}
                height={200}
              />
            )}
            {/* 반응형 시 보기와의 마진 */}
            <div className="p-4 mb-4 md:mb-8">
              {category && (
                <h2 className="text-sm font-normal text-primaryColor dark:text-secondaryColor">
                  {category}
                </h2>
              )}
              <h1 className="text-2xl font-normal text-gray-900">{title}</h1>
              <p className="hidden sm:block text-base font-light text-gray-600 leading-relaxed mb-3">
                {subtitle}
              </p>
            </div>
            <div className="absolute bottom-4 left-4 flexBox text-base font-extralight text-slate-400 inline-flex items-center md:mb-2 lg:mb-0 ">
              보기
              <ArrowRightIcon />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
