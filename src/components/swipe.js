if (eventData.event.target.closest("#left-rail")) {
    // If the user is inside the #left-rail div, scroll to the top of #about plus 20px
    // const aboutDiv = document.getElementById('about');
    // const aboutDivTop = aboutDiv.getBoundingClientRect().top + window.scrollY;
    // window.scrollTo({ top: aboutDivTop + 20, behavior: 'smooth' });
}

const incontact = eventData.event.target.closest("#contact");

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

const inSkillServiceDiv = eventData.event.target.closest("#skill-service");

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

const inexperienceDiv = eventData.event.target.closest("#experience");

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
