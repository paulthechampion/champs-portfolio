// Function to reset section classes and transitions
function cleanupSectionClasses() {
  const sections = document.querySelectorAll('.section');
  const leftRail = document.getElementById('left-rail')
  leftRail.style.transition ='unset'
  sections.forEach((section) => {
    section.style.zIndex = 3;
    section.style.transition = 'unset';
    // section.classList.remove('hidden-up', 'hidden-up-show', 'hidden-down', 'hidden-down-show');
  });
}

// Function to trigger the slide-up animation
export function moveUp(elementId) {
  cleanupSectionClasses();
  const sectionToAppear = document.getElementById(elementId);

  if (sectionToAppear) {
    sectionToAppear.style.transition = 'all .7s';
    // sectionToAppear.classList.add('hidden-up');
    sectionToAppear.style.zIndex = 4;
    sectionToAppear.style.top = "150%"
    // Use a timeout to trigger the animation
    setTimeout(() => {
      sectionToAppear.style.top = "0"
      // sectionToAppear.classList.add('hidden-up-show');
    }, 100);
  }
}

// Function to trigger the slide-down animation
export function moveDown(elementId) {
  cleanupSectionClasses();
  const sectionToAppear = document.getElementById(elementId);

  if (sectionToAppear) {
    sectionToAppear.style.transition = 'all .7s';
    // sectionToAppear.classList.add('hidden-down');
    sectionToAppear.style.zIndex = 4;
    sectionToAppear.style.top = "-150%"

    // Use a timeout to trigger the animation
    setTimeout(() => {
      // sectionToAppear.classList.add('hidden-down-show');
      sectionToAppear.style.top = "0%"
    }, 100);
  }
}
