import React from 'react'

export default function SkillsService() {
    function LoadingDiv({ loadingPercentage }) {
        const loadingStyle = {
          width: `${loadingPercentage * 10}%`,
        };
      
        return (
          <div className="loading-container">
            <div className="loading-bar" style={loadingStyle}></div>
          </div>
        );
      }
      
      function DataPointList({ dataPoints }) {
        return (
          <div className='loading-flex'>
            {dataPoints.map((dataPoint, index) => (
                <div key={index}>
                    {dataPoint.name} <span className='skill-per'>{dataPoint.number*10}%</span>
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
        <div className='skillservice' id='skill-service'>
            <h1 className='phoneNone'>Skills & Service</h1>
            <div className='phone-mini-div leftPad'>
                <h1>SKILLS & SERVICES</h1>
            </div>
            <p>Below are some of the services I can offer your Business:</p>

            <div className='service-p'>
                E-COMMERCE WEBSITES <span className='upFullstop serviceFullStop'>.</span> BUSINESS LANDING PAGES <span className='upFullstop serviceFullStop'>.</span> CUSTOM WEB APPLICATIONS  
                <span className='upFullstop serviceFullStop'>.</span>DOMAIN REGISTRATION AND HOSTING <span className='upFullstop serviceFullStop'>.</span> UI/UX DESIGN  <span className='upFullstop serviceFullStop'>.</span> LOGO MAKING   
                <span className='upFullstop serviceFullStop'>.</span>GOOGLE AND FACEBOOK BUSINESS ACCOUNT SET UP <span className='upFullstop serviceFullStop'>.</span> AND MANY MORE
            </div>

            <p>This a List of the Skills I posses to help fulfil your Project :</p>

            <DataPointList dataPoints={dataPoints} />
            <div id='skills-blank' className='blank'>fffffffffffffffffff<br/>ssssssssssssssssss</div>
        </div>
    )
}
