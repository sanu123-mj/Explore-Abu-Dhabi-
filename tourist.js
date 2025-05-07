// Get all filter options
const filterOptions = document.querySelectorAll('.filter-option');

// Get the drop zone
const dropZone = document.querySelector('.drop-zone');

// Get the destination list
const destinationList = document.querySelector('.destination-list');

// Add event listeners to filter options
filterOptions.forEach((filterOption) => {
  filterOption.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', filterOption.getAttribute('data-category'));
  });
});

// Add event listener to drop zone
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const category = e.dataTransfer.getData('text');
  filterDestinations(category);
});

// Function to filter destinations
function filterDestinations(category) {
  const destinations = destinationList.children;
  for (let i = 0; i < destinations.length; i++) {
    const destination = destinations[i];
    if (category === 'all' || destination.getAttribute('data-category') === category) {
      destination.style.display = 'block';
    } else {
      destination.style.display = 'none';
    }
  }
}

// Add event listeners to how-to-reach buttons
const howToReachButtons = document.querySelectorAll('.how-to-reach');
howToReachButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Add code here to handle the click event
    console.log('How to Reach button clicked');
  });
});

var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider__slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].classList.add("active");
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }