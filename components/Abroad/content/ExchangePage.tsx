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
            <p key={i} className="text-lg font-light">
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
            <p key={i} className="text-lg font-light">
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
            <p key={i} className="text-lg font-light">
              {de}
            </p>
          );
        })}
        {el.and &&
          el.and.map((ae, i) => {
            return (
              <p key={i} className="text-secondaryColor text-lg font-light">
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
            <p key={i} className="text-lg font-light">
              {de}
            </p>
          );
        })}
        <p className="text-secondaryColor text-lg font-light">{el.and}</p>
      </div>
    );
  });

  const TOPEx = Exchange[4].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-normal">{el.head}</h2>
        {el.desc.map((de, i) => {
          return (
            <p key={i} className="text-lg font-light">
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
            <p key={i} className="text-lg font-light">
              {de}
            </p>
          );
        })}
        {el.and &&
          el.and.map((ae, i) => {
            return (
              <p key={i} className="text-secondaryColor text-lg font-light">
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
            <p key={i} className="text-lg font-light">
              {de}
            </p>
          );
        })}
      </div>
    );
  });

  const Duo = Exchange[7].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-normal">{el.head}</h2>
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
  const Mirae = Exchange[8].map((el: GlobalProps, idx: number) => {
    return (
      <div key={idx} className="mb-5">
        <h2 className="text-xl font-normal">{el.head}</h2>
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
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">???????????? ?????? ??????</h1>
        {strength}
      </section>
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">???????????? ??????</h1>
        {feature}
      </section>
      <ExTabs
        tabs={[
          {
            id: '0',
            label: '????????? ???????????? ????????????',
            content: (
              <>
                {ExProgram}
                <h2 className="text-xl font-normal">???????????? ??? ??????</h2>
                <h3 className="text-lg font-normal mt-5">????????????</h3>
                <p className="text-lg font-light">
                  1??? ???????????? - 2??? ????????????
                </p>
                <h3 className="text-lg font-normal mt-5">????????????</h3>
                <ExTable />
              </>
            ),
          },
          {
            id: '1',
            label: 'ISFP ???????????? ????????????',
            content: <>{ISFPProgram}</>,
          },
        ]}
      />
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">???????????? ?????????</h1>
        <h2 className="text-xl font-medium">
          ???????????? ?????? ?????????(GLOBAL EXCHANGE SCHOLARSHIP)
        </h2>
        <h2 className="text-xl font-normal text-secondaryColor">
          ??? ?????? ????????? ?????? ??????: 2022-2?????? ??????, ???????????? 12?????? ?????? ???
          ???????????? 2.0 ??????, ????????????(???????????????) ??????
        </h2>
        <h2 className="text-xl font-normal text-secondaryColor">
          ??? ?????? ?????? ??????(????????????, ????????????)??? ???????????? ?????? (??????????????? ??????)
        </h2>
        <ExTabs
          tabs={[
            {
              id: '0',
              label: 'AJOU TOP Exchange ??????',
              content: <>{TOPEx}</>,
            },
            {
              id: '1',
              label: '????????? ???????????? ??????',
              content: <>{Global}</>,
            },
            {
              id: '2',
              label: 'Ajou Global Creator ??????',
              content: <>{Creator}</>,
            },
          ]}
        />
      </section>
      <section className="mb-10">
        <h1 className="text-2xl font-medium mb-5">?????? ?????????</h1>
        <h2 className="text-xl font-normal text-secondaryColor">
          ??? ?????? ?????? ??????(????????????, ????????????)??? ???????????? ?????? (??????????????? ??????)
        </h2>

        <ExTabs
          tabs={[
            {
              id: '0',
              label: 'AESM-DUO Scholarship',
              content: <>{Duo}</>,
            },
            {
              id: '1',
              label: '???????????? ?????????',
              content: <>{Mirae}</>,
            },
          ]}
        />
      </section>
      <Footer
        description="???????????? ?????? ??? ?????? ??????, ????????? ????????? ??????????????? ????????? ????????????????"
        link="https://www.ajou.ac.kr/oia/outgoing/exchange-require.do"
      />
    </>
  );
};

export default ExchangePage;
