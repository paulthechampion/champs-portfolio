import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Main from './Main';
import { moveUp, moveDown } from './swipe';

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
                    const notLeftRail = document.querySelector('.content-div:not(#left-rail):hover');
                
                    if (eventData.event.target.closest("#left-rail")) {
                        moveUp('about')
                    }
                
                    // if (notLeftRail) {
                    //     // Scroll to the bottom of the current content div
                    //     const notLeftRailBottom = notLeftRail.getBoundingClientRect().bottom;
                    //     window.scrollBy(0, notLeftRailBottom);
                    // }

                    const inAbout = eventData.event.target.closest("#about");
            
                    if (inAbout) {
                        moveUp('experience')
                    }

                    const inExperience = eventData.event.target.closest("#experience");
            
                    if (inExperience) {
                        moveUp('skill-service')
                    }

                    const inSkillServiceDiv = eventData.event.target.closest("#skill-service");
            
                    if (inSkillServiceDiv) {
                        moveUp('projects')
                        
                    }

                    const inProjectsDiv = eventData.event.target.closest("#projects");

                    if (inProjectsDiv) {
                        moveUp('contact')
                        
                    }

                    const incontact = eventData.event.target.closest("#contact");
            
                    if (incontact) {
                        if(isDivAtTopOfScreen('contact')) {
                            const blankDiv = document.getElementById('contact-blank');
                            const blankDivTop = blankDiv.getBoundingClientRect().top + window.scrollY;
                            blankDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            return;
                        }
                        const contactDiv = document.getElementById('contact') 
                        contactDiv.scrollIntoView({behavior:'smooth', block:'start'})
                    }    
            }
            
            else if (eventData.dir === 'Down') {
                    setNumber(number-1)
                    const inAbout = eventData.event.target.closest("#about");
                    if(inAbout) {
                        moveDown('left-rail')
                    }

                    const inexperience = eventData.event.target.closest("#experience");
                    if(inexperience) {
                        moveDown('about')
                        
                    }

                    const inSkillServiceDiv = eventData.event.target.closest('#skill-service')
                    if(inSkillServiceDiv) {
                        moveDown('experience')
                    }

                    const inProjectsDiv = eventData.event.target.closest("#projects");

                    if (inProjectsDiv) {
                        moveDown('skill-service')
                    }

                    const incontact = eventData.event.target.closest("#contact");

                    if (incontact) {
                        moveDown('projects')
                    }
                    

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
            <Main/>
        </div>
  );
}

export default SwipeDetector;