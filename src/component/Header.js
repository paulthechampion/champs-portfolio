import React from 'react'
import PhoneMenu from './PhoneMenu'
import Wolf from "./img/wolf.png"

const wolf =Wolf; 

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("SheaderDivID").style.top = "0";
    } else {
      document.getElementById("SheaderDivID").style.top = "-100px";
    }
  } 
  
export default function Header() {
    
    return (
        <header>
          

        <div className="headerDiv" id="home">
            <div className="logo">
           
          </div>
                    <a href="#aboutId" className="ahead">ABOUT </a>
                    <a href="#skillsId" className="ahead">SKILLS</a>
                    <a href="#portfID" className="ahead">PORTFOLIO</a>
                    <a href="[[" className="ahead">BLOG</a>
                    <a href="#contactID" className="ahead">CONTACT</a>
            

            
        </div>

        <div className="SheaderDiv" id="SheaderDivID">
        <div className="logoS">
          </div>
            <a href="#aboutId" className="aheadS">ABOUT </a>
            <a href="#skillsId" className="aheadS">SKILLS</a>
            <a href="#portfID" className="aheadS">PORTFOLIO</a>
            <a href="[[" className="aheadS">BLOG</a>
            <a href="#contactID" className="aheadS">CONTACT</a>
        </div>

        <div className="logoMenu">
          
          
        </div>

        <PhoneMenu/>
        </header>


        
    )
}
