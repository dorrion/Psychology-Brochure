import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav className="mb-12 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link
          className="focus:text-secondaryColor hover:text-gray-900"
          href="/graduate"
        >
          추천 커리큘럼
        </Link>
        <p className="mx-4 w-px h-2.5 bg-shadowColor" />
        <Link
          href="/graduate/prepare"
          className="focus:text-secondaryColor hover:text-gray-900"
        >
          대학원 준비
        </Link>
        <p className="mx-4 w-px h-2.5 bg-shadowColor" />
        <Link
          href="/graduate/life"
          className="focus:text-secondaryColor hover:text-gray-900"
        >
          대학원 생활
        </Link>
        <p className="mx-4 w-px h-2.5 bg-shadowColor" />
        <Link
          href="/graduate/major"
          className="focus:text-secondaryColor hover:text-gray-900"
        >
          전공별 질문
        </Link>
        <p className="mx-4 w-px h-2.5 bg-shadowColor" />
        <Link
          href="/graduate/free"
          className="focus:text-secondaryColor hover:text-gray-900"
        >
          자유발언
        </Link>
        <p className="mx-4 w-px h-2.5 bg-shadowColor" />
        <Link
          href="/graduate/guide"
          className="focus:text-secondaryColor hover:text-gray-900"
        >
          입시요강
        </Link>
      </nav>
    </>
  );
}
