import React from 'react'
import LeftRail from './LeftRail'
import RightRail from './RightRail'

export default function Main() {
  // Function to scroll the target div into view
function scrollTargetDivIntoView() {
  const targetDiv = document.getElementById('about');
  targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.addEventListener('swipeup', scrollTargetDivIntoView); //CHANGE TO SROLL AND TEST ON PHONE
  return (
    <div className='mainDiv'>
        <LeftRail/>
        <RightRail/>
    </div>
  )
}
