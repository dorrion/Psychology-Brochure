import { QnAProps } from 'shared/store/type';

export default function Interview({ question, answer }: QnAProps) {
  const AnswerList = answer?.map((ans, idx: any) => {
    let ansName = ans.name;
    let length = ansName?.length;
    return (
      <div key={idx} className={`flex mt-4 items-center`}>
        {/* <div className="w-14 h-14 circle bg-interview-100" />
        <div className="w-14 h-14 circle bg-interview-200" />
        <div className="w-14 h-14 circle bg-interview-300" />
        <div className="w-14 h-14 circle bg-interview-400" />
        <div className="w-14 h-14 circle bg-interview-500" />
        <div className="w-14 h-14 circle bg-interview-600" /> */}
        <div className={`flexBox w-10 h-10 circle bg-interview-${ans.color}`}>
          <div
            className={`text-slate-50 font-normal ${
              length && length > 3 ? 'text-[0.5rem]' : 'text-base'
            }`}
          >
            {ans.name}
          </div>
        </div>
        <div className="text-lg font-light ml-6">{ans.content}</div>
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
