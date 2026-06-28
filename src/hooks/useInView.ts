import { useState, useEffect, type RefObject } from 'react';

export function useInView(ref: RefObject<HTMLElement | null>, options: IntersectionObserverInit = {}) {
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15, ...options }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
  
  return inView;
}
