import React, { useState } from 'react'
import MenuIcon from "./img/menuIcon.png"
export default function PhoneMenu() {
    const [showMenu, setShowMenu]= useState(false)
    let menu
    if(showMenu){
        menu=
        <nav className="phoneMenu" id="phoneMenuId">
            <div className="subPM">
                <div className="phoneLdiv firstNav"> <a href="#home" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>HOME</a></div>
                <div className="phoneLdiv"> <a href="#aboutId" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>ABOUT </a></div>
                <div className="phoneLdiv"> <a href="#skillsId" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>SKILLS</a></div>
                <div className="phoneLdiv"> <a href="#portfID" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>PORTFOLIO</a></div>
                <div className="phoneLdiv" > <a href="[[" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>BLOG</a></div>
                <div className="phoneLdiv"> <a href="#contactID" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>CONTACT</a></div>
            </div>
        </nav>
    
    }
    
    
    return (
    
        <span className="MenuBottonSpan"  >
        <img src={MenuIcon} alt="menu" className="MenuBotton" onClick={()=>setShowMenu(!showMenu)} />
        {menu}
        </span>
        
    )
}
