
// Hamburger menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional: Smooth scroll (ONLY if using same-page anchors like #home, #about)
// Remove or comment out this section if links go to other pages
document.querySelectorAll('header nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after click
      navLinks.classList.remove('active');
    }
  });
});



