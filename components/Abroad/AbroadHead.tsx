import Head from 'next/head';
import { useRouter } from 'next/router';

const AbroadHead = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <Head>
      {query.category === '1' && (
        <>
          <title>파란사다리</title>
          <meta
            name="description"
            content="파란사다리의 특징과 파견대학에 대해 알려드려요"
          />
          <meta name="keywords" content="지원대상, 프로그램, 파견대학" />
          <meta property="og:title" content="파란사다리" />
          <meta
            property="og:description"
            content="파란사다리의 특징과 파견대학에 대해 알려드려요"
          />
        </>
      )}
      {query.category === '2' && (
        <>
          <title>교환학생</title>
          <meta
            name="description"
            content="교환학생의 장점, 특징, 장학금에 대해 알려드려요"
          />
          <meta
            name="keywords"
            content="장점, 특징, 유학, 자매대, ISFP, 장학금"
          />
          <meta property="og:title" content="교환학생" />
          <meta
            property="og:description"
            content="교환학생의 장점, 특징, 장학금에 대해 알려드려요"
          />
        </>
      )}
      {query.category === '3' && (
        <>
          <title>복수학위</title>
          <meta
            name="description"
            content="복수학위에 대한 정보를 알려드려요"
          />
          <meta name="keywords" content="복수학위, 자매대 정보, 특징" />
          <meta property="og:title" content="복수학위" />
          <meta
            property="og:description"
            content="복수학위에 대한 정보를 알려드려요"
          />
        </>
      )}
      {query.category === '4' && (
        <>
          <title>단기 해외연수</title>
          <meta
            name="description"
            content="단기해외연수 프로그램의 종류, 연수 기간, 비용, 지원방법 및 절차 알려드려요"
          />
          <meta
            name="keywords"
            content="프로그램 종류, 연수 기간, 비용, 지원방법 및 절차"
          />
          <meta property="og:title" content="단기 해외연수" />
          <meta
            property="og:description"
            content="단기해외연수 프로그램의 종류, 연수 기간, 비용, 지원방법 및 절차 알려드려요"
          />
        </>
      )}
      {query.category === '5' && (
        <>
          <title>글로벌 인턴쉽</title>
          <meta
            name="description"
            content="글로벌 인턴쉽의 지원자격, 파견기간, 국가 및 기업 등을 알려드려요"
          />
          <meta
            name="keywords"
            content="글로벌 인턴쉽, 지원자격, 파견기간, 국가 및 기업"
          />
          <meta property="og:title" content="글로벌 인턴쉽" />
          <meta
            property="og:description"
            content="글로벌 인턴쉽의 지원자격, 파견기간, 국가 및 기업 등을 알려드려요"
          />
        </>
      )}
      {query.category === '6' && (
        <>
          <title>선배님의 조언</title>
          <meta
            name="description"
            content="단기파견, 파란사다리, 교환학생 프로그램을 경험하신 선배들의 인터뷰입니다"
          />
          <meta name="keywords" content="단기파견, 파란사다리, 교환학생" />
          <meta property="og:title" content="선배님의 조언" />
          <meta
            property="og:description"
            content="단기파견, 파란사다리, 교환학생 프로그램을 경험하신 선배들의 인터뷰입니다"
          />
        </>
      )}

      <meta
        property="og:image"
        content="/_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=256&q=75 1x, /_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=640&q=75 2x"
      />
      <meta
        property="og:url"
        content="http://localhost:3000/abroad?category=1"
      />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default AbroadHead;
