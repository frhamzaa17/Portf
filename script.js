function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('menu-active'); // Toggle the active class

  const hamburgerIcon = document.querySelector('.hamburger-icon');
  hamburgerIcon.classList.toggle('active'); // Optional: Add active class for animation

  // Optional: Change hamburger icon to 'X' when active
  if (hamburgerIcon.classList.contains('active')) {
      hamburgerIcon.innerHTML = `
          <span style="transform: rotate(45deg) translate(10px, 5px);"></span>
          <span style="opacity: 0;"></span>
          <span style="transform: rotate(-45deg) translate(10px, -5px);"></span>
      `;
  } else {
      hamburgerIcon.innerHTML = `
          <span></span>
          <span></span>
          <span></span>
      `;
  }
}

// Show the 
window.onscroll = function() {
    toggleGoTopButton();
  };
  
  function toggleGoTopButton() {
    const goTopBtn = document.getElementById("goTopBtn");
    // Show button if scrolled 1600px 
    if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  }
  
  // Scroll to the top 
  function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
