import React,{Component, useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import picA from "./img/about.jpg"
import Css from "./img/CSS.3.png"
import Git from "./img/git.jpg"
import GitH from "./img/github.png"
import Hero from "./img/heroku.png"
import Html from "./img/html.png"
import Js from "./img/Javascript.png"
import Jq from "./img/jquery.jpg"
import Mon from "./img/mongodb.png"
import Nod from "./img/node.png"
import Ps from "./img/ps-logo.png"
import Rea from "./img/react.jpg"
import Rest from "./img/rest.jpg"
import Port from "./Portfolio"
import Form from "./form"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

import Ani from "./img/chat-icon.jpg"
import davito from "./img/canada-flag.jpeg"
import keer from "./img/kreer.jpg"
import todoPic from "./img/todo.png"
import ruixPic from "./img/rubixx.png"
import nadaPic from "./img/nada-nada.jpg"
import surveyPic from "./img/survey.jpg"
import usingLaptop from "./img/using-laptop.png" 
import sun from "./img/sun-solid.png"
import earth from "./img/enge.gif"
import oldPhone from "./img/old-phone.png"
import halfMoon from "./img/half-moon.png"
import halfSun from "./img/half-sun.png"
import darkMoon from "./img/dark-half-moon.png"
import logoBrown from "./img/pdc-medal-background.png"
import logoWhite from "./img/pdc-medal-no.png"
import miniMoon from "./img/mini-moon.png"
import ihs from "./img/ihs.png"
import schwab from "./img/schwab.png"
import myCode from "./img/myCode.png"


const myPic1=Ani





export default function Main() {
    const [date, setDate] = useState(new Date())
    const [projects, setProjects] = useState({name: "IHS Markit now part of S&P Global", img: ihs, link: "https://nada-create.herokuapp.com/", github: "https://github.com/paulthechampion/nada-create", words:"Nada Create is an ongiong Ecommerce company which sells sportwears, especially that of soccer. This Application is being created using Node js, Express, Ejs for the view engine, Mongodb, Paystack for the Payment integration system and many more"})
    const [activeProject, setActiveProject] = useState("IHS Markit now part of S&P Global")
    const [cardFlipped, setCardFlipped] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [activeH2, setActiveH2] = useState(null)
    const ref = React.useRef(null)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 603px)'
      })

    const nth = function(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
    }

    const day = new Intl.DateTimeFormat("en-GB", {
                    day:"numeric"
                }).format(date)
    
    const dateNth = nth(day)

    function toggleProjects (event,projects) {
        var card = ref.current
        activeClass(event)
        if(cardFlipped) {
            setCardFlipped(false)
            setProjects({name:projects.name, img: projects.img, link: projects.link, github: projects.github, words:projects.words })
            setActiveProject(projects.name)
            card.classList.toggle("card_inner-flip")
        } else {
            if(activeProject === projects.name) {
                return
            }
            card.classList.toggle("card_inner-flipX")
            setProjects({name:projects.name, img: projects.img, link: projects.link, github: projects.github, words:projects.words })
            setActiveProject(projects.name)
        }

        window.location.href = "#inner"
        
    }

    function toggleCardFlip() {
        var card = ref.current
        if(cardFlipped){
            card.classList.remove("card_inner-flipX")
            card.classList.toggle("card_inner-flip")
            setCardFlipped(false)
        }else{
            card.classList.remove("card_inner-flipX")
            card.classList.toggle("card_inner-flip")
            setCardFlipped(true)
        }

        window.location.href = "#inner"
    }
    function activeClass(event) {
        if(activeH2) {
            const newActiveH2 = event.target
            if(darkMode) {
                activeH2.style.color="#D07D01"
                newActiveH2.style.color="white"
                
            } else {
                activeH2.style.color="white"
                newActiveH2.style.color="#D07D01"
            }
            setActiveH2(newActiveH2)
        }
        return
    }


    function toggleDarkLight() {
        const toggleDiv = document.getElementById("toggle-dark-light")
        const mainDiv = document.getElementById("toggle-main-div")
        const roundDiv = document.getElementById("toggle-mini-div")
        const logoLink = document.getElementById("logoLink")
        const slogoLink = document.getElementById("SlogoLink")
        const background = document.getElementById("main-with-background")
        const lightWhite = document.getElementsByClassName("lightWhite")
        const lightBrown = document.getElementsByClassName("lightBrown")
        const lightBrownBoder = document.getElementsByClassName("lightBrownBoder")
        const list = document.getElementById("lightBrownList")
        const contactBtn = document.getElementById("contactBtn")
        const currentH2 = document.getElementsByClassName("active")[0]
        const fakeBulletPoint = document.getElementById("fakeBulletPoint")
        const sunMoon = document.getElementById("sunMoon")
        const phoneMenuMainDiv = document.getElementById("phoneMenuId")

        if(darkMode) {
            background.style.backgroundImage = "url(./moon-background.png)"
            roundDiv.classList.remove("toggle-slide-left")
            toggleDiv.style.backgroundColor = "white";
            logoLink.innerHTML = `<img src=${logoWhite} alt="Medal thing" height="50px"/>`
            slogoLink.innerHTML = `<img src=${logoWhite} alt="Medal thing" height="50px"/>` 
            sunMoon.src = sun

            if (isDesktopOrLaptop) {
                mainDiv.style.border = "5px solid #46879D";
                roundDiv.style.border = "5px solid #44739C";
                roundDiv.innerHTML = `<img src=${halfSun} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img" style= "margin: auto;text-align: center;margin-top: 8.5px;display: block;height: 25px;"/>` 
            } else {
                mainDiv.style.border = "2px solid #46879D";
                roundDiv.style.border = "2px solid #44739C";
                roundDiv.innerHTML = `<img src=${halfSun} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img" style= "margin: auto;text-align: center;margin-top: 4px;display: block;height: 18px;"/>` 
                phoneMenuMainDiv.style.backgroundImage = "url(phone-background.png)"
            }
            for(var i = 0; i < lightWhite.length; i++) {
                lightWhite[i].style.color = "white"
                if(lightWhite[i].localName === "h2" || lightWhite[i].classList.contains("ahead") || lightWhite[i].classList.contains("aheadS") || lightWhite[i].classList.contains("contactH3")){
                   
                    lightWhite[i].classList.remove("hoverWhite")
                    lightWhite[i].classList.add("hoverBrown")
                }
            }
            for(var i = 0; i < lightBrown.length; i++) {
                lightBrown[i].style.color = "#D07D01"
                if(lightBrown[i].localName === "a") {
                    lightBrown[i].classList.remove("hoverBrown")
                    lightBrown[i].classList.add("hoverWhite")
                }
            }
            for(var i = 0; i < lightBrownBoder.length; i++) {
                lightBrownBoder[i].style.borderTop = "1px solid #D07D01"
            }
            list.lastChild.style.borderBottom = "1px solid #D07D01"
            contactBtn.style.border = "2px solid white"
            contactBtn.style.color = "white"
            fakeBulletPoint.classList.add("white")
        }
        else{
            
            toggleDiv.style.backgroundColor = "black";
            background.style.backgroundImage = "none"
            roundDiv.classList.add("toggle-slide-left")
            logoLink.innerHTML = `<img src=${logoBrown} alt="Medal thing" height="50px"/>`
            slogoLink.innerHTML = `<img src=${logoBrown} alt="Medal thing" height="50px"/>` 
            sunMoon.src = miniMoon
            if (isDesktopOrLaptop) {
                mainDiv.style.border = "5px solid #5A7A42";
                roundDiv.style.border = "5px solid #5A7A42";
                roundDiv.innerHTML = `<img src=${halfMoon} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img" style= "margin: auto;text-align: center;margin-top: 10px;display: block;height: 20px;"/>`  
            } else {
                mainDiv.style.border = "2px solid #5A7A42";
                roundDiv.style.border = "2px solid #5A7A42";
                roundDiv.innerHTML = `<img src=${halfMoon} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img" style= "margin: auto;text-align: center;margin-top: 7px;display: block;height: 11px;"/>`  
                phoneMenuMainDiv.style.backgroundImage = "none"
            }
            for(var i = 0; i < lightWhite.length; i++) {
                lightWhite[i].style.color = "#D07D01"
                if(lightWhite[i].localName === "h2" || lightWhite[i].classList.contains("ahead") || lightWhite[i].classList.contains("aheadS") || lightWhite[i].classList.contains("contactH3")){
                    
                    lightWhite[i].classList.remove("hoverBrown")
                    lightWhite[i].classList.add("hoverWhite")
                }
            }
            for(var i = 0; i < lightBrown.length; i++) {
                lightBrown[i].style.color = "white"
                if(lightBrown[i].localName === "a") {
                    lightBrown[i].classList.remove("hoverWhite")
                    lightBrown[i].classList.add("hoverBrown")
                }
            }
            for(var i = 0; i < lightBrownBoder.length; i++) {
                lightBrownBoder[i].style.borderTop = "1px solid white"
            }
            list.lastChild.style.borderBottom = "1px solid white"
            contactBtn.style.border = "2px solid #D07D01"
            contactBtn.style.color = "#5A7A42"
        }
        setActiveH2(currentH2)
        setDarkMode(!darkMode)
    }

    const projectsData = [ 
                            {name: "IHS Markit now part of S&P Global", img: ihs, link: "https://nada-create.herokuapp.com/", github: "https://github.com/paulthechampion/nada-create", words:"Nada Create is an ongiong Ecommerce company which sells sportwears, especially that of soccer. This Application is being created using Node js, Express, Ejs for the view engine, Mongodb, Paystack for the Payment integration system and many more"}, 
                            {name: "Schwab.com", img: schwab, link: "https://nada-create.herokuapp.com/", github: "https://github.com/paulthechampion/nada-create", words:"Nada Create is an ongiong Ecommerce company which sells sportwears, especially that of soccer. This Application is being created using Node js, Express, Ejs for the view engine, Mongodb, Paystack for the Payment integration system and many more"}, 
                            {name: "Kreer", img: keer, link: "https://www.kreer.ng/",github : "", words:"Keer Ng is a company based in Nigeria that offers business development services"},
                            {name: "Davito Immigration Services", img: davito, link: "https://www.davitoservices.com",github : "https://github.com/paulthechampion/Davito-services", words:"A Canadian Immigration company"},
                            {name: "NADA Create", img: nadaPic, link: "https://nada-create.herokuapp.com/", github: "https://github.com/paulthechampion/nada-create", words:"Nada Create is an ongiong Ecommerce company which sells sportwears, especially that of soccer. This Application is being created using Node js, Express, Ejs for the view engine, Mongodb, Paystack for the Payment integration system and many more"}, 
                            {name: "Read Rubixx", img: ruixPic, link: "https://rubixx.herokuapp.com/",github : "https://github.com/paulthechampion/rubix", words:"Rubixx is a Full-stack online book library, it saves authors and their books. Also enables users to read books. This as created using the MERN stack as well as PDF.js library to read the books"},  
                            {name: "Emaily", img: surveyPic, link: "https://email-dev-list.herokuapp.com",github : "https://github.com/paulthechampion/email-list", words:"Emaily is a survey dispatch service, it enables the users to send surveys to a series of emails and receive feedback. This app is still in the test phase, it was created using Mongodb, Express Js, React Js, Redux, Redux Forms, Stripe for payment integration, SendGrid,Node js and many more"}, 
                            {name: "Clown Chat", img: myPic1, link: "https://clownchat.herokuapp.com/",github : "https://github.com/paulthechampion/ClownChat", words:"A comical messaging app, created using Express, Node js, Ejs view engine and Socket.io"},
                            {name: "Todo App", img: todoPic, link: "https://champs-todo.herokuapp.com",github : "https://github.com/paulthechampion/todoApp", words:"A Full-stack Todo app, saves Todo tasks and arranges them in a tabular format"}
                        ]

    return (
        <main className="mainSturv">
                <div className='main-with-background' id="main-with-background"> 
                    <img src={darkMoon} className="half-dark-moon" /> 
                    <div className='date-div lightWhite slide-in from-right fade-in'> 
                        <span className='day lightWhite slide-in from-left fade-in'>{day}</span>
                        <span className='rest-of-day lightWhite slide-in from-right fade-in'>{dateNth} {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "short",
                            }).format(date)
                        }
                        <hr className='lightBrown'/>
                        
                        <span className='available lightWhite slide-in from-right fade-in'>
                            available <br/>
                            <span className='forWork lightWhite slide-in from-right fade-in'>for work</span>
                        </span>
                        </span>
                        
                    </div>

                    <div className='flex short-about lightWhite'>
                        <div className='lightWhite slide-in from-left fade-in'>
                            FULL STACK <br/>
                            DEVELOPER
                        </div>
                        <div>
                            <div className='typewriter-div lightWhite'>
                                <p id="typewriter" className='lightWhite'></p>
                            </div>
                            <a className='contact-btn' href="#contactID" id='contactBtn'>CONTACT ME</a>
                        </div>
                    </div>

                    <div className='toggle-dark-light  fade-in' id='toggle-dark-light'>
                        <div className='toggle-main-div' id="toggle-main-div" onClick={()=>{toggleDarkLight()}}>
                            <div className='toggle-mini-div' id="toggle-mini-div">
                                <img src={halfSun} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img"/>
                            </div>
                        </div>

                    </div>

                    <div className="flex main-about lightWhite" id="aboutId">
                        <div className='lightWhite slide-in from-left fade-in'>
                            I am a full-stack developer working in Toronto, Canada, with a background largely 
                            in Javascript and some knowledge of C#. I have a strong sense of commitment to my job 
                            and a creative way of thinking when it comes to developing web applications and user-friendly
                            websites that have clear and intelligible code. I am determined to diversify my line of work and 
                            am constantly looking for challenges. I look forward to working with you and your organization in the 
                            future. Please feel free to contact me, I will respond to you as soon as I can. I appreciate you visiting my page.
                        </div>
                        <div className='slide-in from-right fade-in'>
                            <div className='js-tag'>
                                <img src={myCode} className="zoom myCode" data-magnify-src={myCode} id="zoom"/>
                            </div> 
                        </div>
                    </div>

                </div>
                <article className="articleSec" id="skillsId">
                    <div className="skills">
                        <h3 className="sHead lightWhite fade-in">SKILLS</h3>
                        <div className='flex skills-mini-div'>
                            {isDesktopOrLaptop ?
                            <>
                                <div className="table-container lightWhite slide-in from-left fade-in">
                                    <table>
                                        <tbody className='lightWhite'>
                                            <tr>
                                            <td className='lightWhite'>1</td>
                                            <td className='lightWhite'>Test</td>
                                            <td className='lightWhite'>Demo</td>
                                            </tr>
                                            <tr>
                                            <td className='lightWhite'>2</td>
                                            <td className='lightWhite'>Test</td>
                                            <td className='lightWhite'>Demo</td>
                                            </tr>
                                            <tr>
                                            <td className='lightWhite'>3</td>
                                            <td className='lightWhite'>Test</td>
                                            <td className='lightWhite'>Demo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className='slide-in from-right fade-in'>
                                    <img src={sun} alt="Sun or Moon" className='sun-moon' id="sunMoon"></img>
                                    <img src={usingLaptop} alt="using laptop" className='using-laptop'></img>
                                </div>
                            </>
                            :
                                <>
                                    <div className='slide-in from-left fade-in'>
                                        <img src={sun} alt="Sun or Moon" className='sun-moon' id="sunMoon"></img>
                                        <img src={usingLaptop} alt="using laptop" className='using-laptop'></img>
                                    </div>
                                    <div className="table-container lightWhite slide-in from-right fade-in">
                                        <table>
                                            <tbody className='lightWhite'>
                                                <tr>
                                                <td className='lightWhite'>1</td>
                                                <td className='lightWhite'>Test</td>
                                                <td className='lightWhite'>Demo</td>
                                                </tr>
                                                <tr>
                                                <td className='lightWhite'>2</td>
                                                <td className='lightWhite'>Test</td>
                                                <td className='lightWhite'>Demo</td>
                                                </tr>
                                                <tr>
                                                <td className='lightWhite'>3</td>
                                                <td className='lightWhite'>Test</td>
                                                <td className='lightWhite'>Demo</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </>

                            }
                            
                        </div>
                        <p className='lightWhite fade-in'>
                            I can deliver quality finished projects with html and css in a reasonable timeframe.I can deliver quality finished projects with html and css in a reasonable timeframe.I can deliver quality finished projects with html and css in a reasonable timeframe.fp3irihf0winfwnrifnw-9gnw-9ngI can deliver quality finished projects with html and css in a reasonable timeframe.j467jr67j67j6r7j67j76j7jI can deliver quality finished projects with html and css in a reasonable timeframe.wrfrrgethetwh56j57kj67j67I can deliver quality finished projects with html and css in a reasonable timeframe.j67j76j5e7je56jtyrhtgrhthjfhmgj,,,,,,,,,,,,,,g,jgj,,yukuI can deliver quality finished projects with html and css in a reasonable timeframe.,iy,f,yi,iy,yu,r6u,tu
                        </p>

                        <img src={earth} alt="Earth Spin" className='relax-fish fade-in'/>
                    </div>

                    <section className="projectSec" id="portfID">
                        <h3 className="sHead projectsH3 lightWhite fade-in">PROJECTs</h3>
                        <div className='flex project-mini-div'>
                        {isDesktopOrLaptop ? 
                            <>
                                <div className='slide-in from-right fade-in'>
                                    <Port port={{img:projects.img, link:projects.link, github:projects.github,
                                    words:projects.words,
                                    name:projects.name}} refs={ref}/>
                                </div>
                                <div className='project-list-div slide-in from-left fade-in'>
                                    <hr className='lightBrown'/>
                                    <ul id='lightBrownList'>
                                        {projectsData.map(projects =>{
                                        return (
                                            <li key={projects.name} className="lightBrownBoder">
                                                {projects.name === activeProject ? <span id="fakeBulletPoint" className={`fakeBulletPoint ${darkMode ? "lightWhite": "lightBrown"}`}>*</span>:null}
                                                <h2 className={`${projects.name === activeProject ? "active lightBrown projectH2" : darkMode ? "lightWhite projectH2 hoverWhite": "lightWhite projectH2 hoverBrown"}`} onClick={(event)=>{toggleProjects(event,projects)}}>{projects.name}</h2>
                                                {
                                                    projects.name === activeProject ? cardFlipped ?<button  className="project-btn project-btn-close" onClick={()=>{toggleCardFlip()}}>
                                                        CLOSE </button> : 
                                                        <button  className="project-btn project-btn-view" onClick={()=>{toggleCardFlip()}}>OPEN</button>: null
                                                }
                                            </li>
                                        );
                                        })}
                                    </ul>
                                </div>
                            </>
                        :
                            <>
                                <div className='project-list-div slide-in from-right fade-in'>
                                    <hr className='lightBrown'/>
                                    <ul id='lightBrownList'>
                                        {projectsData.map(projects =>{
                                        return (
                                            <li key={projects.name} className="lightBrownBoder">
                                                {projects.name === activeProject ? <span id="fakeBulletPoint" className={`fakeBulletPoint ${darkMode ? "lightWhite": "lightBrown"}`}>*</span>:null}
                                                <h2 className={`${projects.name === activeProject ? "active lightBrown projectH2" : darkMode ? "lightWhite projectH2 hoverWhite": "lightWhite projectH2 hoverBrown"}`} onClick={(event)=>{toggleProjects(event,projects)}}>{projects.name}</h2>
                                                {
                                                    projects.name === activeProject ? cardFlipped ?<button  className="project-btn project-btn-close" onClick={()=>{toggleCardFlip()}}>
                                                        CLOSE </button> : 
                                                        <button  className="project-btn project-btn-view" onClick={()=>{toggleCardFlip()}}>OPEN</button>: null
                                                }
                                            </li>
                                        );
                                        })}
                                    </ul>
                                </div>
                                <div className='slide-in from-left fade-in'>
                                    <Port port={{img:projects.img, link:projects.link, github:projects.github,
                                    words:projects.words,
                                    name:projects.name}} refs={ref}/>
                                </div>

                            </>
                        }
                            
                        </div>   
                    </section>

                    <section className="contactSec" id="contactID">
                    <div  className='flex contact-flex-div'>
                        <div className='slide-in from-left fade-in'>
                            <h2 className='sHead lightWhite'>CONTACTs</h2>
                            <hr className='lightBrown'/>
                            <div className='contact-mini-div flex'>
                                <div className='flex'>
                                    <div>
                                        <h3 className='sHead contactH3 lightWhite'>tel/mail</h3>
                                    </div>
                                    <div className='contact-links-div'>
                                        <a href="tel:+14372362898" className='lightBrown'>{'+1(437)236-2898'}</a><br/>
                                        <a href="mailto:enwerempaulo@gmail.com" className='lightBrown'>enwerempaulo@gmail</a>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <h3 className='sHead contactH3 lightWhite'>social media</h3>
                                    </div>
                                    <div className='contact-links-div'>
                                        <a href='https://www.linkedin.com/in/paul-enwerem-9a307518b/' className='lightBrown'>linkedin</a> <br/>
                                        <a href='https://github.com/paulthechampion' className='lightBrown'>github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide-in from-right fade-in'>
                            <img src={oldPhone} alt="Old looking Phone" />
                        </div>
                    </div>
                    
                    </section>
                    </article>
               
            
        </main>
    )
    
            
} 

document.addEventListener("DOMContentLoaded", function() { 
    typeWriter()
  });

    var q = 0;
    var txt = 'HELLO I AM PAUL ENWEREM BUT YOU CAN CALL ME CHAMPION....';
    var speed = 150;

    function typeWriter() {
        if (q < txt.length) {
            document.getElementById("typewriter").innerHTML += txt.charAt(q);
            q++;
            setTimeout(typeWriter, speed);
        } else {
            q = 0
            document.getElementById("typewriter").innerHTML = "";
            setTimeout(typeWriter, speed);
        }
    }

