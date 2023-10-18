import React, { useState } from 'react';
import './App.css';
import Circle from './components/Circle';
import Main from './components/Main';
import { useMediaQuery } from 'react-responsive'
import SwipeDetector from './components/SwipeDetector';

function App() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 809px)'
    })

    document.addEventListener("DOMContentLoaded", () => {
        let elements = document.querySelectorAll(".appear");
      
        const observer = new IntersectionObserver(handleIntersection, {
          root: null, // Use the viewport as the root
          rootMargin: "0px",
          threshold: 0.1, // Trigger when 10% of the element is visible
        });
      
        elements.forEach((element) => {
          element.style.opacity = 0;
          observer.observe(element);
        });
      
        let resetElements = false;
        function handleIntersection(entries, observer) {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("appeared");
                resetElements = false;
              } else {
                if (!resetElements) {
                  elements.forEach((element) => {
                    element.classList.remove("appeared");
                    element.style.opacity = 0;
                  });
                  resetElements = true;
                }
              }
            })
        }
        
    });
      
    
    return (
        <div className="App">
            <div className='phone-logo-div'></div>
            <Circle/>
            {isDesktopOrLaptop  ? <Main/> : <SwipeDetector/> }
        </div>
    );
}

export default App;