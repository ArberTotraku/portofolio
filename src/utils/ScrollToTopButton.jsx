import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Add an event listener to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = 1000;

      setShowButton(window.scrollY > scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <ScrollToTop
          smooth
          top={0}
          color="blue"
          className="fixed bottom-4 right-4 p-2 bg-gray-700 text-white rounded-full hover:bg-blue-500 hover:text-gray-800 focus:outline-none"
        />
      )}
    </div>
  );
};

export default ScrollToTopButton;
