function cleanupSectionClasses(dir, elementId, from) {
  const sectionArray = ['left-rail', 'about', 'experience', 'skill-service', 'projects', 'contact'];
  const sections = document.querySelectorAll('.section');
  const leftRail = document.getElementById('left-rail');
  leftRail.style.transition = 'unset';
  leftRail.style.zIndex = 2;

  sections.forEach((section) => {
    section.style.transition = 'unset';
    section.style.zIndex = 2;
  });

  if (dir === 'up') {
    
    if(from === 'click') {
      return;
    }
    else {
      const underlayPos = sectionArray.indexOf(elementId);
      let underlaysection = document.getElementById(sectionArray[underlayPos - 1]);

      if (underlaysection) {
        underlaysection.style.zIndex = 3;
      }
    }
    

    
  }

  if (dir === 'down') {
    if(from === 'click') {
      return;
    }
    else {
      const underlayPos = sectionArray.indexOf(elementId);
      let underlaysection = document.getElementById(sectionArray[underlayPos + 1]);
    
      if (underlaysection) {
        underlaysection.style.zIndex = 3;
      }
    }
    
  }
}


// Function to trigger the slide-up animation
export function moveUp(elementId,from) {
  cleanupSectionClasses('up', elementId, from);
  const sectionToAppear = document.getElementById(elementId);

  if (sectionToAppear) {
    // sectionToAppear.classList.add('hidden-up');
    sectionToAppear.style.zIndex = 4;
    sectionToAppear.style.top = "300%"
    // Use a timeout to trigger the animation
    setTimeout(() => {
      
      sectionToAppear.style.transition = 'top .7s';
      sectionToAppear.style.top = "0"
      // sectionToAppear.classList.add('hidden-up-show');
    }, 300);
  }
}

// Function to trigger the slide-down animation
export function moveDown(elementId, from) {
  cleanupSectionClasses('down', elementId, from);
  const sectionToAppear = document.getElementById(elementId);

  if (sectionToAppear) {
    // sectionToAppear.classList.add('hidden-down');
    sectionToAppear.style.zIndex = 4;
    sectionToAppear.style.top = "-300%"

    // Use a timeout to trigger the animation
    setTimeout(() => {
      // sectionToAppear.classList.add('hidden-down-show');
      sectionToAppear.style.transition = 'top .7s';
      sectionToAppear.style.top = "0"
    }, 300);
  }
}
