// Portal 컴포넌트 : 래핑 컴포넌트

import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = (props: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#myportal');
    setMounted(true);
  }, []);

  // createPortal(child, container) : 자식 컴포넌트를 부모 컴포넌트 밖에 있는 다른 컴포넌트로 전달 가능함.
  // child를 모달창으로, container는 모달창이 렌더링될 곳
  return mounted && ref.current
    ? createPortal(
        <div className="flex flex-col justify-center items-center h-3/4 w-3/4 relative">
          {props.children}
        </div>,
        ref.current,
      )
    : null;
};

export default Portal;
