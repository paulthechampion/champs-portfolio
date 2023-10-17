import React, { Component } from 'react';
import { Swipe } from 'react-swipe-component';

class SwipeDetector extends Component {
  constructor() {
    super();
    this.onSwipeLeftListener = this.onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this.onSwipeRightListener.bind(this);
    this.onSwipeDownListener = this.onSwipeDownListener.bind(this);
    this.onSwipeUpListener = this.onSwipeUpListener.bind(this);
    this.onSwipeListener = this.onSwipeListener.bind(this);
  }

  render() {
    return (
      <Swipe
        nodeName="div"
        id="swipe"
        className="swipe"
        mouseSwipe={false}
        onSwipedLeft={this.onSwipeLeftListener}
        onSwipedRight={this.onSwipeRightListener}
        onSwipedDown={this.onSwipeDownListener}
        onSwipedUp={this.onSwipeUpListener}
        onSwipe={this.onSwipeListener}
      >
        Swipe
      </Swipe>
    );
  }

  onSwipeLeftListener() {
    console.log('Swiped left');
  }

  onSwipeRightListener() {
    console.log('Swiped right');
  }

  onSwipeUpListener() {
    document.getElementsByClassName('swipe')[0].style.backgroundColor = 'red';
  }

  onSwipeDownListener() {
    document.getElementsByClassName('swipe')[0].style.backgroundColor = 'green';
  }

  onSwipeListener(e) {
    if (e[1] === 0) console.log('Swipe x: ' + e[0]);
    else if (e[0] === 0) console.log('Swipe y: ' + e[1]);
  }
}

export default SwipeDetector;
