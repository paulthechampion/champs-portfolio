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
                        const leftRail = document.getElementById('left-rail');
                        const blankDivTop = leftRail.getBoundingClientRect().top + window.scrollY;
                        leftRail.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }

                    const inexperience = eventData.event.target.closest("#experience");
                    if(inexperience) {
                        const resumeDiv = document.getElementById('resume-div')
                        const isResumeDiv = isElementOnScreen(resumeDiv)
                        if(isResumeDiv) {
                            const experienceDiv = document.getElementById('experience')
                            experienceDiv.scrollIntoView({ behavior: 'smooth', block:'start' })
                            return;
                        }
                        const aboutDiv = document.getElementById('about');
                        aboutDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        
                    }

                    const inSkillServiceDiv = eventData.event.target.closest('#skill-service')
                    if(inSkillServiceDiv) {
                        const blank = document.getElementById('skills-blank')
                        const isBlankDiv = isElementOnScreen(blank)

                        if(isBlankDiv) {
                            const skillServiceDiv = document.getElementById('skill-service')
                            skillServiceDiv.scrollIntoView({behavior:'smooth', block:'start'})
                            return
                        }
                        const experienceDiv = document.getElementById('experience')
                        experienceDiv.scrollIntoView({ behavior:'smooth', block:'start' })
                    }

                    const inProjectsDiv = eventData.event.target.closest("#projects");

                    if (inProjectsDiv) {
                        // Check if the 'projects' div is at the top of the screen
                        const isProjectsAtTop = isDivAtTopOfScreen('projects');

                        if (isProjectsAtTop) {
                            const skillServiceDiv = document.getElementById('skill-service');
                            if (skillServiceDiv) {
                                // Scroll to the top of the 'skill-service' div
                                skillServiceDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        } else {
                            if (activeCard <= 1) {
                                // If 'activeCard' is less than or equal to 1, scroll to 'projects' and set 'activeCard' to 1
                                const projectsDiv = document.getElementById('projects');
                                projectsDiv.scrollIntoView({ behavior:'smooth' , block: 'start'})
                                setActiveCard(1);
                            } else {
                                // Scroll to the previous project card
                                setActiveCard(activeCard - 1);
                                const projectCard = document.getElementById(`project${activeCard - 1}`);
                                if (projectCard) {
                                    projectCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                } else {
                                    console.log(`Project card with ID project${activeCard - 1} not found.`);
                                }
                            }
                        }
                    }

                    const incontact = eventData.event.target.closest("#contact");

                    if (incontact) {
                        const isDivAtTop = isDivAtTopOfScreen('contact');
                        
                        if (isDivAtTop) {
                            const lastProject = document.getElementById(`project8`);
                            setActiveCard(8)
                            if(lastProject) {
                                lastProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          
                        } else {
                            const contact = document.getElementById('contact');
                            contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
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