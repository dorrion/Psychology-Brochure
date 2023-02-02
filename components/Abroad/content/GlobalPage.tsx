import { GlobalProps } from 'shared/store/type';
import Footer from 'components/Abroad/Footer';

const GlobalPage = ({ Global }: any) => {
  console.log(Global);
  const program = Global.map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-base font-medium">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-sm font-light">
              {de}
            </p>
          );
        })}
        {el.and &&
          el.and.map((ae, i) => {
            return (
              <p key={i} className="text-secondaryColor text-sm font-light">
                {ae}
              </p>
            );
          })}
      </div>
    );
  });

  return (
    <>
      <section className="mb-20">{program}</section>
      <Footer
        description="글로벌인턴쉽 선발 및 진행 정보, 기업 정보와 선배님들의 후기가 궁금하다면?"
        link="https://www.ajou.ac.kr/oia/outgoing/global-process.do"
      />
    </>
  );
};

export default GlobalPage;
