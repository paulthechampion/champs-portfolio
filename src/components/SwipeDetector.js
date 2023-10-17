import React, {Component} from 'react';
import Swipe from 'react-swipe-component';

class SwipeDetector extends Component{
    constructor(){
        super();
        this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
        this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
        this.onSwipeDownListener = this._onSwipeUpListener.bind(this);
        this.onSwipeUpListener = this._onSwipeDownListener.bind(this);
        this.onSwipeListener = this._onSwipeListener.bind(this);
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
        </Swipe>);
    }
    _onSwipeLeftListener(){
        console.log("Swiped left");
    }
    _onSwipeRightListener(){
        console.log("Swiped right");
    }
    _onSwipeUpListener(){
        document.getElementById('swipe').style.backgroundColor('red')
    }
    _onSwipeDownListener() {
        document.getElementById('swipe').style.backgroundColor('green')
    }
    _onSwipeListener(e){
        if (e[1]===0) console.log("Swipe x: "+e[0]);
        else if (e[0]===0) console.log("Swipe y: "+e[1]);
    }
}
export default SwipeDetector;
