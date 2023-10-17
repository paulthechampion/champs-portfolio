import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive';

function SwipeDetector() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 809px)',
    });
    const [backgroundColor, setBackgroundColor] = useState('lightgray');
    const [activeCard, setActiveCard] = useState(1);

    const swipeAreaStyle = {
        width: '100%',
        height: '100vh', // Full viewport height
        backgroundColor: 'transparent',
        zIndex: 1,
        position:'fixed',
        top:0
    };

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
            return rect.top >= 0 && rect.bottom >= 0;
        }

        return false;
    }

    const handlers = useSwipeable({
        onSwiped: (eventData, event) => { // Add event argument
            if (eventData.dir === 'Up') {
                
                if (event.target.closest("#left-rail")) {
                    // If the user is inside the #left-rail div, scroll to the top of #about plus 20px
                    // const aboutDiv = document.getElementById('about');
                    // const aboutDivTop = aboutDiv.getBoundingClientRect().top + window.scrollY;
                    // window.scrollTo({ top: aboutDivTop + 20, behavior: 'smooth' });
                }
    
                const incontact = event.target.closest("#contact");
    
                if (incontact) {
                    const isDivAtTop = isDivAtTopOfScreen('contact');
                    const contact = document.getElementById('contact');
                    const lastProject = document.getElementById(`project${activeCard}`);
    
                    if (lastProject !== null) {
                        if(isElementOnScreen(lastProject)) {
                            lastProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            setActiveCard(activeCard-1)
                        }
                    }
                    if (isDivAtTop) {
                        if (lastProject !== null) {
                            // Scroll to the top of the project
                            lastProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                            // Wait for the scroll to finish before checking if it's at the top
                            setTimeout(() => {
                                const isProjectAtTop = isDivAtTopOfScreen(`project${activeCard}`);
                                if (isProjectAtTop) {
                                    // Scroll to lastProject if it's at the top
                                    const nextProject = document.getElementById(`project${activeCard + 1}`);
                                    if (nextProject !== null) {
                                        nextProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }
                            }, 500); // Adjust the timeout duration as needed
                        }
                    } else {
                        contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
    
    
                const inProjectsDiv = event.target.closest("#projects");
    
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
                            if (projectsDiv) {
                                const projectsDivTop = projectsDiv.getBoundingClientRect().top + window.scrollY;
                                window.scrollTo({ top: projectsDivTop, behavior: 'smooth' });
                            }
                            setActiveCard(1);
                        } else {
                            // Scroll to the previous project card
                            const projectCard = document.getElementById(`project${activeCard - 1}`);
                            if (projectCard) {
                                projectCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            } else {
                                console.log(`Project card with ID project${activeCard - 1} not found.`);
                            }
                            setActiveCard(activeCard - 1);
                        }
                    }
                }
    
                const inSkillServiceDiv = event.target.closest("#skill-service");
                
                if (inSkillServiceDiv) {
                    const isSkillServiceTop = isDivAtTopOfScreen('skill-service');
                
                    if (isSkillServiceTop) {
                        const experienceDiv = document.getElementById('experience');
                        if (experienceDiv) {
                            // Scroll to the top of the 'skill-service' div
                            experienceDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    } else {
                        const skillServiceDiv = document.getElementById('skill-service');
                        if (skillServiceDiv) {
                            const skillServiceDivTop = skillServiceDiv.getBoundingClientRect().top + window.scrollY;
                            window.scrollTo({ top: skillServiceDivTop, behavior: 'smooth' });
                        }
                    } 
                }
    
                const inexperienceDiv = event.target.closest("#experience");
                
                if (inexperienceDiv) {
                    const isexperienceTop = isDivAtTopOfScreen('experience');
                    const aboutDiv = document.getElementById('about');
                
                    if (isexperienceTop) {
                        if (aboutDiv) {
                            aboutDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        
                        } else {
                            console.error("Element not found. Make sure the ID is correct.");
                        }
                    } else {
                        const experienceDiv = document.getElementById('experience');
                        console.log('here')
                        if (experienceDiv) {
                            const experienceDivTop = experienceDiv.getBoundingClientRect().top + window.scrollY;
                            window.scrollTo({ top: experienceDivTop, behavior: 'smooth' });
                        }
                    } 
                    
                    if(isDivAtTopOfScreen('about')) {
                        const leftRailDiv = document.getElementById('left-rail');
                        if (leftRailDiv) {
                            leftRailDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        
                        } else {
                            console.error("Element not found. Make sure the ID is correct.");
                        }
                    }
                }
    
                const inaboutDiv = event.target.closest("#about");
                
                if (inaboutDiv) {
                    const isaboutTop = isDivAtTopOfScreen('about');
                
                    if (isaboutTop) {
                        const leftRailDiv = document.getElementById('left-rail');
                        if (leftRailDiv) {
                            leftRailDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        
                        } else {
                            console.error("Element not found. Make sure the ID is correct.");
                        }
                    } else {
                        const aboutDiv = document.getElementById('about');
                        if (aboutDiv) {
                            const aboutDivTop = aboutDiv.getBoundingClientRect().top + window.scrollY;
                            window.scrollTo({ top: aboutDivTop, behavior: 'smooth' });
                        }
                    } 
                }
    
                
                
                //SCROLLING UP

                
            } else if (eventData.dir === 'Down') {
                //SCROLLING DOWN

                const notLeftRail = document.querySelector('.content-div:not(#left-rail):hover');
                    
                if (event.target.closest("#left-rail")) {
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
                
                const inAbout = event.target.closest("#about");
                
                if (inAbout) {
                    // If the user is inside the #about div, scroll to the top of #experience plus 20px
                    const experienceDiv = document.getElementById('experience');
                    const experienceDivTop = experienceDiv.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: experienceDivTop, behavior: 'smooth' });
                }
                
                const inExperience = event.target.closest("#experience");
                
                if (inExperience) {
                    // If the user is inside the #experience div, scroll to the bottom of the #resume-blank
                    const resumeDiv = document.getElementById('resume-blank');
                    const resumeDivBottom = resumeDiv.getBoundingClientRect().bottom;

                    if(isElementOnScreen(resumeDiv)) {
                        const skillServiceDiv = document.getElementById('skill-service');
                        const skillServiceDivTop = skillServiceDiv.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({ top: skillServiceDivTop, behavior: 'smooth' });
                    }
                    else{
                        resumeDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }
                }

                const inSkillServiceDiv = event.target.closest("#skill-service");
                
                if (inSkillServiceDiv) {
                    // If the user is inside the #experience div, scroll to the bottom of the #skills-blank
                    const blank = document.getElementById('skills-blank');
                    const blankDivBottom = blank.getBoundingClientRect().bottom;

                if(isElementOnScreen(blank)) {
                    const projectsDiv = document.getElementById('projects');
                    const projectsDivTop = projectsDiv.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: projectsDivTop, behavior: 'smooth' });
                } else {
                    blank.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
                }

                const inProjectsDiv = event.target.closest("#projects");

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

                const incontact = event.target.closest("#contact");
                
                if (incontact) {
                    const blankDiv = document.getElementById('contact-blank');
                    const blankDivTop = blankDiv.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: blankDivTop, behavior: 'smooth' });
                    console.log("Action", activeCard)
                }
            }
            console.log('scrolling')
        },
    });

    return (
        <div {...handlers} id='swipe-div' style={swipeAreaStyle}>
            {/* Your swipeable content */}
        </div>
    );
}

export default SwipeDetector;
