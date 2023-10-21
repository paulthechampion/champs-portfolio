import React , { useEffect, useRef }from 'react'
import { useMediaQuery } from 'react-responsive'


export default function SkillsService() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 809px)'
  });

  function LoadingDiv({ loadingPercentage }) {
    const loadingStyle = {
      width: '0%' // Initially, set the width to 0%
    };

    const loadingRef = useRef(null);

    useEffect(() => {
      const rootMargin = isDesktopOrLaptop ? '0px 0px -250px 0px' : '0px 0px -20px 0px';
      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin,
        threshold: 0 // Trigger when 0% of the element is visible
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
          if (entry.isIntersecting) {
            const loadingBar = entry.target;
            const width = loadingPercentage * 10; // Set width to loadingPercentage * 10
            loadingBar.style.transition = 'width 1.5s ease-in';
            loadingBar.style.width = `${width}%`;
          } else {
            entry.target.style.width = '0%';
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
          <div key={index} className='loading'>
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
        { name: "ReactJS", number: 9.5 },
        { name: "NodeJS", number: 9.5 },
        { name: "GIT", number: 7.5 },
        { name: "ExpressJS", number: 9 },
        { name: "MongoDB", number: 7 },
        { name: "JQuery", number: 7 },
        { name: "JIRA", number: 8 },
        { name: "Heroku", number: 10 },
        { name: "VueJS", number: 7 },
        { name: "JSON Web Tokens", number: 6 },
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
            <div className='phone-mini-div leftPad appear'>
                <h1>SKILLS & SERVICES</h1>
            </div>
            <p>Below are some of the services I can offer your Business:</p>

            <div className='service-p appear'>
                E-COMMERCE WEBSITES <span className='upFullstop serviceFullStop'>.</span> BUSINESS LANDING PAGES <span className='upFullstop serviceFullStop'>.</span> CUSTOM WEB APPLICATIONS  
                <span className='upFullstop serviceFullStop'>.</span>DOMAIN REGISTRATION AND HOSTING <span className='upFullstop serviceFullStop'>.</span> UI/UX DESIGN  <span className='upFullstop serviceFullStop'>.</span> LOGO MAKING   
                <span className='upFullstop serviceFullStop'>.</span>GOOGLE AND FACEBOOK BUSINESS ACCOUNT SET UP <span className='upFullstop serviceFullStop'>.</span> AND MANY MORE
            </div>

            <p className='appear'>This a List of the Skills I posses to help fulfil your Project :</p>

            <DataPointList dataPoints={dataPoints} />
            <div id='skills-blank' className='blank'>fffffffffffffffffff<br/>ssssssssssssssssss</div>
        </div>
    )
}
