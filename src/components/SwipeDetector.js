import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function SwipeDetector() {
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [number, setNumber] =useState(0)
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === 'Up') {
        setNumber(number+1)
      } else if (eventData.dir === 'Down') {
        setNumber(number-1)
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
    zIndex:1

  };

  return (
    <div {...handlers} style={swipeAreaStyle}>
      Swipe me up or down {number}
    </div>
  );
}

export default SwipeDetector;