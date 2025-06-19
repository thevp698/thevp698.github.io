// Mobile menu toggle
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Close mobile menu when a link is clicked
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
});

// Active navigation on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function makeNavActive() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', makeNavActive);
window.addEventListener('load', makeNavActive);

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
    
    // Reset the form
    contactForm.reset();
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Add animation on scroll
const animatedElements = document.querySelectorAll('.about-card, .timeline-item, .project-card');

function checkScroll() {
  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      el.classList.add('fadeIn');
    }
  });
}

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
  .fadeIn {
    animation: fadeInAnimation 0.8s ease forwards;
    opacity: 0;
  }
  
  @keyframes fadeInAnimation {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  .about-card, .timeline-item, .project-card {
    opacity: 0;
  }
`;
document.head.appendChild(style);

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Project navigation script
document.addEventListener('DOMContentLoaded', function() {
    // Define the order of projects
    const projectOrder = [
        'pyhysys.html',
        'ai_disaster_tweet.html',
        'combinatorial_optimization_HRU.html',
        'computational_methods_1.html',
        'computational_methods_2.html',
        'dqn_rl.html',
        'High-Pressure Steam.html',
        'LLM_rec.html',
        'MDO_braking_system.html'
    ];

    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Find current project index
    const currentIndex = projectOrder.indexOf(currentPage);
    
    if (currentIndex !== -1) {
        // Calculate next project index (loop back to first if at end)
        const nextIndex = (currentIndex + 1) % projectOrder.length;
        const nextProject = projectOrder[nextIndex];
        
        // Update the "Next Project" link
        const nextProjectLink = document.querySelector('.next-project');
        if (nextProjectLink) {
            nextProjectLink.href = nextProject;
        }
    }
});