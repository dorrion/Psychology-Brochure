import { EnglishProps } from 'shared/store/type';

export default function EnglishCard({ english, score }: EnglishProps) {
  const Toefl = () => {
    return (
      <>
        <p className="-my-0.5 text-base font-black text-center">PBT 534</p>
        <p className="-my-0.5 text-base font-black text-center">CBT 200</p>
        <p className="-my-0.5 text-base font-black text-center">IBT 72</p>
      </>
    );
  };

  const Gtelp = () => {
    return (
      <>
        <p className="-my-0.5 text-base font-black text-center">Level 2 67</p>
        <p className="-my-0.5 text-base font-black text-center">Level 3 89</p>
      </>
    );
  };

  return (
    <div className="w-20 h-32 rounded flex-col flexBox bg-slate-200 mr-4">
      <div className="h-10 flexBox">
        <p className="-my-1 text-base font-medium text-center">{english}</p>
      </div>
      <div className="h-0.5 w-10 my-2 bg-slate-300 rounded" />
      {english === 'TOEFL' ? (
        <Toefl />
      ) : english === 'G-TELP' ? (
        <Gtelp />
      ) : (
        <p className="text-2xl font-black text-center">{score}</p>
      )}
    </div>
  );
}
