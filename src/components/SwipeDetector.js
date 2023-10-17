import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function SwipeDetector() {
    const [activeCard, setActiveCard] = useState(1);
    const [backgroundColor, setBackgroundColor] = useState(1);

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
                if (activeCard > 1) {
                    scrollToElement(`project${activeCard - 1}`);
                    setActiveCard(activeCard - 1);
                }
            } else if (eventData.dir === 'Down') {
                setBackgroundColor('yellow')
                // Handle swipe down
                if (activeCard < 7) {
                    scrollToElement(`project${activeCard}`);
                    setActiveCard(activeCard + 1);
                }
            }
        },
    });

    return (
        <div {...handlers} id="swipe-div" style={{ width: '100%', height: '100vh', backgroundColor, zIndex: 1, position: 'fixed', top: 0 }}>
            {/* Your swipeable content */}
        </div>
    );
}

export default SwipeDetector;
