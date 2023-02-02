import { BridgeProps } from 'shared/store/type';

const BridgePage = ({ Bridge }: any) => {
  const feature = Bridge[0].map((el: BridgeProps, idx: number) => {
    return (
      <>
        <div key={idx} className="mb-5">
          <h2 className="text-base font-medium">{el.head}</h2>
          {el.desc.map((de) => {
            return <p className="text-sm font-light">{de}</p>;
          })}
        </div>
      </>
    );
  });
  const university = Bridge[1].map((el: BridgeProps, idx: number) => {
    return (
      <>
        <div key={idx} className="mb-5">
          <h2 className="text-base font-medium">{el.head}</h2>
          {el.desc.map((de) => {
            return <p className="text-sm font-light">{de}</p>;
          })}
        </div>
      </>
    );
  });
  return (
    <>
      {/* 파란사다리 특징 */}
      <section>
        <h1 className="text-xl font-medium mb-5">파란사다리 특징</h1>
        {feature}
      </section>
      <section>
        {/* 파란사다리 파견대학 */}
        <h1 className="text-xl font-medium mb-5">파란사다리 파견대학</h1>
        {university}
      </section>
    </>
  );
};

export default BridgePage;
