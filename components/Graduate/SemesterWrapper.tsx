import { SubjectType, SemesterType } from 'shared/store/type';
import { BulbIcon } from 'components/icon';

export default function MajorWrapper({ spring, fall }: SemesterType) {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h2 className="sm:text-5xl text-2xl font-medium text-gray-900 mt-4 mb-4">
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
              <h2 className="sm:text-5xl text-2xl font-medium text-gray-900 mt-4 mb-4">
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
  const majorRQList = majorRequired?.map((el, idx) => {
    return (
      <div key={idx} className="flex justify-start items-start mt-6">
        <div className="w-10 h-10 rounded-full flex-shrink-0 bg-primaryColor flexBox">
          <div className="text-base text-slate-100 dark:text-slate-700">
            전필
          </div>
        </div>
        <div className="ml-4 flex-col">
          <p className="text-base font-bold dark:text-slate-200">{el.name}</p>
          <p className="text-sm">{el.engName}</p>
          <p className="text-sm">{el.explain}</p>
        </div>
      </div>
    );
  });
  const majorChList = majorChoice?.map((el, idx) => {
    return (
      <div key={idx} className="flex justify-start items-start mt-6">
        <div className="w-10 h-10 rounded-full flex-shrink-0 bg-secondaryColor flexBox">
          <div className="text-base text-slate-100 dark:text-slate-200 ">
            전선
          </div>
        </div>
        <div className="ml-4 flex-col">
          <p className="text-base font-bold dark:text-slate-200">{el.name}</p>
          <p className="text-sm">{el.engName}</p>
          <p className="text-sm">{el.explain}</p>
          {el.addExplain && (
            <div className="flex mt-4 p-3 bg-gray-200 dark:bg-slate-500">
              <div className="mr-1 text-primaryColor">
                <BulbIcon />
              </div>
              <p className="text-base dark:text-slate-300">{el.addExplain}</p>
            </div>
          )}
        </div>
      </div>
    );
  });
  const minorRQList = minorRequired?.map((el, idx) => {
    return (
      <div key={idx} className="flex justify-start items-start mt-6">
        <div className="flexBox">
          <div className="w-10 h-10 rounded-full flex-shrink-0 bg-[#C9B99D] flexBox">
            <div className="text-base text-slate-100 dark:text-slate-700">
              교필
            </div>
          </div>
          <div className="ml-4 flex-col">
            <p className="text-base font-bold dark:text-slate-200">{el.name}</p>
          </div>
        </div>
      </div>
    );
  });
  const minorChList = minorChoice?.map((el, idx) => {
    return (
      <div key={idx} className="flex justify-start items-start mt-6">
        <div className={el.addExplain ? 'flex' : 'flexBox'}>
          <div className="w-10 h-10 rounded-full flex-shrink-0 bg-[#F2E2C6] flexBox">
            <div className="text-base text-slate-100 dark:text-slate-700">
              교선
            </div>
          </div>
          <div className="ml-4 flex-col">
            <p className="text-base font-bold dark:text-slate-200">{el.name}</p>
            {el.addExplain && (
              <div className="flex mt-4 p-3 bg-gray-200 dark:bg-slate-500">
                <div className="mr-1 text-primaryColor">
                  <BulbIcon />
                </div>
                <p className="text-base dark:text-slate-300">{el.addExplain}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {majorRQList}
      {majorChList}
      {minorRQList}
      {minorChList}
    </>
  );
};
