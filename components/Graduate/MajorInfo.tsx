export default function MajorInfo() {
  return (
    <div className="flex justify-center mb-4">
      <div className="w-10 h-10 mr-2 sm:mr-8 circle flexBox text-slate-50 text-[0.5rem] bg-interview-100">
        아동/
        <br />
        청소년
      </div>
      <div className="w-10 h-10 mr-2 sm:mr-8 circle flexBox text-slate-50 text-[0.5rem] bg-interview-200">
        성인임상
      </div>
      <div className="w-10 h-10 mr-2 sm:mr-8 circle flexBox text-slate-50 text-[0.5rem] bg-interview-300">
        상담
      </div>
      <div className="w-10 h-10 mr-2 sm:mr-8 circle flexBox text-slate-50 text-[0.5rem] bg-interview-400">
        인지
      </div>
      <div className="w-10 h-10 mr-2 sm:mr-8 circle flexBox text-slate-50 text-[0.5rem] bg-interview-500">
        교육
      </div>
      <div className="w-10 h-10 circle flexBox text-slate-50 text-[0.5rem] bg-interview-600">
        사회
      </div>
    </div>
  );
}
