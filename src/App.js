import React, { useState } from 'react';
import './App.css';
import Circle from './components/Circle';
import Main from './components/Main';
import { useMediaQuery } from 'react-responsive'
import SwipeDetector from './components/SwipeDetector';

function App() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 809px)'
    })
    
    return (
        <div className="App">
            <div className='phone-logo-div'></div>
            <Circle/>
            {isDesktopOrLaptop  ? <Main/> : <SwipeDetector/> }
        </div>
    );
}

export default App;