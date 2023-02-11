export default function CompleteSemester() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flexBox flex-col">
          <h1 className="text-4xl font-bold  text-center">이수학기</h1>
          <h2 className="text-xl font-medium">:조기 졸업</h2>
          {/* 원 3개 */}
          <div className="w-full flex flex-wrap justify-center items-center mt-16">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-36 h-36 circle font-black bg-customYellow">
                <h1 className="text-[3.125rem] text-white text-center">6</h1>
                <h1 className="text-xl text-white text-center">학기</h1>
              </div>
              <p className="text-large font-light mt-4  whitespace-pre-line">
                해당 학기를 포함하여 6학기 혹은 7학기를 등록하는 자
              </p>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-36 h-36 circle  bg-customBlue">
                <h1 className="text-4xl text-white font-black text-center">
                  졸업요건 <br />
                  이수
                </h1>
              </div>
              <p className="text-large font-light mt-4 whitespace-pre-line">
                해당 등록 정규학기 수강신청 학점을 포함하여 졸업요건을 모두 갖춘
                자
              </p>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-36 h-36 circle font-black bg-customGreen">
                <h1 className="text-xl text-white">누계평점</h1>
                <h1 className="text-6xl text-white">3.75</h1>
              </div>
              <p className="text-large font-light mt-4  whitespace-pre-line">
                성적 누계평점평균이 3.75인자
              </p>
            </div>
          </div>
          <div className="text-lg mt-8">
            <h3 className="font-medium">3가지 모두 해당일 때 조기 졸업 가능</h3>
            <p className="font-light">
              이 외엔 정규 졸업을 해야한다(8학기 졸업)
            </p>
            <p className="mt-4 font-light">
              즉, 6학기 혹은 7학기를 재학 학생 중에서 졸업학점과 어학 점수를
              채웠으며, 평균 학점이 3.75 이상일 경우 조기 졸업이 가능하다
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
