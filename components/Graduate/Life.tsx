export default function Interview({ question, answer }: any) {
  const AnswerList: JSX.Element[] = answer.map((ans: any, idx: any) => {
    return (
      <div key={idx} className="flex items-center mt-4">
        <div className={`w-10 h-10 circle bg-interview-${ans.color}`}>
          <div
            className={`text-slate-50 font-normal ${
              ans.name.length && ans.name.length > 3
                ? 'text-[0.5rem]'
                : 'text-base'
            }`}
          >
            {ans.name}
          </div>
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
