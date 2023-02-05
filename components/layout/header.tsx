import Link from 'next/link';
import DarkmodeToggleButton from './darkmode-toggle-button';

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font top-0 left-0 right-0 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-4xl font-bold">아늑</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 text-xl hover:text-gray-900"
              href="/introduce"
            >
              소개
            </Link>
            <Link href="/graduate" className="mr-5 text-xl hover:text-gray-900">
              대학원
            </Link>
            <Link href="/career" className="mr-5 text-xl hover:text-gray-900">
              취업
            </Link>
            <Link href="/abroad" className="mr-5 text-xl hover:text-gray-900">
              유학
            </Link>
            <Link href="/tool" className="mr-5 text-xl hover:text-gray-900">
              도구
            </Link>
          </nav>
          <DarkmodeToggleButton />
        </div>
      </header>
    </>
  );
}
