import { MultiProps } from 'shared/store/type';
import Footer from 'components/Abroad/Footer';

const MultiPage = ({ Multi }: any) => {
  const feature = Multi.map((el: MultiProps, idx: number) => {
    return (
      <>
        <div key={idx} className="mb-5">
          <h2 className="text-base font-medium">{el.head}</h2>
          {el.desc.map((de) => {
            return <p className="text-sm font-light">{de}</p>;
          })}
          <p className="text-secondaryColor text-sm font-light">{el.and}</p>
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
      <Footer
        description="복수학위 선발 및 진행 정보와 선배님들의 후기가 궁금하다면?"
        link="https://oia.ajou.ac.kr/oia/outgoing/degree-require.do"
      />
    </>
  );
};

export default MultiPage;
