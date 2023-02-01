import React, { useState, useEffect } from 'react';
import { ToTop } from 'components/icon';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-0 right-4 mb-6 mr-10 p-3 bg-secondaryColor dark:bg-indigo-500 text-white rounded-full shadow-lg focus:outline-none"
          onClick={handleClick}
        >
          <ToTop />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
