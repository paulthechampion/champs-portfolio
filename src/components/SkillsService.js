import React, { useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../images/siphle-nobg.png'
import { moveDown } from './swipe';

export default function SkillsService() {
      const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 809px)'
      });

      function LoadingDiv({ loadingPercentage }) {
        const loadingStyle = {
          width: '0%', // Initially, set the width to 0%
          opacity: 0, // Initially, set opacity to 0
        };

        const loadingRef = useRef(null);

        useEffect(() => {
          const rootMargin = isDesktopOrLaptop ? '0px 0px -100px 0px' : '0px 0px 10px 0px';
          const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin,
            threshold: 0.1 // Trigger when 10% of the element is visible
          });

          if (loadingRef.current) {
            observer.observe(loadingRef.current);
          }

          return () => {
            if (loadingRef.current) {
              observer.unobserve(loadingRef.current);
            }
          };

          function handleIntersection(entries) {
            entries.forEach((entry) => {
              const loadingBar = entry.target;
              if (entry.isIntersecting) {
                const width = loadingPercentage * 10; // Set width to loadingPercentage * 10
                loadingBar.style.transition = 'width 1.5s ease-in, opacity 0.5s ease-in';
                loadingBar.style.width = `${width}%`;
                loadingBar.style.opacity = 1; // Set opacity to 1 when in the viewport
              } else {
                loadingBar.style.width = '0%';
                loadingBar.style.opacity = 0;
              }
            });
          }
        }, [loadingPercentage, isDesktopOrLaptop]);

        return (
          <div className="loading-container">
            <div className="loading-bar appear" style={loadingStyle} ref={loadingRef}></div>
          </div>
        );
      }

      function DataPointList({ dataPoints }) {
        return (
          <div className="loading-flex">
            {dataPoints.map((dataPoint, index) => (
              <div key={index} className="loading">
                {dataPoint.name} <span className="skill-per">{dataPoint.number * 10}%</span>
                <LoadingDiv loadingPercentage={dataPoint.number} />
              </div>
            ))}
          </div>
        );
      }
      const dataPoints = [
        { name: "HTML 5", number: 10 },
        { name: "C#", number: 4 },
        { name: "Artificial Intelligence", number: 8 },
        { name: "ReactJS", number: 9.5 },
        { name: "NodeJS", number: 9.5 },
        { name: "GIT", number: 7.5 },
        { name: "ExpressJS", number: 9 },
        { name: "MongoDB", number: 7 },
        { name: "JQuery", number: 7 },
        { name: "JIRA", number: 8 },
        { name: "Heroku", number: 10 },
        { name: "VueJS", number: 7 },
        { name: "Visual Studio", number: 9 },
        { name: "Amazon Web Service", number: 5 },
        { name: "CSS 3", number: 10 },
        { name: "JavaScript", number: 9.5 },
        { name: "BitBucket", number: 8 },
        { name: "Jenkins", number: 8 },
        // Add more data points here
      ];
    return (
        <div className='skillservice section' id='skill-service'>
            <h1 className='phoneNone appear'>Skills & Service</h1>
            <div className='phone-mini-div extraWidth leftPad appear'>
                <h1>SKILLS & SERVICES</h1>
                <img src={logo} alt='Logo' className='phone-logo'  onClick={() => {moveDown('left-rail', 'skill-service')}}/>
            </div>
            <p>As a highly skilled software developer, I specialize in harnessing the latest web technologies
               and integrating Artificial Intelligence to create cutting-edge websites and web 
               applications for my clients. With a passion for innovation and a commitment to 
               excellence, I bring a wealth of experience to every project. My mission is to 
               deliver solutions that not only meet but exceed your expectations, ensuring your 
               digital presence is at the forefront of technology and functionality. Whether you're
                looking to enhance user experiences, automate processes, or optimize your online platform, 
                I'm here to make your vision a reality through the power of software development.
              </p>
            <p>Below are some of the services I can offer your Business:</p>

            <div className='service-p appear'>
                E-COMMERCE WEBSITES <span className='upFullstop serviceFullStop'>.</span> BUSINESS LANDING PAGES <span className='upFullstop serviceFullStop'>.</span>SEARCH ENGINE OPTIMIZATION <span className='upFullstop serviceFullStop'>.</span> CUSTOM WEB APPLICATIONS  
                <span className='upFullstop serviceFullStop'>.</span>DOMAIN REGISTRATION AND HOSTING <span className='upFullstop serviceFullStop'>.</span> UI/UX DESIGN  <span className='upFullstop serviceFullStop'>.</span> LOGO MAKING   
                <span className='upFullstop serviceFullStop'>.</span>GOOGLE AND FACEBOOK BUSINESS ACCOUNT SET UP <span className='upFullstop serviceFullStop'>.</span> AND MANY MORE
            </div>

            <p className='appear'>This a List of the Skills I posses to help fulfil your Project :</p>

            <DataPointList dataPoints={dataPoints} />
            <div id='skills-blank' className='blank'>fffffffffffffffffff<br/>ssssssssssssssssss</div>
        </div>
    )
}
