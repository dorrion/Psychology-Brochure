import Head from 'next/head';
import { useRouter } from 'next/router';

const PostHead = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);

  return (
    <Head>
      {pathname === '/post/1' && (
        <>
          <title>심리학과 졸업하기</title>
          <meta
            name="description"
            content="심리학과 졸업하기 위한 학점, 어학성적, 이수학기를 알려드려요"
          />
          <meta name="keywords" content="학점, 어학성적, 이수학기" />
          <meta property="og:title" content="심리학과 졸업하기" />
          <meta
            property="og:description"
            content="심리학과 졸업하기 위한 학점, 어학성적, 이수학기를 알려드려요"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/post/1"
          />
        </>
      )}
      {pathname === '/post/2' && (
        <>
          <title>심리학과에서 장학금 받기</title>
          <meta
            name="description"
            content="심리학과에서 받을 수 있는 교내, 교외장학을 알려드려요"
          />
          <meta name="keywords" content="교내장학, 교외장학, 장학금" />
          <meta property="og:title" content="심리학과 장학금 받기" />
          <meta
            property="og:description"
            content="심리학과에서 받을 수 있는 교내, 교외장학을 알려드려요"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/post/2"
          />
        </>
      )}
      {pathname === '/post/3' && (
        <>
          <title>심리학과에서 메일 쓰기</title>
          <meta name="description" content="메일 쓰는 꿀팁을 알려드려요" />
          <meta name="keywords" content="메일" />
          <meta property="og:title" content="심리학과 메일 쓰기" />
          <meta
            property="og:description"
            content="메일 쓰는 꿀팁을 알려드려요"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/post/3"
          />
        </>
      )}
      {pathname === '/post/4' && (
        <>
          <title>심리학과 비교과하기</title>
          <meta
            name="description"
            content="아주대학교에서 경험할 수 있는 비교과 프로그램 및 후기를 알려드려요"
          />
          <meta
            name="keywords"
            content="비교과, 강의, 세미나, 연수, 파란학기, 대외활동, 토익사관학교"
          />
          <meta property="og:title" content="심리학과 비교과하기" />
          <meta
            property="og:description"
            content="비교과 프로그램 및 후기를 알려드려요"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/post/4"
          />
        </>
      )}
      {pathname === '/post/5' && (
        <>
          <title>심리학과 노식주</title>
          <meta
            name="description"
            content="심리학과 학우들의 근로, 기숙사, 맛집 리스트를 알려드려요"
          />
          <meta name="keywords" content="근로, 기숙사, 맛집 리스트" />
          <meta property="og:title" content="심리학과 노식주" />
          <meta
            property="og:description"
            content="심리학과 학우들의 근로, 기숙사, 맛집 리스트를 알려드려요"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/post/5"
          />
        </>
      )}
      {pathname === '/post/6' && (
        <>
          <title>심리학과 공부하기</title>
          <meta
            name="description"
            content="심리학과 학우들의 수강신청, 학과공부, 논문 검색을 알려드려요"
          />
          <meta name="keywords" content="수강신청, 학과공부, 논문 검색" />
          <meta property="og:title" content="심리학과 공부하기" />
          <meta
            property="og:description"
            content="심리학과 수강신청, 학과공부, 논문 검색을 알려드려요"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/post/6"
          />
        </>
      )}
      {pathname === '/post/7' && (
        <>
          <title>심리학과 놀기</title>
          <meta
            name="description"
            content="심리학과 학우들의 연애, 인싸, MT를 알려드려요"
          />
          <meta name="keywords" content="연애, 인싸, MT" />
          <meta property="og:title" content="심리학과에서 놀기" />
          <meta
            property="og:description"
            content="심리학과 연애, 인싸, MT를 알려드려요"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/post/7"
          />
        </>
      )}
      {pathname === '/post/8' && (
        <>
          <title>Free Talk</title>
          <meta name="description" content="심리학과 학우들의 자유발언!" />
          <meta name="keywords" content="심리학과, 자유발언" />
          <meta property="og:title" content="Free Talk" />
          <meta
            property="og:description"
            content="심리학과 학우들의 자유발언!"
          />
          <meta
            property="og:url"
            content="https://psychology-brochure.vercel.app/post/8"
          />
        </>
      )}

      <meta
        property="og:image"
        content="/_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=256&q=75 1x, /_next/image?url=%2Fimages%2F%ED%99%88%EC%A1%B8%EC%97%85.webp&w=640&q=75 2x"
      />

      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default PostHead;
