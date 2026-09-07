'use client';

import { useEffect, useRef, useState } from 'react';

export default function useInView({
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = undefined,
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observerOptions = { threshold, rootMargin };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.unobserve(currentRef);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, observerOptions);

    observer.observe(currentRef);

    return () => {
      if (currentRef && !triggerOnce) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerOnce, threshold, rootMargin]);

  return [ref, isInView];
}
