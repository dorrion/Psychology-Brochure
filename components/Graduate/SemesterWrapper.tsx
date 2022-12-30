import { SubjectType, SemesterType } from 'shared/store/type';

export default function MajorWrapper({ spring, fall }: SemesterType) {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                1학기
              </h2>
              <div className="leading-relaxed mb-8">
                <Major
                  majorRequired={spring?.majorRequired!}
                  majorChoice={spring?.majorChoice!}
                  minorRequired={spring?.minorRequired!}
                  minorChoice={spring?.minorChoice!}
                />
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                2학기
              </h2>
              <div className="leading-relaxed mb-8">
                <Major
                  majorRequired={fall?.majorRequired!}
                  majorChoice={fall?.majorChoice!}
                  minorRequired={fall?.minorRequired!}
                  minorChoice={fall?.minorChoice!}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Major = ({
  majorRequired,
  majorChoice,
  minorRequired,
  minorChoice,
}: SubjectType) => {
  const majorList = majorRequired?.map((el, idx) => {
    return (
      <div key={idx} className="flex justify-center items-start mt-6">
        <div className="w-10 h-10 rounded-full flex-shrink-0 bg-primaryColor flexBox">
          <div className="text-xs text-white">전필</div>
        </div>
        <div className="ml-4 flex-col">
          <div className="text-base font-bold">{el.name}</div>
          <div className="text-sm">{el.engName}</div>
          <div className="text-sm">{el.explain}</div>
        </div>
      </div>
    );
  });
  return <>{majorList}</>;
};
