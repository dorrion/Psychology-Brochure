import Image from 'next/image';

export const Banner1 = () => {
  return (
    <>
      <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative overflow-hidden">
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
            추천 커리큘럼
          </h1>
          <h2 className="text-xl font-light dark:text-slate-800">
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

export const Banner2 = () => {
  return (
    <>
      <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative ">
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
            대학원 준비
          </h1>
          <h2 className="text-xl font-light dark:text-slate-800">
            세부 전공 별 대학원 입시 준비에 대한 정보를 알려드려요
          </h2>
        </div>
        {/* 반응형 위해 줄어들면 이미지는 없어지도록 */}
        <Image
          className="absolute -bottom-6 -right-8 hidden lg:block"
          src="/images/대학원준비.webp"
          width={491}
          height={221}
          alt="대학원 커리큘럼 이미지"
          layout="full"
        />
      </div>
    </>
  );
};

export const Banner3 = () => {
  return (
    <>
      <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative overflow-hidden">
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
            대학원 생활
          </h1>
          <h2 className="text-xl font-light dark:text-slate-800">
            세부 전공 별 대학원 생활에 대한 정보를 알려드려요
          </h2>
        </div>
        {/* 반응형 위해 줄어들면 이미지는 없어지도록 */}
        <Image
          className="absolute -bottom-9 -right-14 hidden lg:block"
          src="/images/대학원생활.webp"
          width={641}
          height={270}
          alt="대학원 커리큘럼 이미지"
          layout="full"
        />
      </div>
    </>
  );
};

export const Banner4 = () => {
  return (
    <>
      <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative overflow-hidden">
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
            전공별 질문
          </h1>
          <h2 className="text-xl font-light dark:text-slate-800">
            세부 전공 별 정보를 알려드려요
          </h2>
        </div>
        {/* 반응형 위해 줄어들면 이미지는 없어지도록 */}
        <Image
          className="absolute -bottom-11 right-14 hidden lg:block"
          src="/images/대학원전공별.webp"
          width={570}
          height={325}
          alt="대학원 커리큘럼 이미지"
          layout="full"
        />
      </div>
    </>
  );
};

export const Banner5 = () => {
  return (
    <>
      <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative overflow-hidden">
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
            자유 발언
          </h1>
          <h2 className="text-xl font-light dark:text-slate-800">
            선배님들의 추가 조언을 전해드려요
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

export const Banner6 = () => {
  return (
    <>
      <div className="w-full h-32 bg-shadowColor rounded-lg flex mb-9 relative">
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
            대학원 입시요강
          </h1>
          <h2 className="text-xl font-light dark:text-slate-800">
            대학별 모집요강을 안내드려요
          </h2>
        </div>
        {/* 반응형 위해 줄어들면 이미지는 없어지도록 */}
        <Image
          className="absolute bottom-0 right-36 hidden lg:block"
          src="/images/대학원입시요강1.webp"
          width={242}
          height={186}
          alt="대학원 커리큘럼 이미지"
          layout="full"
        />
        <Image
          className="absolute -bottom-24 right-4 rotate-30 hidden lg:block"
          src="/images/대학원입시요강2.webp"
          width={242}
          height={186}
          alt="대학원 커리큘럼 이미지"
          layout="full"
        />
        <Image
          className="absolute -bottom-24 right-72 -rotate-45 hidden lg:block"
          src="/images/대학원입시요강2.webp"
          width={242}
          height={186}
          alt="대학원 커리큘럼 이미지"
          layout="full"
        />
      </div>
    </>
  );
};
