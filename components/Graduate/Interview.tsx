import { QnAProps } from 'shared/store/type';

export default function Interview({ question, answer }: QnAProps) {
  const AnswerList = answer?.map((ans, idx: any) => {
    return (
      <div key={idx} className={`flex mt-4 items-center`}>
        {/* <div className="w-14 h-14 circle bg-interview-100" />
        <div className="w-14 h-14 circle bg-interview-200" />
        <div className="w-14 h-14 circle bg-interview-300" />
        <div className="w-14 h-14 circle bg-interview-400" />
        <div className="w-14 h-14 circle bg-interview-500" />
        <div className="w-14 h-14 circle bg-interview-600" /> */}
        <div className={`w-14 h-14 circle bg-interview-${ans.color}`}>
          <div className="text-slate-50 text-xl font-normal">{ans.name}</div>
        </div>
        <div className="text-lg font-extralight ml-6">{ans.content}</div>
      </div>
    );
  });
  return (
    <div className="text-left mb-14">
      <h1 className="text-2xl font-medium">{question}</h1>
      {AnswerList}
    </div>
  );
}
