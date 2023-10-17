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
    position:'absolute'

  };

  return (
    <div style={{position:'fixed', top:0, zIndex:1}}>
        <div {...handlers} style={swipeAreaStyle}>
        Swipe me up or down {number}
        </div>
    </div>
  );
}

export default SwipeDetector;