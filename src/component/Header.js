import React from 'react'
import PhoneMenu from './PhoneMenu'
import medal from "./img/pdc-medal-no.png"

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        var scrollableElement = document.body; //document.getElementById('scrollableElement');
        scrollableElement.addEventListener('wheel', checkScrollDirection);
    } else {
      document.getElementById("SheaderDivID").style.top = "-100px";
    }
  } 

 
  
  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        if(window.scrollY <= 1) {
          document.getElementById("SheaderDivID").style.top = "-100px";
          return
        }
        document.getElementById("SheaderDivID").style.top = "0";
    } else {
      document.getElementById("SheaderDivID").style.top = "-100px";
    }
  }
  
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
  
export default function Header() {
    
    return (
        <header>
          

        <div className="headerDiv" id="home">
            <div className="logo">
          <a href="/#home" className="logo-link"  id="logoLink"> <img src={medal} alt="Medal thing" height="50px"/></a>
          </div>
                    <a href="#aboutId" className="ahead lightWhite">ABOUT </a>
                    <a href="#skillsId" className="ahead lightWhite">SKILLS</a>
                    <a href="#portfID" className="ahead lightWhite">PROJECTS</a>
                    <a href="#contactID" className="ahead lightWhite">CONTACT</a>
            

            
        </div>

        <div className="SheaderDiv" id="SheaderDivID">
        <div className="logoS">
        <a href="/#home" className="logo-link" id="SlogoLink"><img src={medal} alt="Medal thing" height="50px"/></a>
          </div>
            <a href="#aboutId" className="aheadS lightWhite">ABOUT </a>
            <a href="#skillsId" className="aheadS lightWhite">SKILLS</a>
            <a href="#portfID" className="aheadS lightWhite">PROJECTS</a>
            <a href="#contactID" className="aheadS lightWhite">CONTACT</a>
        </div>

        <div className="logoMenu">
          
          
        </div>

        <PhoneMenu/>
        </header>


        
    )
}
