import { useEffect, useState, useRef } from 'react';

export default function useOnScreen(options) {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const intersectionCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      ...options,
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef?.current);
    };
  }, [containerRef, options]);

  return { isVisible, containerRef };
}
