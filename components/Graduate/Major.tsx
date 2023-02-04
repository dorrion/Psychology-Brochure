import { MajorProps } from 'shared/store/type';

export default function Interview({ major, explain }: any) {
  const QuestionList = explain?.map((exp: any, idx: any) => {
    const AnswerList: JSX.Element[] = exp.answer.map((ans: any, idx: any) => {
      return (
        <div key={idx} className="flex items-center mt-5">
          <div className={`w-14 h-14 circle bg-interview-${ans.color}`}>
            <div className="text-slate-50 text-base">{ans.name}</div>
          </div>
          <div className="ml-6 text-lg font-extralight">{ans.content}</div>
        </div>
      );
    });
    return (
      <div key={idx} className="flex flex-col items-start mt-4">
        <h1 className="text-2xl font-medium">{exp.question}</h1>
        {AnswerList}
      </div>
    );
  });

  return (
    <div className=" flex flex-col text-left mb-20">
      <h1 className="text-4xl font-medium">{major}</h1>
      {QuestionList}
    </div>
  );
}
