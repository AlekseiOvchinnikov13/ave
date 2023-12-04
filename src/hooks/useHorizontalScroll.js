import {useEffect, useRef} from 'react';

export function useHorizontalScroll() {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();

        const scrollStep = el.scrollWidth / el.childElementCount;
        const delta = Math.sign(e.deltaY);

        el.scrollTo({
          left: el.scrollLeft + delta * scrollStep,
          behavior: 'smooth'
        });
      };

      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}