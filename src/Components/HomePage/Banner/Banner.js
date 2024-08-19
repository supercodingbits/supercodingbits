import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Banner.css'

const HomeSection = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const strings = ["Learn the Code", "Understanding the Concepts", "Building Websites"];
    
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">SuperCodingBits</div>
          <div className="text-2">For <span ref={typingRef}></span></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;