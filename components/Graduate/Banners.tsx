import Image from 'next/image';

export const Banner1 = () => {
  return (
    <>
      <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative overflow-hidden">
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-xl font-bold mb-2 dark:text-slate-800">
            추천 커리큘럼
          </h1>
          <h2 className="text-base dark:text-slate-800">
            세부 전공 별 추천 이수 과목을 알려드려요
          </h2>
        </div>
        {/* 반응형 위해 줄어들면 이미지는 없어지도록 */}
        <Image
          className="absolute -bottom-14 right-0 hidden lg:block"
          src="/images/대학원커리.webp"
          width={534}
          height={212}
          alt="대학원 커리큘럼 이미지"
        />
      </div>
    </>
  );
};
