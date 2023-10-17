import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Main from './Main';

function SwipeDetector() {
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

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Up') {
                if (activeCard < 9) {
                    setActiveCard(activeCard + 1);
                }
            } else if (eventData.dir === 'Down') {
                if (activeCard > 1) {
                    setActiveCard(activeCard - 1);
                }
            }
        },
    });

    useEffect(() => {
        switch (activeCard) {
            case 1:
                scrollToSection('about');
                break;
            case 2:
                scrollToSection('experience');
                break;
            case 3:
                scrollToSection('resume-blank');
                break;
            case 4:
                scrollToSection('skill-service');
                break;
            case 5:
                scrollToSection('skills-blank');
                break;
            case 6:
                scrollToSection('projects');
                break;
            case 7:
                scrollToSection('project7');
                break;
            case 8:
                scrollToSection('project8');
                break;
            case 9:
                scrollToSection('contact');
                break;
            default:
                break;
        }
    }, [activeCard]);

    const swipeAreaStyle = {
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    };

    return (
        <div {...handlers} style={swipeAreaStyle}>
            <Main />
        </div>
    );
}

export default SwipeDetector;
