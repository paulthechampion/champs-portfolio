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

    function isDivAtBottom(divId) {
        const targetDiv = document.getElementById(divId);
      
        if (targetDiv) {
          const lastContent = targetDiv.lastElementChild; // Assuming the last content is the last child element
      
          if (lastContent) {
            const divBottom = targetDiv.offsetTop + targetDiv.offsetHeight;
            const lastContentBottom = lastContent.offsetTop + lastContent.offsetHeight;
            const viewportHeight = window.innerHeight;
      
            return lastContentBottom >= divBottom && lastContentBottom >= viewportHeight;
          }
        }
      
        return false; // Handle the case where the element is not found
      }
    function cardAtTopOfScreen(cardId) {
        const card = document.getElementById(cardId);
      
        if (!card) {
          return false; // Card with the given ID not found
        }
      
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
      
        return cardTop <= 40;
      }

      function moveToBottom(divId) {
        const mainDiv = document.getElementById(divId);
        if (!mainDiv) {
          console.error(`Element with ID ${divId} not found.`);
          return;
        }
      
        const lastChildDiv = mainDiv.lastElementChild;
        
        // Calculate the translateY value to move the main div
        const viewportHeight = window.innerHeight;
        const lastChildDivHeight = lastChildDiv.clientHeight;
        const translateYValue = viewportHeight - lastChildDivHeight - 100; // Adjusted for a small gap
      
        // Apply the translateY transform to move the main div
        mainDiv.style.transform = `translateY(-${translateYValue}px)`;
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
                        const experienceSection = document.getElementById('experience')
                        const currentPosition = experienceSection.getBoundingClientRect().top;
                        const newPosition = currentPosition - 460;
                        const resumeBlank = document.getElementById('resume-blank')
                        if(isElementOnScreen(resumeBlank)) {
                            moveUp('skill-service')
                            return
                        }

                        experienceSection.style.transform = `translateY(${newPosition}px)`
                    }

                    const inSkillServiceDiv = eventData.event.target.closest("#skill-service");
            
                    if (inSkillServiceDiv) {
                        const blankDiv = document.getElementById('skills-blank')
                        const skillSection = document.getElementById('skill-service')
                        const currentPosition = skillSection.getBoundingClientRect().top;
                        const newPosition = currentPosition - 500;
                        if(isElementOnScreen(blankDiv)) {
                            moveUp('projects')
                            return
                        }

                        moveToBottom('skill-service')
                        
                    }

                    const inProjectsDiv = eventData.event.target.closest("#projects");

                    if (inProjectsDiv) {
                        const projectSection = document.getElementById('projects')
                        const currentPosition = projectSection.getBoundingClientRect().top;
                        const newPosition = currentPosition - 450;
                        const lastProject = document.getElementById('project9')
                        if(isElementOnScreen(lastProject)) {
                            
                            moveUp('contact')
                            return;
                        }
                        projectSection.style.transform = `translateY(${newPosition}px)`;

                        
                        
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
                        const projectSection = document.getElementById('projects')
                        const currentPosition = projectSection.getBoundingClientRect().top;
                        const newPosition = currentPosition + 450;
                        const firstProject = document.getElementById('project0')
                        
                        if(isElementOnScreen(firstProject)) {
                            projectSection.style.transform = 'unset'
                            if(isDivAtTopOfScreen('projects')) {
                                moveDown('skill-service')
                                return;
                            }
                        }
                        projectSection.style.transform = `translateY(${newPosition}px)`;

                        
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