import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav className="mb-12 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-900" href="/graduate">
          추천 커리큘럼
        </Link>
        <Link href="/graduate/prepare" className="mr-5 hover:text-gray-900">
          대학원 준비
        </Link>
        <Link href="/graduate/major" className="mr-5 hover:text-gray-900">
          전공별 질문
        </Link>
        {/* <Link href="/graduate/main" className="mr-5 hover:text-gray-900">
          이거 뭐지
        </Link> */}
        {/* <Link href="/tool" className="mr-5 hover:text-gray-900">
          도구
        </Link> */}
      </nav>
    </>
  );
}
