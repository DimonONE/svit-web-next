import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);

    updateScrollPosition();

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return 0;
};
