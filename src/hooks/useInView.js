import { useState, useEffect, useRef } from 'react';

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const optionsRef = useRef(options); // stable ref — avoids exhaustive-deps warning

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold: 0.15, ...optionsRef.current }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []); // intentionally empty — observer is set up once on mount

  return [ref, isInView];
};

export default useInView;
