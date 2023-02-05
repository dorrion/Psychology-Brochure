import { EnglishProps } from 'shared/store/type';

export default function EnglishCard({ english, score }: EnglishProps) {
  const Toefl = () => {
    return (
      <>
        <p className="text-lg text-center -my-1.5">
          <span className="font-normal">PBT</span>
          <span className="font-black"> 534</span>
        </p>
        <p className="text-lg text-center -my-1.5">
          <span className="font-normal">CBT</span>
          <span className="font-black"> 200</span>
        </p>
        <p className="text-lg text-center -my-1.5">
          <span className="font-normal">IBT</span>
          <span className="font-black"> 72</span>
        </p>
      </>
    );
  };

  const Gtelp = () => {
    return (
      <>
        <p className="text-lg text-center">
          <span className="font-normal">Level 2</span>
          <span className="font-black"> 67</span>
        </p>
        <p className="text-lg text-center">
          <span className="font-normal">Level 3</span>
          <span className="font-black"> 89</span>
        </p>
      </>
    );
  };

  return (
    <div className="w-20 h-32 rounded flex-col flex flexBox bg-slate-200 m-4 relative">
      <div
        className={`absolute text-xl font-medium text-center ${
          english === 'TOEIC Speaking' ? 'top-3' : 'top-7'
        }`}
      >
        {english}
      </div>
      {/* 선 중앙에 고정 */}
      <div className="absolute h-0.5 w-10 left-5 top-16 bg-slate-300 rounded " />
      <div className="absolute bottom-4">
        {english === 'TOEFL' ? (
          <Toefl />
        ) : english === 'G-TELP' ? (
          <Gtelp />
        ) : (
          <p className="text-3xl font-black text-center">{score}</p>
        )}
      </div>
    </div>
  );
}
