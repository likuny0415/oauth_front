import { useEffect, useState, useRef } from 'react';

export default function useOnScreen() {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const intersectionCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      rootMargin: '100% 0px',
    });

    if (containerRef.current) observer.observe(containerRef?.current);

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, [containerRef]);

  return { isVisible, containerRef };
}
