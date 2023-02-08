import Head from 'next/head';
import { useRouter } from 'next/router';

const CareerHead = () => {
  const router = useRouter();
  const { pathname, query } = router;
  console.log(pathname);

  return (
    <Head>
      {pathname === '/career/info' && (
        <>
          <title>심리학과 취업현황</title>
          <meta
            name="description"
            content="심리학과 취업현황에 대해 알려드려요"
          />
          <meta
            name="keywords"
            content="진로진학 현황, 첫 직업 분야, 평균 초봉, 취업기업군"
          />
          <meta property="og:title" content="심리학과 취업현황" />
          <meta
            property="og:description"
            content="심리학과 취업현황에 대해 알려드려요"
          />
        </>
      )}
      {pathname === '/career' && (
        <>
          <title>아주대 심리학과 취업</title>
          <meta
            name="description"
            content="심리학과 취업 현황과 취업한 선배님 인터뷰를 전해드려요"
          />
          <meta name="keywords" content="취업 현황, 선배, 인터뷰" />
          <meta property="og:title" content="아주대 심리학과 취업" />
          <meta
            property="og:description"
            content="심리학과 취업 현황과 취업한 선배님 인터뷰를 전해드려요"
          />
        </>
      )}
      {pathname === '/career/1' && (
        <>
          <title>공군 장교</title>
          <meta
            name="description"
            content="공군 장교 추천 커리큘럼, 인터뷰를 알려드려요"
          />
          <meta name="keywords" content="공군 장교, 커리큘럼, 인터뷰" />
          <meta property="og:title" content="공군 장교" />
          <meta
            property="og:description"
            content="공군 장교 추천 커리큘럼, 인터뷰를 알려드려요"
          />
        </>
      )}
      {pathname === '/career/2' && (
        <>
          <title>신용분석가</title>
          <meta
            name="description"
            content="신용분석가 추천 커리큘럼, 인터뷰를 알려드려요"
          />
          <meta name="keywords" content="신용분석가, 커리큘럼, 인터뷰" />
          <meta property="og:title" content="신용분석가" />
          <meta
            property="og:description"
            content="신용분석가 추천 커리큘럼, 인터뷰를 알려드려요"
          />
        </>
      )}
      {pathname === '/career/3' && (
        <>
          <title>그래픽스 엔지니어</title>
          <meta
            name="description"
            content="그래픽스 엔지니어 추천 커리큘럼, 인터뷰를 알려드려요"
          />
          <meta name="keywords" content="그래픽스 엔지니어, 커리큘럼, 인터뷰" />
          <meta property="og:title" content="그래픽스 엔지니어" />
          <meta
            property="og:description"
            content="그래픽스 엔지니어 추천 커리큘럼, 인터뷰를 알려드려요"
          />
        </>
      )}

      <meta
        property="og:image"
        content="/_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=256&q=75 1x, /_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=640&q=75 2x"
      />
      <meta
        property="og:url"
        content="https://psychology-brochure.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default CareerHead;
