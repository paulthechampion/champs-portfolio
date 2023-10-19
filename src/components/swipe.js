export function moveUp(elementId) {
  const sectionToAppear = document.getElementById(elementId);

  if (sectionToAppear) {
    // Add a class to hide the section at the top
    sectionToAppear.classList.remove('hidden-down')
    sectionToAppear.classList.remove('hidden-down-show')

    sectionToAppear.classList.add('hidden-up');

    // Use a timeout to trigger the animation
    setTimeout(() => {
      // Remove the class to move the element into view
      sectionToAppear.classList.add('hidden-up-show');
    }, 500);
  }
}

export function moveDown(elementId) {
  const sectionToAppear = document.getElementById(elementId);

  if (sectionToAppear) {
    // Add a class to hide the section at the bottom
    sectionToAppear.classList.remove('hidden-up')
    sectionToAppear.classList.remove('hidden-up-show')

    sectionToAppear.classList.add('hidden-down');

    // Use a timeout to trigger the animation
    setTimeout(() => {
      // Remove the class to move the element into view
      sectionToAppear.classList.add('hidden-down-show');
    }, 500);
  }
}
