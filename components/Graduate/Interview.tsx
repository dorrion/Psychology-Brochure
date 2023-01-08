import { QnAProps } from 'shared/store/type';

export default function Interview({ question, answer }: QnAProps) {
  const AnswerList = answer?.map((ans, idx: any) => {
    return (
      <div key={idx} className={`flex mt-4 items-center`}>
        <div className={`w-14 h-14 circle bg-interview-${ans.color}`}>
          <div className="text-slate-50 text-xs">{ans.name}</div>
        </div>
        <div className="ml-6">{ans.content}</div>
      </div>
    );
  });
  return (
    <div className="text-left mb-40">
      <h1 className="text-xl font-bold">{question}</h1>
      {AnswerList}
    </div>
  );
}
