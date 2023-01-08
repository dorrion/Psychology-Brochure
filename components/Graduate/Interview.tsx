import { QnAProps } from 'shared/store/type';

export default function Interview({ question, answer }: QnAProps) {
  const AnswerList = answer?.map((ans: any) => {
    return (
      <div className="flex items-center mt-4">
        <div className="circle bg-interview-100"></div>
        <div className="circle bg-interview-200"></div>
        <div className="circle bg-interview-300"></div>
        <div className="circle bg-interview-400"></div>
        <div className="circle bg-interview-500"></div>
        <div className="circle bg-interview-600"></div>
        <div className={`w-14 h-14 circle bg-interview-${ans.color}`}>
          <div className="text-slate-50 text-xs">{ans.name}</div>
        </div>
        <div className="ml-6">{ans.content}</div>
      </div>
    );
  });
  return (
    <div className=" text-left">
      <h1 className="text-xl font-bold">{question}</h1>
      {AnswerList}
    </div>
  );
}
