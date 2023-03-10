import { MultiProps } from 'shared/store/type';
import Footer from 'components/Abroad/Footer';

const ShortPage = ({ Short }: any) => {
  const program = Short[0].map((el: MultiProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-medium">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-light">
              {de}
            </p>
          );
        })}
        <p className="text-secondaryColor text-lg font-light">{el.and}</p>
      </div>
    );
  });
  const step = Short[1].map((el: MultiProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-lg font-medium">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-light">
              {de}
            </p>
          );
        })}
        <p className="text-secondaryColor text-lg font-light">{el.and}</p>
      </div>
    );
  });
  return (
    <>
      {/* 단기해외연수 프로그램 소개 */}
      <section>
        <h1 className="text-2xl font-medium mb-5">
          단기해외연수 프로그램 소개
        </h1>
        {program}
      </section>
      <section className="mb-20">
        {/* 단기해외연수 지원방법 및 절차 */}
        <h1 className="text-2xl font-medium mb-5">
          단기해외연수 지원방법 및 절차
        </h1>
        <h1 className="text-xl font-medium">지원 방법</h1>
        {step}
      </section>
      <Footer
        description="단기해외연수 파견대학 정보와 선배님들의 후기가 궁금하다면?"
        link="https://www.ajou.ac.kr/oia/outgoing/short-info.do"
      />
    </>
  );
};

export default ShortPage;
