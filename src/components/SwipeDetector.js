import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

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

  componentDidMount() {
    this.swipe = ReactSwipe(this.container);
  }

  render() {
    const { backgroundColor } = this.state;

    const swipeAreaStyle = {
      width: '100%',
      height: '100vh', // Full viewport height
      backgroundColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <div ref={el => (this.container = el)}>
        <div style={swipeAreaStyle}>
          Swipe me up or down
        </div>
      </div>
    );
  }
}

export default SwipeDetector;
