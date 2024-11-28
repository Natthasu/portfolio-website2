/portfolio
  /css
    - styles.css
  /js
    - script.js
  /images
    - (images for gallery, profile, etc.)
  index.html
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
gsap.from("#bio", { duration: 1, opacity: 0, y: -50 });
gsap.from(".skills-container", { duration: 1, opacity: 0, x: -100, delay: 0.5 });
