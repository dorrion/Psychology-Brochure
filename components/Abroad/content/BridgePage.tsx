import { BridgeProps } from 'shared/store/type';
import Footer from 'components/Abroad/Footer';

const BridgePage = ({ Bridge }: any) => {
  const feature = Bridge[0].map((el: BridgeProps, idx: number) => {
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
  const university = Bridge[1].map((el: BridgeProps, idx: number) => {
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
      {/* 파란사다리 특징 */}
      <section>
        <h1 className="text-2xl font-medium mb-5">파란사다리 특징</h1>
        {feature}
      </section>
      <section>
        {/* 파란사다리 파견대학 */}
        <h1 className="text-xl font-normal mb-5">파란사다리 파견대학</h1>
        {university}
      </section>
      <Footer
        description="파란 사다리 선발 및 진행 정보와 선배님들의 후기가 궁금하다면?"
        link="https://www.ajou.ac.kr/oia/outgoing/paran-process.do"
      />
    </>
  );
};

export default BridgePage;
