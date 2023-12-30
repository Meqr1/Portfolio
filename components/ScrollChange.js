import { useEffect } from 'react';

const ScrollBackgroundChange = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      const scrollThreshold = 200;

      if (window.scrollY > scrollThreshold) {
        body.classList.add('scroll-bg-change');
      } else {
        body.classList.remove('scroll-bg-change');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>{children}</div>;
};

export default ScrollBackgroundChange;

