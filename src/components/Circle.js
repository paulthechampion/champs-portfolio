import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Circle() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 809px)',
  });

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

    // Event listener for mousemove
    window.addEventListener('mousemove', function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    // Event listener for touch start
    window.addEventListener('touchstart', function (e) {
        e.preventDefault(); // Prevent default touch behavior
        coords.x = e.touches[0].clientX;
        coords.y = e.touches[0].clientY;
        startingY = e.touches[0].clientY; // Store the starting Y position
      });
      
      let startingY = 0;
      
      // Event listener for touch move
      window.addEventListener('touchmove', function (e) {
        e.preventDefault(); // Prevent default touch behavior
        const newY = e.touches[0].clientY;
        
        // Calculate the change in Y position
        const deltaY = newY - startingY;
        
        // Adjust the Y position based on the swipe direction
        coords.x = e.touches[0].clientX;
        coords.y = e.touches[0].clientY + (deltaY > 0 ? 300 : -300);
      });
      
      // Event listener for touch end
      window.addEventListener('touchend', function (e) {
        // You can add any necessary touch end logic here
      });
      
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.transform = `scale(${(circles.length - index) / circles.length}`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.6;
        y += (nextCircle.y - y) * 0.6;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

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
