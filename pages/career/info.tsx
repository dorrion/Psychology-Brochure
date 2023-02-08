import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/layout';
import CareerHead from 'components/Career/CareerHead';

export default function Info() {
  const StatusChart = dynamic(() => import('components/Career/StatusChart'), {
    ssr: false,
  });
  const FirstJobChart = dynamic(
    () => import('components/Career/FirstJobChart'),
    {
      ssr: false,
    },
  );

  const AverageSalaryChart = dynamic(
    () => import('components/Career/AverageSalaryChart'),
    {
      ssr: false,
    },
  );
  const EmploymentChart = dynamic(
    () => import('components/Career/EmploymentChart'),
    {
      ssr: false,
    },
  );
  return (
    <>
      <Layout>
        <CareerHead />
        <section className="text-gray-600 body-font max-w-[64rem] mx-auto">
          <div className="container px-5 py-12 mx-auto flexBox flex-col">
            <StatusChart />
            <FirstJobChart />
          </div>
        </section>

        <section className="max-w-[64rem] mx-auto">
          <div className="container px-5 py-12 mx-auto flex-col">
            <h1 className="text-4xl font-black text-left mb-4">평균초봉</h1>
            <AverageSalaryChart />
            <h1 className="text-4xl font-black text-left mt-10 mb-4">
              취업 기업군
            </h1>
            <EmploymentChart />
          </div>
        </section>
      </Layout>
    </>
  );
}
