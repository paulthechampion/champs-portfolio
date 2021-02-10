import React,{Component} from 'react'
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
import Cat2 from "./img/immigration.jpg"
import keer from "./img/handshake.jpg"
import todoPic from "./img/todo.png"
import ruixPic from "./img/books.jpg"
import nadaPic from "./img/nada-title.png"

const myPic =picA
const myPic1=Ani

const CssL =Css
const JsL =Js
const JqL =Jq
const HtmlL =Html
const MonL =Mon
const NodL =Nod
const HeroL =Hero
const RestL =Rest
const ReaL =Rea
const PsL=Ps
const GitL =Git
const GitHL =GitH




export default function Main() {

   
    return (
        <main className="mainSturv">
                <div className="title">
                <h1 className="myName">PAUL ENWEREM</h1>
                <p className="full">FULL-STACK DEVELOPER</p>
                <a className="buttonClass" href="#contactID">CONTACT</a>
                </div>

                <section className="about" id="aboutId">
                    <div className="myPic">
                        <div className="picDiv">
                            <img src={myPic} alt="me" className="myPicimg"/>
                        </div>
                    </div>

                    <div className="aboutWrite">
                        <h3 className="sHead">ABOUT</h3>
                        <p className="begEnd">Greetings<br/></p>
                        My name is Paul Enwerem. I am a full-stack developer primarily experienced in Javascript, 
                        as well as some experience with PHP. 
                        I am passionate about my work and innovative in my thinking with regards to 
                        creating user friendly websites and web applicatons, using clean and understandable code.
                         I am always seeking challenges and driven to expand my work portfolio.
                        I look forward to any future interactions with you and your employer. 
                        Feel free to send me a message below and I will get back to you as soon as possible.
                    Thank you for viewing my page.<br/>
                    <p className="begEnd endP">-PaulTheChampion</p>
               </div>
                </section>
            <article className="articleSec" id="skillsId">
                <div className="skills">
                <h3 className="sHead">SKILLS</h3>
                <div className="forWrap">
                    
                    <div className="skillDiv">
                          <img src={HtmlL} alt="html logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                          <img src={CssL} alt="css logo" className="skillLogo cssLogo"/>
                    </div>
                    <div className="skillDiv">
                         <img src={JsL} alt="js logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                         <img src={JqL} alt="jq logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                         <img src={NodL} alt="Node logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                         <img src={ReaL} alt="React logo" className="skillLogo" />
                    </div>
                    <div className="skillDiv">
                         <img src={RestL} alt="Rest Api logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                        <img src={MonL} alt="Mongo logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                         <img src={GitL} alt="Git logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                         <img src={GitHL} alt="GitHub logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                        <img src={PsL} alt="PhotoShop logo" className="skillLogo"/>
                    </div>
                    <div className="skillDiv">
                        <img src={HeroL} alt="Heroku logo" className="skillLogo"/>
                    </div>
                    
                </div>
                </div>

                <section className="projectSec" id="portfID">
                    <h3 className="sHead">PORTFOLIO</h3>
                    <p className="portWrite">I have been blessed with
                    the opportunity to work with a few Businesses and with their
                    permission I have listed them below. Also Listed below are a couple 
                    of my personal Projects, Please if you have any feedback on how I can
                    make any of them better please ensure to give me some pointers, Thank You! 
                     </p>
                    <div className="projectss">
                      <Port port={{img: keer , link:"https://www.kreer.ng/", words:"necijepwopckcinepq", name:"Keer NG"}}    />
                      <Port port={{img:nadaPic, link:"https://nada-create.herokuapp.com/", words:"ojqecojojepcqopm" , name:"NADA Create"}}/>
                     <Port port={{img:ruixPic, link:"https://rubixx.herokuapp.com/", words:"ecpocopmcemie", name:"Read Rubixx"}}/> 
                     <Port port={{img:myPic1 , link:"https://clownchat.herokuapp.com/", words:"kleccmimpoecomeic", name:"Clown Chat"}}/>
                     <Port port={{img:Cat2, link:"https://www.davitoservices.com", words:"ojqecojojepcqopm" , name:"Davito Immigration"}}/> 
                      <Port port={{img:todoPic, link:"https://champs-todo.herokuapp.com", words:"ecpocopmcemie", name:"Todo App"}}/>
                    </div>     
                </section>

                <section className="contactSec" id="contactID">
                <h3 className="sHead phoneContact">CONTACT</h3>
                <div className="contactFlex">             
                <Form/>
                
                <div className="contactWrite chatDiv">
                    <h3 className="leftContact"><b>CONTACT</b></h3>
                    

                    <p className="chatWrite">Fill out this form and I will get back to you in
                        a few hours, or you can reach out to me on any of these 
                        platfroms
                    </p>
                    <div className="chatIconsDiv">
                    <a href="https://github.com/paulthechampion" className="iconLink" target="_blank">  <FaGithub className="chatIcons"/></a>
                   <a href="https://twitter.com/_championpaul"className="iconLink" target="_blank"> <FaTwitter className="chatIcons"/></a>
                   <a href="https://www.linkedin.com/in/enwerem-paul-9a307518b/"className="iconLink" target="_blank">  <FaLinkedin className="chatIcons"/></a>
                    </div>
                </div>
                </div>  
                    
                </section>
                </article>
               
            
        </main>
    )
    
   
            
} 

