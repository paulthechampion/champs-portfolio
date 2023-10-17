import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Main from './Main';

function SwipeDetector() {
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [number, setNumber] =useState(0)
    const [activeCard, setActiveCard] = useState(1); 

    // Function to handle the scroll event
    function isElementOnScreen(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0 &&
            rect.left <= window.innerWidth &&
            rect.right >= 0
        );
    }

    function isDivAtTopOfScreen(divId) {
        const div = document.getElementById(divId);
    
        if (div) {
            const rect = div.getBoundingClientRect();
    
            // Check if the top of the div is in the current viewport
            return rect.top >= 0 && rect.bottom >= 0;
        }
    
        // If the div doesn't exist, return false
        return false;
    }
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Up') {
                setNumber(number+1)
            } else if (eventData.dir === 'Down') {
                    setNumber(number-1)
                    const notLeftRail = document.querySelector('.content-div:not(#left-rail):hover');
                
                    if (eventData.event.target.closest("#left-rail")) {
                        // If the user is inside the #left-rail div, scroll to the top of #about plus 20px
                        const aboutDiv = document.getElementById('about');
                        const aboutDivTop = aboutDiv.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({ top: aboutDivTop, behavior: 'smooth' });
                    }
                
                    // if (notLeftRail) {
                    //     // Scroll to the bottom of the current content div
                    //     const notLeftRailBottom = notLeftRail.getBoundingClientRect().bottom;
                    //     window.scrollBy(0, notLeftRailBottom);
                    // }
                }
        },
    });

  const swipeAreaStyle = {
    width: '100%',
    maxHeight:'100vh',
    height:'100vh'
  };

  return (
        <div {...handlers} style={swipeAreaStyle}>
            Swipe me up or down {number}
            <Main/>
        </div>
  );
}

export default SwipeDetector;