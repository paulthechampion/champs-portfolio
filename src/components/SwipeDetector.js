import React from 'react';
import { Hammer } from 'react-hammerjs';

class SwipeDetector extends React.Component {
  handleSwipe = (event) => {
    if (event.direction === 8) {
        //swiped up
        document.getElementById("hammer").style.backgroundColor = "red"
    } else if (event.direction === 16) {
      // Swiped down
      document.getElementById("hammer").style.backgroundColor = "green"
    }
  };

  render() {
    return (
      <Hammer onSwipe={this.handleSwipe}>
        <div id="hammer" style={{ width: '100%', height: '300px', backgroundColor: 'lightgray' }}>
          Swipe me Up or Down
        </div>
      </Hammer>
    );
  }
}

export default SwipeDetector;
