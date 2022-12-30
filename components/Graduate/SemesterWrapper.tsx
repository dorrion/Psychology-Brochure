import { SubjectType, SemesterType } from 'shared/store/type';

export default function MajorWrapper({ spring, fall }: SemesterType) {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                1학기
              </h2>
              <div className="leading-relaxed mb-8">
                {/* <div>봄 교선{spring?.minorChoice}</div> */}
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
                <div>가을 교선{fall?.minorChoice}</div>
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
  const majorList = majorRequired?.map((el) => {
    return (
      <>
        <div>{el.name}</div>
        <div>{el.engName}</div>
      </>
    );
  });
  return (
    <>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-16 rounded-full bg-yellow-500 flexBox">
          <div className="text-white">전필</div>
        </div>
      </div>
    </>
  );
};
