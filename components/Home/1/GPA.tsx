export default function GPA() {
  return (
    <>
      <section className="px-5 py-24 flexBox flex-col">
        <h1 className="text-4xl font-black text-center">총 평점 평균</h1>
        <div className="mt-12 w-52 h-52 rounded-full flex-col flexBox flex-shrink-0 drop-shadow-xl bg-customGreen">
          <h1 className="text-[3.125rem] text-white font-black text-center">
            2.0
          </h1>
          <h1 className="text-4xl text-white font-bold text-center">학점</h1>
        </div>
      </section>
    </>
  );
}
