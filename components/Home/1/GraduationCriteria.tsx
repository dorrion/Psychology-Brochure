import dynamic from 'next/dynamic';
import Summary from './Summary';

export default function GraduationCriteria() {
  const CreditChart = dynamic(() => import('./CreditChart'), {
    ssr: false,
  });
  return (
    <>
      <div className="text-center mb-14">
        <h1 className="text-6xl font-black text-gray-900 mb-4">
          심리학과 졸업하기
        </h1>
        <p className="text-2xl font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          Summary
        </p>
        <p className="text-lg font-light leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          심리학과 졸업요건
        </p>
      </div>
      <Summary />
      <article className="flex-col flexBox text-center mt-24">
        <h1 className="my-8 text-2xl font-black">Detail</h1>
        <CreditChart />
      </article>
      <article className="flex flex-grow flex-wrap sm:-m-4 -mx-4 -mb-10 py-16 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="flex-col">
            <div className="flex justify-center items-center">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0  bg-customBlue "></div>
              <h2 className="text-gray-900 ml-1 text-xl font-bold">
                전공 42학점
              </h2>
            </div>
            <div className=" text-left">
              <h3 className="text-base font-semibold mt-5  mb-1.5">
                전공필수 - 27학점{' '}
              </h3>
              <p className="leading-relaxed text-sm">
                심리학개론, 심리통계와 데이터분석, 심리통계2, 심리학 연구법,
                생리심리학 및 실험, 인지심리학 및 실험, 이상심리학 및 실습,
                사회심리학 및 실험, 조직심리학 및 실습(캡스톤 디자인)
              </p>
              <h3 className="text-base font-semibold mt-5 mb-1.5">전공선택 </h3>
              <p className="leading-relaxed text-sm mb-1.5">
                일반과정(심리학 제 1전공) - 15학점
              </p>
              <p className="leading-relaxed text-sm mb-1.5">
                복수전공 - 15학점
              </p>
              <p className="leading-relaxed text-sm mb-1.5">부전공 - 0학점</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="flex-col">
            <div className="flex justify-center items-center">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0  bg-customGreen  "></div>
              <h2 className="text-gray-900 ml-1 text-xl  font-bold">
                {' '}
                교양필수 32학점
              </h2>
            </div>
            <div className=" text-left">
              <h3 className="text-base font-semibold mt-5 mb-1.5">
                대학필수 - 23학점{' '}
              </h3>
              <p className="leading-relaxed text-sm mb-1.5">아주희망 - 1학점</p>
              <p className="leading-relaxed text-sm mb-1.5">아주인성 - 1학점</p>
              <p className="leading-relaxed text-sm mb-1.5">영어1, 2 - 6학점</p>
              <p className="leading-relaxed text-sm mb-1.5">글쓰기 - 3학점</p>
              <p className="leading-relaxed text-sm mb-1.5">
                영역별 교양 - 12학점
              </p>
              <h3 className="text-base font-semibold mt-5 mb-1.5">
                계열필수 - 3학점{' '}
              </h3>
              <p className="leading-relaxed text-sm mb-1.5">
                데이터분석기초 - 3학점
              </p>
              <h3 className="text-base font-semibold mt-5 mb-1.5">
                학과필수 - 6학점{' '}
              </h3>
              <p className="leading-relaxed text-sm mb-1.5">
                경제원론1/행정학개론/사회학개론/정치학개론
              </p>
              <p className="leading-relaxed text-sm mb-1.5">
                자기주도진로탐색 - 0학점
              </p>
              <p className="leading-relaxed text-base mb-1.5">
                *복수전공 및 부전공은 자신의 제 1전공 기준으로 이수
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="flex-col">
            <div className="flex justify-center items-center">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0  bg-[#FFCC00]   "></div>
              <h2 className="text-gray-900 ml-1 text-xl  font-bold">
                {' '}
                기타 46학점
              </h2>
            </div>
            <div className=" text-left">
              <p className="leading-relaxed text-sm  mt-5">
                필수 이외의 학점은 추가적인 전공선택, 교양선택, 일선과목 등으로
                이수하여 총 졸업 이수학점을 충족하여야 함.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
