import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import SkillsService from './SkillsService'
import logo from '../images/siphle-nobg.png'
import { moveDown } from './swipe';
import resume from'../images/pauls-resume.pdf'

export default function RightRail() {
    
    const experienceSkills = ['HTML', 'CSS', 'BitBucket','NodeJS', 'React JS']
    return (
    <div className='right-rail'>
        <div className='about section' id='about'>
            <div className='phone-mini-div appear'>
                <h1>ABOUT</h1>
                <img src={logo} alt='Logo' className='phone-logo' onClick={() => {moveDown('left-rail', 'about')}}/>
            </div>
            <p className='appear'>
                In 2018, I began my journey into web development, with a strong focus
                on <span className='blue'>Full Stack JavaScript Development.</span> Over the past 5 years, I've built a diverse portfolio
                of projects for various clients, specializing in the <span className='blue'>MERN stack 
                (MongoDB, Express, ReactJS, NodeJS), </span>  and staying at the forefront of web development trends.
            </p>

            <p className='appear'>
                My foundational knowledge comes from learning in HTML, CSS, JavaScript and C# from 
                New Horizon Nigeria and Cnadian Business College, later dropped out to be self-taught. Beyond coding, I excel in creating responsive designs, ensuring seamless user 
                experiences. My portfolio includes <span className='gold'>eCommerce websites, Investment research tools web applications, 
                Chat applications, Business landing pages, and more, </span>  showcasing a multifaceted skill set that combines 
                technical expertise with creative problem-solving. 
            </p>

            <p className='appear'>
                Collaborating with cross-functional teams and clients, I effectively <span className='blue'>transform ideas into scalable websites 
                and web applications</span> while remaining committed to embracing the latest in technology and offering multiple other Technological Services to Businesses.
            </p>
        </div>

        <div className='experience section' id='experience'>
            <h1 className='phoneNone appear'>Experience</h1>
            <div className='phone-mini-div extraWidth leftPad appear'>
                <h1>EXPERIENCE</h1>
                <img src={logo} alt='Logo' className='phone-logo'  onClick={() => {moveDown('left-rail', 'experience')}}/>
            </div>
            <div className='experienceFlex'>
                <div className='appear'>
                    2021 ---- PRESENT
                </div>
                
                <div className='appear'>
                    <h2>Software Developer <span className='upFullstop'>.</span>S&P Global</h2>
                    <p>
                        Develop and maintain applications for a variety of clients, 
                        where the focus is on enhancing customer interactions, 
                        resolving bugs, and introducing innovative features. 
                        This work involves close collaboration within a 14-member 
                        Agile team dedicated to Schwab.com, a web application for 
                        investment and financial services. Utilizing key technologies 
                        such as C#, Vue JS, Node JS, and Jest unit tests, the aim is to deliver high-quality and robust solutions.
                    </p>
                    <p>
                        Simultaneously, there's a strong emphasis on improving accessibility, with the goal of 
                        meeting WCAG 2.0 recommendations to ensure a more inclusive user experience. This commitment 
                        extends to the development of new features like Stock and ETF Charts, Funds Compare tools, and 
                        financial planning calculators, enriching the web application's capabilities.
                    </p>

                    <div>
                        {experienceSkills.map((experience,index) => (
                            <button key={index} className='experience-btn'>{experience}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='experienceFlex'>
                <div className='appear'>
                     2020 ---- 2021
                </div>
                
                <div className='appear'>
                    <h2>Software Developer <span className='upFullstop'>.</span>Davito Immigration Service</h2>
                    <p>
                        This project involved building the company's website to showcase services and certifications, 
                        making the immigration process to Canada more user-friendly. Leading a team of five, including 
                        developers, a UI/UX designer, a QA tester, and a project manager, I established a robust coding 
                        infrastructure. We followed UI/UX design patterns from Figma to meet the company's requirements. 
                        Development primarily used the MERN stack (MongoDB, Express JS, Node JS, and React JS), and I 
                        managed deployment with Heroku and GoDaddy while ensuring site security with SSL certificates. 
                        GIT was employed for version control to maintain code synchronization and team collaboration.
                    </p>
                    <p>
                        Simultaneously, there's a strong emphasis on improving accessibility, with the goal of 
                        meeting WCAG 2.0 recommendations to ensure a more inclusive user experience. This commitment 
                        extends to the development of new features like Stock and ETF Charts, Funds Compare tools, and 
                        financial planning calculators, enriching the web application's capabilities.
                    </p>

                    <div>
                        {experienceSkills.map((experience,index) => (
                            <button key={index} className='experience-btn'>{experience}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='resume-div' id='resume-div'><a href={resume} target='_blank' className='resume-link'>View Full Resume <i className="fas fa-arrow-right"></i></a></div>
            <div id='resume-blank' className='blank'>ssssssssssssssssss</div>
            </div>
           <SkillsService/>
           <Projects/>
           <Contact/>
        
    </div>
    )
}
