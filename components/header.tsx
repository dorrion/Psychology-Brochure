import Link from 'next/link';
import DarkmodeToggleButton from './darkmode-toggle-button';

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold">아늑</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/introduce">
              소개
            </Link>
            <Link href="/graduate" className="mr-5 hover:text-gray-900">
              대학원
            </Link>
            <Link href="/career" className="mr-5 hover:text-gray-900">
              취업
            </Link>
            <Link href="/abroad" className="mr-5 hover:text-gray-900">
              유학
            </Link>
          </nav>
          <DarkmodeToggleButton />
        </div>
      </header>
    </>
  );
}
