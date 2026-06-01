'use client';

import { useEffect, useRef, useState } from 'react';

export default function useInView(options = { triggerOnce: true, threshold: 0.1 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(currentRef);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef && !options.triggerOnce) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.triggerOnce, options.threshold, options.rootMargin]);

  return [ref, isInView];
}
