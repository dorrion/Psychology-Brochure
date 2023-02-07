export const Banner1 = () => {
  return (
    <>
      <div className="w-full h-32 bg-interview-100 rounded-lg flex mb-9 relative min-h-full">
        <div className="flex flex-col justify-center p-6">
          <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
            파란사다리
          </h1>
          <h2 className="text-base font-normal whitespace-pre-wrap dark:text-slate-800">
            취약계층 해외연수 지원 사업으로, 어려운 환경에도 불구하고 자기개발과
            진로개척에 꿈과 열정을 지닌 대학생에게 해외연수 경험을 지원하는 국고
            지원 사업이다.
          </h2>
        </div>
      </div>
    </>
  );
};

export const Banner2 = () => {
  return (
    <div className="w-full h-32 bg-interview-100 rounded-lg flex mb-9 relative min-h-full">
      <div className="flex flex-col justify-center p-6">
        <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
          교환학생
        </h1>
        <h2 className="text-base font-normal whitespace-pre-wrap dark:text-slate-800">
          {`교환학생 프로그램이란 본교와 학술교류협정이 체결된 외국대학 및 기관과 학생을 상호 교환하는 프로그램이다. 아주대학교는 현재 전 세계 약 67개국 326개교 및 4개 기관과 교류협정을 맺고 다양한 프로그램을 진행하고 있다.`}
        </h2>
      </div>
    </div>
  );
};

export const Banner3 = () => {
  return (
    <>
      <div className="w-full h-32 bg-interview-100 rounded-lg flex mb-9 relative ">
        <div className="flex flex-col justify-center p-6">
          <h1 className="text-3xl font-medium mb-2  whitespace-pre dark:text-slate-800">
            복수학위
          </h1>
          <h2 className="text-base font-normal dark:text-slate-800">
            {`본교에서 일정 조건의 학점을 충족하고 (졸업학점의 1/2 이상) 상대교에서 남은 학점을 이수한 후, 양교에서 이수한 학점이 상호 인정되어 양교의 졸업요건을 모두 충족했을 시 본교와 상대교의 2개의 학위(Dual Degree)를 모두 취득하는 프로그램이다.`}
          </h2>
        </div>
      </div>
    </>
  );
};

export const Banner4 = () => {
  return (
    <div className="w-full h-32 bg-interview-100 rounded-lg flex mb-9 relative ">
      <div className="flex flex-col justify-center p-6">
        <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
          단기해외연수
        </h1>
        <h2 className="text-base font-normal dark:text-slate-800">
          {`본교생의 글로벌 역량 강화를 위하여, 
단기파견 프로그램에 선발된 학생들은 방학기간 중 해외 자매대학에서 진행되는 단기국제학교 또는 어학연수 프로그램에 참여한다.`}
        </h2>
      </div>
    </div>
  );
};

export const Banner5 = () => {
  return (
    <div className="w-full h-32 bg-interview-100 rounded-lg flex mb-9 relative min-h-full">
      <div className="flex flex-col justify-center p-6">
        <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
          글로벌인턴쉽
        </h1>
        <h2 className="text-base font-normal dark:text-slate-800">
          {`전 세계 약 20여 개국의 기업에 학생들을 인턴십으로 파견하는 프로그램으로, 현장실습 참여 학생에게는 전공과 관련된 해외산업현장에서 현장 감각을 익히고 진로를 탐색할 수 있는 기회를 제공한다.`}
        </h2>
      </div>
    </div>
  );
};

export const Banner6 = () => {
  return (
    <div className="w-full min-h-full bg-interview-100 rounded-lg flex mb-9 relative">
      <div className="flex flex-col justify-center p-6">
        <h1 className="text-3xl font-medium mb-2 dark:text-slate-800">
          선배님의 조언
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="flex mr-2 mb-2 sm:mb-0">
            <div className="w-10 h-10  mr-2 circle bg-interview-300 text-base text-slate-50">
              익명1
            </div>
            <div>
              <div className="font-normal text-base">
                Sapporo Gakuin University
              </div>
              <div className="font-normal text-base">아주대 단기파견</div>
            </div>
          </div>
          <div className="flex mr-2 mb-2 sm:mb-0">
            <div className="w-10 h-10  mr-2 circle bg-interview-400 text-base text-slate-50">
              익명2
            </div>
            <div>
              <div className="font-normal text-base">
                University of Michigan
              </div>
              <div className="font-normal text-base">파란사다리</div>
            </div>
          </div>
          <div className="flex mr-2">
            <div className="w-10 h-10  mr-2 circle bg-interview-600 text-base text-slate-50">
              익명3
            </div>
            <div className="w-10 h-10  mr-2 circle bg-interview-600 text-base text-slate-50">
              라이언
            </div>
            <div>
              <div className="font-normal text-base">
                Justus-Liebig-Universität Gießen
              </div>
              <div className="font-normal text-base">아주대 파견 교환학생</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
