import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function SwipeDetector() {
    const [activeCard, setActiveCard] = useState(1);
    const [backgroundColor,setBackgroundColor] = useState('white')

    const swipeAreaStyle = {
        width: '100%',
        height: '100vh',
        backgroundColor,
        zIndex: 1,
        position: 'fixed',
        top: 0,
    };

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Up') {
                setBackgroundColor('red')
                // Handle swipe up
                if (activeCard === 1) {
                    scrollToElement('contact');
                } else if (activeCard === 2) {
                    scrollToElement(`project${activeCard - 1}`);
                    setActiveCard(activeCard - 1);
                } else if (activeCard === 3) {
                    scrollToElement(`project${activeCard - 1}`);
                    setActiveCard(activeCard - 1);
                } else if (activeCard === 4) {
                    scrollToElement('skill-service');
                    setActiveCard(3);
                } else if (activeCard === 5) {
                    scrollToElement('experience');
                    setActiveCard(4);
                } else if (activeCard === 6) {
                    scrollToElement('about');
                    setActiveCard(5);
                } else if (activeCard === 7) {
                    scrollToElement('about');
                    setActiveCard(5);
                }
            } else if (eventData.dir === 'Down') {
                setBackgroundColor('yellow')
                // Handle swipe down
                if (activeCard === 1) {
                    scrollToElement(`project${activeCard}`);
                    setActiveCard(activeCard + 1);
                } else if (activeCard === 2) {
                    scrollToElement(`project${activeCard}`);
                    setActiveCard(activeCard + 1);
                } else if (activeCard === 3) {
                    scrollToElement('skill-service');
                    setActiveCard(4);
                } else if (activeCard === 4) {
                    scrollToElement('experience');
                    setActiveCard(5);
                } else if (activeCard === 5) {
                    scrollToElement('about');
                    setActiveCard(6);
                } else if (activeCard === 6) {
                    scrollToElement('about');
                    setActiveCard(6);
                } else if (activeCard === 7) {
                    scrollToElement('contact');
                }
            }
        },
    });

    return (
        <div {...handlers} id="swipe-div" style={swipeAreaStyle}>
            {/* Your swipeable content */}
        </div>
    );
}

export default SwipeDetector;
