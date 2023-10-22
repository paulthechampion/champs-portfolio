function isElementVisible(element) {
  var rect = element.getBoundingClientRect();
  
  // Check if the element is in the viewport
  var isInViewport = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );

  if (!isInViewport) {
      return false;
  }

  // Check if the element is not covered by other elements with higher z-index
  var elementsAbove = document.elementsFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
  
  for (var i = 0; i < elementsAbove.length; i++) {
      if (elementsAbove[i] !== element && getComputedStyle(elementsAbove[i]).zIndex > getComputedStyle(element).zIndex) {
          return false;
      }
  }

  return true;
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

    var elementToCheck = document.getElementById("build");
    if(elementToCheck) {
        if(isElementVisible(elementToCheck)) {
            underlaysection = document.getElementById('left-rail')
        }
    }

    if (underlaysection) {
      underlaysection.style.zIndex = 3;
    }

    
  }

  if (dir === 'down') {
    const underlayPos = sectionArray.indexOf(elementId);
    let underlaysection = document.getElementById(sectionArray[underlayPos + 1]);
  
    if(elementId === 'left-rail') {
      underlaysection = document.getElementById('left-rail')
    }
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
