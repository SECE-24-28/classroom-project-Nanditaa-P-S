// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formSuccess = document.getElementById('formSuccess');
        
        // Simulate form submission
        setTimeout(() => {
            contactForm.reset();
            formSuccess.style.display = 'block';
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 3000);
        }, 1000);
    });
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.classList.add('show');
        }
    });
};

// Animate skill bars
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
};

// Initialize animations
window.addEventListener('load', () => {
    animateOnScroll();
    if (document.querySelector('.skills-section')) {
        animateSkillBars();
    }
    
    // Add floating animation to profile image
    const profileImage = document.querySelector('.hero-image img');
    if (profileImage) {
        profileImage.classList.add('floating');
    }
});

window.addEventListener('scroll', animateOnScroll);