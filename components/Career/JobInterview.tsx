export default function Interview({ name, color, interview }: any) {
  return interview.map((el: any, idx: any) => {
    return (
      <>
        <h1 className="text-2xl font-medium mt-10">{el.question}</h1>
        <div key={idx} className="flex items-center mt-4">
          <div className={`w-14 h-14 circle bg-interview-${color}`}>
            <div className="text-slate-50 text-lg font-normal">{name}</div>
          </div>
          <p className="text-lg font-extralight ml-6">{el.answer}</p>
        </div>
      </>
    );
  });
}