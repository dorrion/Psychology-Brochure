export default function Interview({ name, color, interview }: any) {
  return interview.map((el: any, idx: any) => {
    return (
      <div key={idx}>
        <h1 className="text-xl sm:text-2xl font-medium mt-10">{el.question}</h1>
        <div className="flex items-center mt-4">
          <div className={`w-10 h-10 circle bg-interview-${color}`}>
            <div className="text-slate-50 text-base font-normal">{name}</div>
          </div>
          <p className="text-lg font-extralight ml-6">{el.answer}</p>
        </div>
      </div>
    );
  });
}
