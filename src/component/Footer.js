import React from 'react'
import astro from "./img/astro-moon.png"
import downMoon from "./img/down-moon.png"

export default function Footer() {
    return (
        <footer>
          <img src={astro} alt="astronaught on moon" className='astro'/>
          <img src ={downMoon} alt= "lil moon" className='downMoon'/>
        </footer>
    )
}
