import React, { useState, useEffect } from 'react';
import './App.css';
import Circle from './components/Circle';
import Main from './components/Main';
import { useMediaQuery } from 'react-responsive'
import SwipeDetector from './components/SwipeDetector';

function App() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 809px)'
    })

    useEffect(() => {
        const elements = document.querySelectorAll(".appear");
        const rootMargin = isDesktopOrLaptop ? "0px 0px -250px 0px" : "0px 0px -120px 0px"
        const observer = new IntersectionObserver(handleIntersection, {
          root: null, // Use the viewport as the root
          rootMargin,
          threshold: 0, // Trigger when 10% of the element is visible
        });
      
        elements.forEach((element) => {
          observer.observe(element);
        });
      
        function handleIntersection(entries, observer) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("appeared");
            } else {
              entry.target.classList.remove("appeared");
            }
          });
        }
    },[]);
      
    
    return (
        <div className="App">
            <div className='phone-logo-div'></div>
            <Circle/>
            {isDesktopOrLaptop  ? <Main/> : <SwipeDetector/> }
        </div>
    );
}

export default App;