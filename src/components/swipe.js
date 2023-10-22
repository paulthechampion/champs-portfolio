function isElementInViewportById(divId) {
  const divElement = document.getElementById(divId);
  if (!divElement) {
    console.error(`Element with ID "${divId}" not found.`);
    return false;
  }

  const rect = divElement.getBoundingClientRect();

  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth)
  );
}


function cleanupSectionClasses(dir, elementId) {
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
    
    
    const underlayPos = sectionArray.indexOf(elementId);
    let underlaysection = document.getElementById(sectionArray[underlayPos - 1]);

    if(isElementInViewportById('left-rail')) {
      underlaysection = document.getElementById('left-rail')
    }

    if (underlaysection) {
      underlaysection.style.zIndex = 3;
    }

    
  }

  if (dir === 'down') {
    const underlayPos = sectionArray.indexOf(elementId);
    let underlaysection = document.getElementById(sectionArray[underlayPos + 1]);
  
    if (underlaysection) {
      underlaysection.style.zIndex = 3;
    }
  }
}


// Function to trigger the slide-up animation
export function moveUp(elementId) {
  cleanupSectionClasses('up', elementId);
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
export function moveDown(elementId) {
  cleanupSectionClasses('down', elementId);
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
