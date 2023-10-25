import React, {useEffect} from 'react'
import {FaGithub, FaTwitter, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import FingerScroll from './FingerScroll';
import { moveUp, moveDown } from './swipe';
import { useMediaQuery } from 'react-responsive'

export default function LeftRail() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 809px)'
    })

    

    useEffect(() => {
        if(!isDesktopOrLaptop) {
            const menuLinks = document.querySelectorAll('.menu-link');
    
            menuLinks.forEach((link) => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                moveUp(targetId, 'click');
            });
            });
        }
        
      }, []);
      
    return (
    <div id='left-rail'>
       {isDesktopOrLaptop ? null : <FingerScroll/> } 
        <div className='main-intro appear'>
            <h2>Champ<span className='i'>i</span>on Paul</h2>
            <p>Software Developer at S&P Global</p>
            <p className='iBuild' id='build'>I build the <span className='blue-background'>best websites and web-applications
            </span>, astonishing digital experiences and Artificial Intelligence.
            </p>
        </div>

        <div className='menu-main-div appear'>
            <a href='#about' className='menu-link firstMenuLink' tabIndex="0"  >
                <div className='menu-flex' id='firstMenuLink' >
                    <div className='menu-line firstline' id='firstLine'>

                    </div>
                    <p>ABOUT</p>
                </div>
            </a>

            <a href='#experience' className='menu-link' tabIndex="1" >
                <div className='menu-flex' id='secondMenuLink'>
                    <div className='menu-line' id='secondLine'>

                    </div>
                    <p>EXPERIENCE</p>
                </div>
            </a>
            
            <a href='#skill-service' className='menu-link' tabIndex="2">
                <div className='menu-flex' id='thirdtMenuLink'>
                    <div className='menu-line' id='thirdLine'>

                    </div>
                    <p>SKILLS & SERVICES</p>
                </div>
            </a>

            <a href='#projects' className='menu-link' tabIndex="3">
                <div className='menu-flex' id='fourthMenuLink'>
                    <div className='menu-line' id='fourthLine'>

                    </div>
                    <p>PROJECTS</p>
                </div>
            </a>

            <a href='#contact' className='menu-link' tabIndex="4">
                <div className='menu-flex' id='fifthMenuLink'>
                    <div className='menu-line' id='fifthLine'>

                    </div>
                    <p>CONTACT</p>
                </div>
            </a>
        </div>

        <div className='call-div appear'>CALL ME<a href='tel:6475342898' className='call-link'>(647) 534-2898 <FaPhone/></a></div>

        <div className="socials-link" id="socials-link">
          <a href="https://github.com/paulthechampion" className="iconLink" target="_blank">  <FaGithub className="chatIcons"/></a>
          <a href="https://twitter.com/fal2ememorie2"className="iconLink" target="_blank"> <FaTwitter className="chatIcons"/></a>
          <a href="https://www.linkedin.com/in/paul-enwerem-9a307518b/"className="iconLink" target="_blank">  <FaLinkedin className="chatIcons"/></a>
          <a href="mailto:paulthechampion28@gmail.com" className="iconLink" target="_blank">  <FaMailBulk className="chatIcons"/></a>
        </div>
    </div>
    )
}
