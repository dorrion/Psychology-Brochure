import Head from 'next/head';
import { useRouter } from 'next/router';

const GraduateHead = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <Head>
      {query.category === '1' && (
        <>
          <title>대학원 추천 커리큘럼</title>
          <meta
            name="description"
            content="대학원 세부 전공 별 추천 이수 과목을 알려드려요"
          />
          <meta
            name="keywords"
            content="대학원, 임상심리, 상담심리, 사회심리, 응용인지심리, 교육대학원"
          />
          <meta property="og:title" content="대학원 추천 커리큘럼" />
          <meta
            property="og:description"
            content="세부 전공 별 추천 이수 과목을 알려드려요"
          />
        </>
      )}
      {query.category === '2' && (
        <>
          <title>대학원 준비</title>
          <meta
            name="description"
            content="세부 전공 별 대학원 입시 준비에 대한 정보를 알려드려요"
          />
          <meta
            name="keywords"
            content="계기, 준비, 면접, 연구계획서, 컨택, 랩실, 자대, 스터디, 통계"
          />
          <meta property="og:title" content="대학원 준비 방법" />
          <meta
            property="og:description"
            content="세부 전공 별 대학원 입시 준비에 대한 정보를 알려드려요"
          />
        </>
      )}
      {query.category === '3' && (
        <>
          <title>대학원 생활</title>
          <meta
            name="description"
            content="세부 전공 별 대학원 생활에 대한 정보를 알려드려요"
          />
          <meta
            name="keywords"
            content="금전, 논문, 학점, 컨택, 대외활동, 대학원 생활"
          />
          <meta property="og:title" content="대학원 생활" />
          <meta
            property="og:description"
            content="세부 전공 별 대학원 생활에 대한 정보를 알려드려요"
          />
        </>
      )}
      {query.category === '4' && (
        <>
          <title>전공별 질문</title>
          <meta name="description" content="세부 전공 별 정보를 알려드려요." />
          <meta
            name="keywords"
            content="대학원, 임상심리, 상담심리, 사회심리, 응용인지심리, 교육대학원"
          />
          <meta property="og:title" content="전공별 질문" />
          <meta
            property="og:description"
            content="세부 전공 별 대학원 생활에 대한 정보를 알려드려요"
          />
        </>
      )}
      {query.category === '5' && (
        <>
          <title>자유발언</title>
          <meta
            name="description"
            content="선배님들의 추가 조언을 전해드려요"
          />
          <meta name="keywords" content="입시준비, 조언, 도움, 응원" />
          <meta property="og:title" content="자유발언" />
          <meta
            property="og:description"
            content="선배님들의 추가 조언을 전해드려요"
          />
        </>
      )}
      {query.category === '6' && (
        <>
          <title>입시요강</title>
          <meta name="description" content="대학별 모집요강을 안내드려요" />
          <meta name="keywords" content="서울대, 고려대, 연세대, 아주대" />
          <meta property="og:title" content="입시요강" />
          <meta
            property="og:description"
            content="대학별 모집요강을 안내드려요"
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

export default GraduateHead;
