import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import AbroadTab from 'shared/components/Tab/AbroadTab';
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from 'components/Abroad/Banners';
import BridgePage from 'components/Abroad/content/BridgePage';
import MultiPage from 'components/Abroad/content/MultiPage';
import ShortPage from 'components/Abroad/content/ShortPage';
import GlobalPage from 'components/Abroad/content/GlobalPage';
import ExchangePage from 'components/Abroad/content/ExchangePage';
import AdvicePage from 'components/Abroad/content/AdvicePage';
import AbroadHead from 'components/Abroad/AbroadHead';

const Tabs = ({ Bridge, Exchange, Multi, Short, Global, Advice }: any) => {
  return (
    <Layout>
      <AbroadHead />
      <section className="text-gray-600 body-font max-w-[64rem] mx-auto">
        <div className="container px-5 mx-auto">
          <AbroadTab
            tabs={[
              {
                id: 1,
                label: '파란사다리',
                banner: <Banner1 />,
                content: <BridgePage Bridge={Bridge} />,
              },
              {
                id: 2,
                label: '교환학생',
                banner: <Banner2 />,
                content: <ExchangePage Exchange={Exchange} />,
              },
              {
                id: 3,
                label: '복수학위',
                banner: <Banner3 />,
                content: <MultiPage Multi={Multi} />,
              },
              {
                id: 4,
                label: '단기해외연수',
                banner: <Banner4 />,
                content: <ShortPage Short={Short} />,
              },
              {
                id: 5,
                label: '글로벌인턴쉽',
                banner: <Banner5 />,
                content: <GlobalPage Global={Global} />,
              },
              {
                id: 6,
                label: '선배님의 조언',
                banner: <Banner6 />,
                content: <AdvicePage Advice={Advice} />,
              },
            ]}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Tabs;

import loadData from 'shared/utils/loadData';

export async function getStaticProps() {
  const Bridge = await loadData({
    subfolder: 'Abroad',
    file: 'Bridge',
  });
  const Exchange = await loadData({
    subfolder: 'Abroad',
    file: 'Exchange',
  });
  const Multi = await loadData({
    subfolder: 'Abroad',
    file: 'Multi',
  });
  const Short = await loadData({
    subfolder: 'Abroad',
    file: 'Short',
  });
  const Global = await loadData({
    subfolder: 'Abroad',
    file: 'Global',
  });
  const Advice = await loadData({
    subfolder: 'Abroad',
    file: 'Advice',
  });

  return {
    props: {
      Bridge,
      Exchange,
      Multi,
      Short,
      Global,
      Advice,
    },
  };
}
