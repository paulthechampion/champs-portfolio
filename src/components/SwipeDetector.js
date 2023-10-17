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
                    const notLeftRail = document.querySelector('.content-div:not(#left-rail):hover');
                
                    if (eventData.event.target.closest("#left-rail")) {
                        // If the user is inside the #left-rail div, scroll to the top of #about plus 20px
                        const aboutDiv = document.getElementById('about');
                        const aboutDivTop = aboutDiv.getBoundingClientRect().top + window.scrollY;
                        aboutDiv.scrollIntoView({behavior:'smooth', block:'start'})
                    }
                
                    // if (notLeftRail) {
                    //     // Scroll to the bottom of the current content div
                    //     const notLeftRailBottom = notLeftRail.getBoundingClientRect().bottom;
                    //     window.scrollBy(0, notLeftRailBottom);
                    // }

                    const inAbout = eventData.event.target.closest("#about");
            
                    if (inAbout) {
                        // If the user is inside the #about div, scroll to the top of #experience plus 20px
                        const experienceDiv = document.getElementById('experience');
                        const experienceDivTop = experienceDiv.getBoundingClientRect().top + window.scrollY;
                        experienceDiv.scrollIntoView({behavior:'smooth', block:'start'})
                    }

                    const inExperience = eventData.event.target.closest("#experience");
            
                    if (inExperience) {
                        // If the user is inside the #experience div, scroll to the bottom of the #resume-blank
                        const resumeDiv = document.getElementById('resume-blank');
                        const resumeDivBottom = resumeDiv.getBoundingClientRect().bottom;

                        if(isElementOnScreen(resumeDiv)) {
                            const skillServiceDiv = document.getElementById('skill-service');
                            const skillServiceDivTop = skillServiceDiv.getBoundingClientRect().top + window.scrollY;
                            skillServiceDiv.scrollIntoView({behavior:'smooth', block:'start'})
                        }
                        else{
                            resumeDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
                        }
                    }

                    const inSkillServiceDiv = eventData.event.target.closest("#skill-service");
            
                    if (inSkillServiceDiv) {
                        // If the user is inside the #experience div, scroll to the bottom of the #skills-blank
                        const blank = document.getElementById('skills-blank');
                        const blankDivBottom = blank.getBoundingClientRect().bottom;

                        if(isElementOnScreen(blank)) {
                            const projectsDiv = document.getElementById('projects');
                            const projectsDivTop = projectsDiv.getBoundingClientRect().top + window.scrollY;
                            projectsDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
                        } else {
                            blank.scrollIntoView({ behavior: 'smooth', block: 'end' });
                        }
                    }

                    const inProjectsDiv = eventData.event.target.closest("#projects");

                    if (inProjectsDiv) {
                        if (activeCard > 9) {
                            const contact = document.getElementById('contact');
                            setActiveCard(9);
                            contact.scrollIntoView({behavior:'smooth', block:'start'})
                        } else {
                            let projectCard = document.getElementById(`project${activeCard}`);
                            if (projectCard !== null) {
                                // Scroll to the project card
                                projectCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            } else {
                                console.log(`Project card with ID project${activeCard} not found.`);
                            }
                            
                            setActiveCard(activeCard + 1);
                        }
                        
                    }

                    const incontact = eventData.event.target.closest("#contact");
            
                    if (incontact) {
                        const blankDiv = document.getElementById('contact-blank');
                        const blankDivTop = blankDiv.getBoundingClientRect().top + window.scrollY;
                        blankDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }    
            }
            
            else if (eventData.dir === 'Down') {
                    setNumber(number-1)
                    const inAbout = eventData.event.target.closest("#about");
                    if(inAbout) {
                        const leftRail = document.getElementById('left-rail');
                        const blankDivTop = leftRail.getBoundingClientRect().top + window.scrollY;
                        leftRail.scrollIntoView({ behavior: 'smooth', block: 'start' });
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