export default function GPA() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flexBox flex-col">
          <h1 className="text-4xl font-bold  text-center">총 평점 평균</h1>
          <div className="mt-16 w-52 h-52 rounded-full flex-col flexBox flex-shrink-0 drop-shadow-xl bg-customGreen">
            <h1 className="text-8xl text-white font-bold text-center">2.0</h1>
            <h1 className="text-3xl text-white font-bold text-center">학점</h1>
          </div>
        </div>
      </section>
    </>
  );
}
