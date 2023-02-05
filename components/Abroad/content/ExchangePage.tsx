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
                {' '}
                <ExTable />
              </>
            ),
          },
          {
            id: '1',
            label: 'ISFP 교환학생 프로그램',
            content: <></>,
          },
        ]}
      />

      <Footer
        description="글로벌인턴쉽 선발 및 진행 정보, 기업 정보와 선배님들의 후기가 궁금하다면?"
        link="https://www.ajou.ac.kr/oia/outgoing/global-process.do"
      />
    </>
  );
};

export default ExchangePage;
