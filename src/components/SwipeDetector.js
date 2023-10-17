import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Main from './Main';

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
    maxHeight:'100vh',
    height:'100vh'
  };

  return (
        <div {...handlers} style={swipeAreaStyle}>
            Swipe me up or down {number}
            <Main/>
        </div>
  );
}

export default SwipeDetector;