import { useEffect } from 'react';

// 스크롤을 제어하는 훅

const useScrollControl = (isControl: boolean) => {
  useEffect(() => {
    if (isControl) {
      const scrollY = window.scrollY;
      document.body.style.cssText = `
        position: fixed;
        top: -${scrollY}px;
        overflow-y: scroll;
        width: 100%;
      `;
    }

    return () => {
      if (isControl) {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    };
  }, [isControl]);
};

export default useScrollControl;
