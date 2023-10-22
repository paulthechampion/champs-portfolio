import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Circle() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 809px)',
  });
  
  const [isCentered, setIsCentered] = useState(true);
  
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');
    const colorsOne = [
      '#009FD6',
      '#0294c5',
      '#02a8c5',
      '#0395af',
      '#04849b',
      '#04649b',
    ];

    const colorsTwo = ['#CDB450', '#dac057', '#ad973e'];
    var colors = colorsOne;

    function changeColors() {
      if (colors[0] === '#009FD6') {
        colors = colorsTwo;
        circles.forEach(function (circle, index) {
          circle.style.backgroundColor = colors[index % colors.length];
        });
      } else {
        colors = colorsOne;
        circles.forEach(function (circle, index) {
          circle.style.backgroundColor = colors[index % colors.length];
        });
      }
    }

    setInterval(changeColors, 5000);

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    // Function to center the circles in the middle of the screen
    function centerCircles() {
      coords.x = window.innerWidth / 2;
      coords.y = window.innerHeight / 2;
    }

    // Call centerCircles every 6 seconds
    setInterval(() => {
      setIsCentered((prevIsCentered) => {
        if (prevIsCentered) {
          centerCircles();
          return false;
        } else {
          return true;
        }
      });
    }, 6000);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.transform = `scale(${(circles.length - index) / circles.length}`;

        if (isCentered) {
          circle.style.left = x - 12 + 'px';
          circle.style.top = y - 12 + 'px';
          circle.x = x;
          circle.y = y;
        } else {
          // You can add any custom positioning logic when not centered here
        }

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.6;
        y += (nextCircle.y - y) * 0.6;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, [isCentered]);


  return (
        <div className="circleDiv">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      );
}
