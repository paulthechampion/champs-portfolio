import React from 'react';
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'


function App() {
  return (
    <div>
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
      root: document.body,
      threshold:0,
      rootMargin:"0px 0px -200px 0px"
  }       

  const faders = document.querySelectorAll(".fade-in")
  const sliders = document.querySelectorAll(".slide-in")
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

});

export default App;
