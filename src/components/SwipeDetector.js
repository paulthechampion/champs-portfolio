import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function SwipeDetector() {
  const [backgroundColor, setBackgroundColor] = useState('lightgray');

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === 'Up') {
        setBackgroundColor('red');
      } else if (eventData.dir === 'Down') {
        setBackgroundColor('green');
      }
    },
  });

  const swipeAreaStyle = {
    width: '100%',
    height: '100vh', // Full viewport height
    backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div {...handlers} style={swipeAreaStyle}>
      Swipe me up or down
    </div>
  );
}

export default SwipeDetector;