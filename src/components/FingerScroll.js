import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';


export default function  FingerScroll() {
    const handleScroll = () => {
      // Customize the scroll behavior as needed
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className="finger-scroll-container">
        <FontAwesomeIcon
          icon={faHandPointer}
          className="finger"
          onClick={handleScroll}
        />
      </div>
    );




};