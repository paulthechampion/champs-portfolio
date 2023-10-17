import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function SwipeDetector() {
    const [backgroundColor, setBackgroundColor] = useState('lightgray');

    const changeBackgroundColor = (newColor) => {
        setBackgroundColor(newColor);
    };

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Up') {
                // Handle swipe up
                changeBackgroundColor('blue'); // Change to the desired background color
            } else if (eventData.dir === 'Down') {
                // Handle swipe down
                changeBackgroundColor('green'); // Change to the desired background color
            }
        },
    });

    return (
        <div {...handlers} id="swipe-div" style={{ width: '100%', height: '100vh', backgroundColor: backgroundColor, zIndex: 1, position: 'fixed', top: 0 }}>
            {/* Your swipeable content */}
        </div>
    );
}

export default SwipeDetector;
