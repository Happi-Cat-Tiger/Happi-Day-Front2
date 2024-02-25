import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

function useIntersectingState<TElement extends Element>(): [boolean, RefObject<TElement>];

function useIntersectingState<TElement extends Element>(initialState: null): [boolean | null, RefObject<TElement>];

/** IntersectionObserver 커스텀 훅 */
function useIntersectingState<TElement extends Element>(
  initialState?: null,
): [boolean | (boolean | null), RefObject<TElement>] {
  const [isIntersecting, setIsIntersecting] = useState(initialState === null ? null : false);
  const ref = useRef<TElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  /** 반환값 isIntersecting는 관찰하려는 element가 현재 viewport에 진입했는지의 상태 */
  return [isIntersecting, ref];
}

export default useIntersectingState;
