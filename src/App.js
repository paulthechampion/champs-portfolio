import React from 'react';
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'


function App() {
  return (
    <div className='appDiv'>
      <Header/>
      <Main />
      <Footer/>
    </div>
  );
}

window.addEventListener("load", function(){
  var bodyS = document.body.style
  bodyS.overflowX ="hidden"
  const appearOptions = {
      root:null,
      threshold:0,
      rootMargin:"0px 0px -150px 0px"
  }       

  const faders = document.querySelectorAll(".fade-in")
  const sliders = document.querySelectorAll(".slide-in")
  const astroFloat = document.querySelectorAll(".forAstro")
  const appearOnScroll = new IntersectionObserver
  (function(
      entries,
      appearOnScroll
  ){
      entries.forEach(entry => {
          if(!entry.isIntersecting){
              return
          }else{
              entry.target.classList.add("appear")
              appearOnScroll.unobserve(entry.target)
          }
  
      })
  },appearOptions)
  
  
  faders.forEach(fader=>{
      appearOnScroll.observe(fader)
  })

  sliders.forEach(slider=>{
      appearOnScroll.observe(slider)
  })

  astroFloat.forEach(slider=>{
    appearOnScroll.observe(slider)
})

});

export default App;
