import React from 'react'
import schwab from '../images/schwab.png'
import sandP from '../images/SandP.png'
import clownImg from '../images/clownchat.png'
import nadaPic from '../images/nadaPic.png'
import rubixPic from '../images/rubixPic.png'
import surveyPic from '../images/survey.jpg'
import todoPic from '../images/todo.png'
import peace from '../images/peace5.jpeg'
import daniel from '../images/davito.png'
import nadaMain from '../images/nadanew.png'

export default function Projects() {
    const projectsData = [ 
        {name: "S&P Global",skills:["Vue Js", "Node Js", "C#", "HTML", "CSS"], img: sandP, link: "https://www.spglobal.com/en/", words:"IHS Markit Ltd was an information services provider that completed a merger with S&P Global in 2022. Headquartered in London. I worked here fulltime, using different technologies mainly Javascript and C#"}, 
        {name: "Schwab.com", isApp: true, img: schwab, skills:["Vue Js", "Node Js", "C#", "HTML", "CSS"], link: "https://www.schwab.com/", words:"Schwab offers banking, commercial banking, investing and related services including consulting, and wealth management advisory services to both retail and institutional clients. While working in IHS Markit. I was part of a team tasked with helping build and manage the research tool section of Schwabs' web application"},
        {name: "PeaceMaker Autos LTD", skills:["ReactJS", "CSS", "JavaScript", "Node Js"], img: peace, link: "https://www.peacemakerautos.com/",github : "https://github.com/paulthechampion/peacemaker", words:"This is a simple and Exquisite Landing and Contact Website for PeaceMaker Autos LTD. PeaceMaker Autos LTD is your one-stop destination for high-quality used cars and premium car parts, specializing in the acquisition, salvage, refurbishment, and sale of top-tier automotive components."}, 
        {name: "Davito Immigration Services", skills:["ReactJS", "CSS", "JavaScript", "Node Js", "Express"], img: daniel, link: "https://www.davitoservices.com",github : "https://github.com/paulthechampion/Davito-services", words:"A Canadian Immigration company focused on helping Migrating individuals to Cananda, manage their status and any other immigration needs. This website was created using React JS, Node JS and Express"},
        {name: "Clown Chat", isApp: true, img: clownImg, skills:["ReactJS", "CSS", "JavaScript", "Node Js", "Express", "MongoDB", "Socket.IO"], link: "https://clownchat.herokuapp.com/",github : "https://github.com/paulthechampion/ClownChat", words:"A comical messaging app, created using Express, Node js, Ejs view engine and Socket.io"},
        {name: "NADA Create", isApp: true, img: nadaMain, skills:["CSS", "JavaScript", "Node Js", "Express","React Js","Redux", "MongoDB", "Passport Js"], link: "https://nada-create.herokuapp.com/", github: "https://github.com/paulthechampion/nada-create", words:"Nada Create is an ongiong Ecommerce company which sells sportwears, especially that of soccer. This Application is being created using Node js, Express, Ejs for the view engine, Mongodb, Paystack for the Payment integration system and many more. This app is current under a full reconstruction"}, 
        {name: "AbdulAuwal.com", img: nadaPic, skills:["CSS", "JavaScript", "Node Js", "Express","React Js"], link: "https://www.abdulauwal.com/",github : "https://github.com/paulthechampion/nada", words:"A personal portfolio website for the most amazing UI/Ux Developer out there right now, check it out!!!. It was created using React JS, Node Js and Express"},
        {name: "Read Rubixx", isApp: true, img: rubixPic, skills:["EJS","CSS", "JavaScript", "Node Js", "Express","PDF Js", "MongoDB"], link: "https://rubixx.herokuapp.com/",github : "https://github.com/paulthechampion/rubix", words:"Rubixx is a Full-stack online book library, it saves authors and their books. Also enables users to read books. This as created using the MERN stack as well as PDF.js library to read the books"},  
        {name: "Emaily",  isApp: true, img: surveyPic, skills:["CSS", "JavaScript", "Node Js", "Express","React Js","Redux", "MongoDB",], link: "https://email-dev-list.herokuapp.com",github : "https://github.com/paulthechampion/email-list", words:"Emaily is a survey dispatch service, it enables the users to send surveys to a series of emails and receive feedback. This app is still in the test phase, it was created using Mongodb, Express Js, React Js, Redux, Redux Forms, Stripe for payment integration, SendGrid,Node js and many more"}, 
        {name: "Todo App", isApp: true, img: todoPic, skills:["CSS", "JavaScript", "Node Js", "Express","React Js", "MongoDB",], link: "https://champs-todo.herokuapp.com",github : "https://github.com/paulthechampion/todoApp", words:"A Full-stack Todo app, saves Todo tasks and arranges them in a tabular format"}
    ]
    return (
        <div className='projects' id='projects'>
            <h1 className='phoneNone appear'>Projects</h1>
            <div className='phone-mini-div leftPad project-phone appear'>
                <h1>PROJECTS</h1>
            </div>
    
            <div>
                {projectsData.map((project, index) => (
                    <div className='project-card appear' key={index} id={`project${index}`}>
                        <div>
                            <img src={project.img} alt={project.name} />
                        </div>
                        <div>
                            <h2>{project.name} <i className="fas fa-arrow-up white"></i></h2>
                            <p>{project.words}</p>
                            {project.skills.map((skill, skillIndex) => (
                            <button key={skillIndex} className='experience-btn'>{skill}</button>
                            ))}
                            <div className='project-link-div'>
                                {project.github?<a href={project.github} target='_blank' className='project-link'>GitHub <i className="fas fa-arrow-up"></i></a> : null}
                                
                                <a href={project.link} target='_blank' className='project-link'>{project.isApp ? 'WebApp' : 'Website'} <i className="fas fa-arrow-up"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
}
