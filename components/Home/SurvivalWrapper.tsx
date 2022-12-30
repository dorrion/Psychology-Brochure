import { SurvivalProps } from 'shared/store/type';
import { ModalStore } from 'shared/store';
import Portal from 'shared/components/modal/Modal';
import Grduated from './Graduated';
import Image from 'next/image';

export default function SurvivalWrapper({
  tipId,
  title,
  subtitle,
  category,
  homeImg,
}: SurvivalProps) {
  const { isOpen, setIsOpen } = ModalStore();

  return (
    <>
      <div onClick={setIsOpen} className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            src={homeImg!}
            className="lg:h-48 md:h-36 w-full object-cover object-center mb-4"
            alt="picture"
            width={200}
            height={200}
          />
          <div className="p-6">
            {category && (
              <h2 className="tracking-widest text-xs title-font font-medium text-yellow-400 mb-1">
                {category}
              </h2>
            )}
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-3">{subtitle}</p>

            <div className="bottom-0">
              <a className="text-slate-400 inline-flex items-center md:mb-2 lg:mb-0 ">
                보기
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
