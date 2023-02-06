import { GlobalProps } from 'shared/store/type';
import Footer from 'components/Abroad/Footer';
import ExTable from '../ExTable';
import ExTabs from '../ExTab';

const ExchangePage = ({ Exchange }: any) => {
  const strength = Exchange[0].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-medium">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-extralight">
              {de}
            </p>
          );
        })}
      </div>
    );
  });
  const feature = Exchange[1].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-medium">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-extralight">
              {de}
            </p>
          );
        })}
      </div>
    );
  });

  const ExProgram = Exchange[2].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-normal">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-extralight">
              {de}
            </p>
          );
        })}
        {el.and &&
          el.and.map((ae, i) => {
            return (
              <p
                key={i}
                className="text-secondaryColor text-lg font-extralight"
              >
                {ae}
              </p>
            );
          })}
      </div>
    );
  });

  const ISFPProgram = Exchange[3].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-normal">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-extralight">
              {de}
            </p>
          );
        })}
        <p className="text-secondaryColor text-lg font-extralight">{el.and}</p>
      </div>
    );
  });

  const TOPEx = Exchange[4].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-normal">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-extralight">
              {de}
            </p>
          );
        })}
      </div>
    );
  });

  const Global = Exchange[5].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-normal">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-extralight">
              {de}
            </p>
          );
        })}
        {el.and &&
          el.and.map((ae, i) => {
            return (
              <p
                key={i}
                className="text-secondaryColor text-lg font-extralight"
              >
                {ae}
              </p>
            );
          })}
      </div>
    );
  });
  const Creator = Exchange[6].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-normal">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-extralight">
              {de}
            </p>
          );
        })}
      </div>
    );
  });

  return (
    <>
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">교환학생 제도 장점</h1>
        {strength}
      </section>
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">교환학생 특징</h1>
        {feature}
      </section>
      <ExTabs
        tabs={[
          {
            id: '0',
            label: '자매대 교환학생 프로그램',
            content: (
              <>
                {ExProgram}
                <h2 className="text-xl font-normal">선발방법 및 시기</h2>
                <h3 className="text-lg font-normal mt-5">선발방법</h3>
                <p className="text-lg font-extralight">
                  1차 서류전형 - 2차 면접전형
                </p>
                <h3 className="text-lg font-normal mt-5">선발시기</h3>
                <ExTable />
              </>
            ),
          },
          {
            id: '1',
            label: 'ISFP 교환학생 프로그램',
            content: <>{ISFPProgram}</>,
          },
        ]}
      />
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">교환학생 장학금</h1>
        <h2 className="text-xl font-medium">
          교환학생 지원 장학금(GLOBAL EXCHANGE SCHOLARSHIP)
        </h2>
        <h2 className="text-xl font-normal text-secondaryColor">
          ※ 교내 장학금 공통 조건: 2022-2학기 재학, 직전학기 12학점 이상 및
          평점평균 2.0 이상, 초과학기(학적유지자) 제외
        </h2>
        <h2 className="text-xl font-normal text-secondaryColor">
          ※ 각종 파견 장학(교내장학, 교외장학)간 중복수혜 불가 (중복지원은 가능)
        </h2>
        <ExTabs
          tabs={[
            {
              id: '0',
              label: 'AJOU TOP Exchange 장학',
              content: <>{TOPEx}</>,
            },
            {
              id: '1',
              label: '글로벌 교환학생 장학',
              content: <>{Global}</>,
            },
            {
              id: '2',
              label: 'Ajou Global Creator 장학',
              content: <>{Creator}</>,
            },
          ]}
        />
      </section>
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">교외 장학금</h1>
        <h2 className="text-xl font-normal text-secondaryColor">
          ※ 각종 파견 장학(교내장학, 교외장학)간 중복수혜 불가 (중복지원은 가능)
        </h2>

        <ExTabs
          tabs={[
            {
              id: '0',
              label: 'AESM-DUO Scholarship',
              content: (
                <>
                  {ExProgram}
                  <h2 className="text-xl font-normal">선발방법 및 시기</h2>
                  <h3 className="text-lg font-normal mt-5">선발방법</h3>
                  <p className="text-lg font-extralight">
                    1차 서류전형 - 2차 면접전형
                  </p>
                  <h3 className="text-lg font-normal mt-5">선발시기</h3>
                  <ExTable />
                </>
              ),
            },
            {
              id: '1',
              label: '미래에셋 장학금',
              content: <>{ISFPProgram}</>,
            },
          ]}
        />
      </section>
      <Footer
        description="글로벌인턴쉽 선발 및 진행 정보, 기업 정보와 선배님들의 후기가 궁금하다면?"
        link="https://www.ajou.ac.kr/oia/outgoing/global-process.do"
      />
    </>
  );
};

export default ExchangePage;
