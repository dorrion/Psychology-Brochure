import {
  BookIcon,
  ScoreIcon,
  EnglishIcon,
  SemesterIcon,
} from 'components/icon';

export default function Summary() {
  return (
    <div className="w-full flexBox flex-wrap">
      <div className="w-1/2 md:w-1/4 flex text-center">
        <div className="w-12 h-12 circle bg-slate-100 mb-5 flex-shrink-0">
          <BookIcon />
        </div>
        <div className="ml-2">
          <p className="text-sm font-normal">최소 이수 학점</p>
          <div className="flex justify-center items-center">
            <p className="text-2xl font-extrabold">120 </p>
            <p className="text-sm font-normal">학점</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 md:w-1/4 flex text-center">
        <div className="w-12 h-12 circle bg-slate-100 mb-5 flex-shrink-0">
          <ScoreIcon />
        </div>
        <div className="ml-2">
          <p className="text-sm font-normal">최소 평점</p>
          <div className="flex justify-center items-center">
            <p className="text-sm font-normal">평점 </p>
            <p className="text-2xl font-extrabold">2.0 </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 md:w-1/4 flex text-center">
        <div className="w-12 h-12 circle bg-slate-100 mb-5 flex-shrink-0">
          <EnglishIcon />
        </div>
        <div className="ml-2">
          <p className="text-sm font-normal">공인어학점수</p>
          <div className="flex justify-center items-center">
            <p className="text-2xl font-extrabold">730 </p>
            <p className="text-sm font-normal">Toeic</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 md:w-1/4 flex text-center">
        <div className="w-12 h-12 circle bg-slate-100 mb-5 flex-shrink-0">
          <SemesterIcon />
        </div>
        <div className="ml-2">
          <p className="text-sm font-normal">최소 이수 학기</p>
          <div className="flex justify-center items-center">
            <p className="text-2xl font-extrabold">6</p>
            <p className="text-sm font-normal">학기</p>
          </div>
        </div>
      </div>
    </div>
  );
}
