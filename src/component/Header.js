import React from 'react'
import PhoneMenu from './PhoneMenu'
import medal from "./img/pdc-medal-no.png"

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
          <a href="/#home" class="logo-link"> <img src={medal} alt="Medal thing" height="75px"/></a>
          </div>
                    <a href="#aboutId" className="ahead">ABOUT </a>
                    <a href="#skillsId" className="ahead">SKILLS</a>
                    <a href="#portfID" className="ahead">PORTFOLIO</a>
                    <a href="#contactID" className="ahead">CONTACT</a>
            

            
        </div>

        <div className="SheaderDiv" id="SheaderDivID">
        <div className="logoS">
        <a href="/#home" class="logo-link"><img src={medal} alt="Medal thing" height="75px"/></a>
          </div>
            <a href="#aboutId" className="aheadS">ABOUT </a>
            <a href="#skillsId" className="aheadS">SKILLS</a>
            <a href="#portfID" className="aheadS">PORTFOLIO</a>
            <a href="#contactID" className="aheadS">CONTACT</a>
        </div>

        <div className="logoMenu">
          
          
        </div>

        <PhoneMenu/>
        </header>


        
    )
}
