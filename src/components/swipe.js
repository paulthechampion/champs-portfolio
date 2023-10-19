const sections = ["left-rail", "about", "experience", "skill-service", "projects", "contact"];

export function moveUp(elementId) {
    const sectionToAppear = document.getElementById(elementId);
    const cardOnTop = sections.indexOf(elementId)
    const cardOnTopDiv = document.getElementById(sections[cardOnTop-1])
  
    if (sectionToAppear) {
      // Initially set the section at the bottom of the page
      sectionToAppear.style.position = 'fixed';
      sectionToAppear.style.top = '100%'; // Start at the bottom
      sectionToAppear.style.transition = 'top 0.5s';
      
      console.log('saming', cardOnTopDiv)
  
      // Use a timeout to trigger the animation
      setTimeout(() => {
        // Set the top property to 0 to move the element to the top
        sectionToAppear.style.top = '0';
      }, 100);
    }
  }
  
  
export function moveDown(elementId) {
  const sectionToAppear = document.getElementById(elementId);
  
    if (sectionToAppear) {
      // Initially set the section at the top of the page
      sectionToAppear.style.position = 'fixed';
      sectionToAppear.style.top = '-100%'; // Start at the top
      sectionToAppear.style.transition = 'top 1s';
      
  console.log("here", sectionToAppear)
      // Use a timeout to trigger the animation
      setTimeout(() => {
        // Set the top property to 0 to move the element to the top
        sectionToAppear.style.top = '0';
      }, 100);
    }
  
}
