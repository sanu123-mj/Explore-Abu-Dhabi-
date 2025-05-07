document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const authModal = document.getElementById("auth-modal");
    const loginBtn = document.getElementById("login-btn");
    const closeModal = document.getElementById("close-modal");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");


    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    
    burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
    





    if (loginBtn && authModal && closeModal) {
        // Function to open modal
        loginBtn.addEventListener("click", () => {
            authModal.style.display = "block"; // Show the modal
        });

        // Function to close modal
        closeModal.addEventListener("click", () => {
            authModal.style.display = "none"; // Hide the modal
        });

        // Close modal if the user clicks outside of the modal
        window.addEventListener("click", (event) => {
            if (event.target === authModal) {
                authModal.style.display = "none"; // Hide the modal
            }
        });
    }

    if (navOpenBtn && navCloseBtn) {
        // Function to open the navigation menu
        navOpenBtn.addEventListener("click", () => {
            document.getElementById("nav-links").classList.toggle("show");
        });

        // Function to close the navigation menu
        navCloseBtn.addEventListener("click", () => {
            document.getElementById("nav-links").classList.remove("show");
        });
    }

    // Smooth scroll to top
    const goTopButton = document.querySelector('.go-top');
    if (goTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                goTopButton.classList.add('show');
            } else {
                goTopButton.classList.remove('show');
            }
        });

        goTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Toggle navigation menu (if you have a mobile version)
    const navToggle = document.querySelector('.nav-toggle'); // Add a button for mobile menu
    const navMenu = document.querySelector('.nav-menu'); // Adjust selector as per your nav structure

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const emailValue = emailInput.value;

            if (emailValue) {
                alert(`Thank you for subscribing with ${emailValue}!`);
                emailInput.value = ''; // Clear the input field
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Get the button and events container
    const addEventButton = document.getElementById('add-event-button');
    const eventsContainer = document.querySelector('.events-container');

    // Add an event listener for the button click
    if (addEventButton && eventsContainer) {
        addEventButton.addEventListener('click', () => {
            console.log("Button clicked"); // This should show in the console when the button is clicked

            // Create a new event card
            const newEventCard = document.createElement('div');
            newEventCard.classList.add('event-card');
            newEventCard.innerHTML = `
                <img src="new-event.jpg" alt="New Event" class="event-image">
                <h3>New Exciting Event</h3>
                <p>This is a description of the new exciting event happening soon.</p>
                <a href="https://new-event-link.com" class="event-button" target="_blank">Learn More</a>
            `;

            // Append the new event card to the events container
            eventsContainer.appendChild(newEventCard);
        });
    }
// Carousel functionality
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
  const carouselContent = carousel.querySelector('.carousel-content');
  const carouselBtns = carousel.querySelectorAll('.carousel-btn');
  const carouselImgs = carousel.querySelectorAll('.carousel-img');

  let currentSlide = 0;

  carouselBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('left-btn')) {
        currentSlide--;
      } else {
        currentSlide++;
      }

      if (currentSlide < 0) {
        currentSlide = carouselImgs.length - 1;
      } else if (currentSlide >= carouselImgs.length) {
        currentSlide = 0;
      }

      carouselContent.style.transform = `translateX(${currentSlide * -100}%)`;
    });
  });
});



// Set automatic sliding
setInterval(autoSlide, 3000);

// Add dot click event listener for manual navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index; // Set current index to the clicked dot's index
      showSlide(currentIndex); // Show the selected slide
    });
  });
});
<script>
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>