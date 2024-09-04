/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import "./teamInfo.scss";

const about = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(function () {
    const handleScroll = () => {
      const teamInfo = document.querySelector('.team__info');
      if (teamInfo) {
        const rect = teamInfo.getBoundingClientRect();
        const isInViewport = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        if (isInViewport && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [isVisible]); // Empty dependency array ensures this runs once on mount

  return (
    <div className={`team__info flex-center ${isVisible ? 'animate' : ''}`}>
      <div>
        <h4 className="font20 weight800">Little About Us</h4>
        <p className="font12 weight500">
          Whether you need a catchy slogan, a stunning logo, a viral video, or a comprehensive marketing strategy, we are the agency for you. Contact us today and let us show you why we are the No.1 Advertising Agency in Trivandrum.
        </p>
        <p className="font12 weight500">Read More</p>
      </div>
    </div>
  );
};

export default about;
