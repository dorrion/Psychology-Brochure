import { MultiProps } from 'shared/store/type';
import Footer from 'components/Abroad/Footer';
import Image from 'next/image';

const MultiPage = ({ Multi }: any) => {
  const feature = Multi.map((el: MultiProps, idx: number) => {
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

  return (
    <>
      {/* 파란사다리 특징 */}
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">복수학위 특징</h1>
        {feature}
      </section>
      <section className="mb-24">
        <h1 className="text-2xl font-medium">미국 2개교 자매대 정보</h1>
        <p className="text-secondaryColor text-lg font-extralight  mb-5">
          ※ 자매대학 정보를 보시려면 아래를 클릭해주세요
        </p>
        <div className="flexBox flex-col sm:flex-row">
          <div>
            <a
              href="https://oia.ajou.ac.kr/oia/outgoing/degree-info.do?mode=view&articleNo=112823&article.offset=0&articleLimit=10"
              target="_blank"
            >
              <div className="w-96 h-28 flexBox hover:border border-secondaryColor rounded-lg">
                <Image
                  src={'/images/복수학위자매대1.webp'}
                  width={50}
                  height={50}
                  alt="복수학위대학"
                />
                <h2 className="ml-2">SUNY-Stony Brook University</h2>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://oia.ajou.ac.kr/oia/outgoing/degree-info.do?mode=view&articleNo=112826&article.offset=0&articleLimit=10"
              target="_blank"
            >
              <div className="w-96 h-28 flexBox hover:border border-secondaryColor rounded-lg">
                <Image
                  src={'/images/복수학위자매대2.webp'}
                  width={50}
                  height={50}
                  alt="복수학위대학"
                />
                <h2 className="ml-2">Illinois Institute of Technology</h2>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer
        description="복수학위 선발 및 진행 정보와 선배님들의 후기가 궁금하다면?"
        link="https://oia.ajou.ac.kr/oia/outgoing/degree-require.do"
      />
    </>
  );
};

export default MultiPage;
