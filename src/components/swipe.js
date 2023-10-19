const sections = ['letf-rail', 'about', 'experience', 'skill-service', 'project', 'contact']

function cleanupSectionClasses() {
  const sections = document.querySelectorAll('.section'); // Assuming .section is the class for your sections

  sections.forEach((section) => {
    section.style.zIndex = 3
    section.style.transition = 'unset'
  });
}

export function moveUp(elementId) {
  cleanupSectionClasses()
  const sectionToAppear = document.getElementById(elementId);

  if (sectionToAppear) {
    // Add a class to hide the section at the top
    console.log('ydyc 2', elementId)

    sectionToAppear.classList.add('hidden-up');
    sectionToAppear.style.zIndex = 4;
    sectionToAppear.style.transition = 'top .7s'

    // Use a timeout to trigger the animation
    setTimeout(() => {
      // Remove the class to move the element into view
      sectionToAppear.classList.add('hidden-up-show');
    }, 10);
  }
}

export function moveDown(elementId) {
  cleanupSectionClasses()
  const sectionToAppear = document.getElementById(elementId);
  console.log('Before class removal:', sectionToAppear.classList.toString());
  
  if (sectionToAppear) {
    // Add a class to hide the section at the bottom

    sectionToAppear.classList.add('hidden-down');
    sectionToAppear.style.zIndex = 4;
    sectionToAppear.style.transition = 'top .7s'
    
    setTimeout(() => {
      // Remove the class to move the element into view
      sectionToAppear.classList.add('hidden-down-show');
    }, 10);
  }
}

