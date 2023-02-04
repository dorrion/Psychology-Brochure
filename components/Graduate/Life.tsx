import { MajorProps } from 'shared/store/type';

export default function Interview({ question, answer }: any) {
  const AnswerList: JSX.Element[] = answer.map((ans: any, idx: any) => {
    return (
      <div key={idx} className="flex items-center mt-4">
        <div className={`w-14 h-14 circle bg-interview-${ans.color}`}>
          <div className="text-slate-50 text-lg font-normal">{ans.name}</div>
        </div>
        <p className="text-lg font-extralight ml-6">{ans.content}</p>
      </div>
    );
  });

  return (
    <div className=" flex flex-col text-left mb-40">
      <h1 className="text-2xl font-medium">{question}</h1>
      {AnswerList}
    </div>
  );
}
