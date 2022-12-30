import Donut from 'shared/components/chart/donut';

export default function Ak() {
  return (
    <>
      <h1>심리학과에서 졸업하기</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        아주대학교 심리학과 학생들에게 유용한 정보를 소개합니다.
      </p>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
        <div className="w-56 flexBox">
          <Donut />
        </div>
      </div>

    </>
  );
}
