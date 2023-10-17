import React, { Component } from 'react';
import { Swipe } from 'react-swipe-component';

class SwipeDetector extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'lightgray',
    };
  }

  onSwipeUpListener = () => {
    this.setState({ backgroundColor: 'red' });
  }

  onSwipeDownListener = () => {
    this.setState({ backgroundColor: 'green' });
  }

  render() {
    const { backgroundColor } = this.state;

    const swipeAreaStyle = {
      width: '100%',
      height: '300px',
      backgroundColor,
    };

    return (
      <Swipe
        nodeName="div"
        className="swipe"
        mouseSwipe={false}
        onSwipedUp={this.onSwipeUpListener}
        onSwipedDown={this.onSwipeDownListener}
      >
        <div style={swipeAreaStyle}>
          Swipe me up or down
        </div>
      </Swipe>
    );
  }
}

export default SwipeDetector;
