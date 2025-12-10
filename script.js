// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = sectionId;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(item);
    });
    
    // Animate skill cards
    const skillCards = document.querySelectorAll('.skill-category-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate project cards
    const projectCards = document.querySelectorAll('.project-full-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Animate education card
    const educationCard = document.querySelector('.education-card');
    if (educationCard) {
        educationCard.style.opacity = '0';
        educationCard.style.transform = 'translateY(30px)';
        educationCard.style.transition = 'all 0.6s ease';
        observer.observe(educationCard);
    }
    
    // Animate award card
    const awardCard = document.querySelector('.award-card');
    if (awardCard) {
        awardCard.style.opacity = '0';
        awardCard.style.transform = 'translateY(30px)';
        awardCard.style.transition = 'all 0.6s ease';
        observer.observe(awardCard);
    }
    
    // Animate certification card
    const certificationCard = document.querySelector('.certification-card');
    if (certificationCard) {
        certificationCard.style.opacity = '0';
        certificationCard.style.transform = 'translateY(30px)';
        certificationCard.style.transition = 'all 0.6s ease';
        observer.observe(certificationCard);
    }
    
    // Animate contact cards
    const contactCards = document.querySelectorAll('.contact-card-inline');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
});

// Parallax effect for gradient orbs
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');
    
    if (orb1 && orb2 && orb3) {
        orb1.style.transform = `translate(${mouseX * 50}px, ${mouseY * 50}px)`;
        orb2.style.transform = `translate(${mouseX * -30}px, ${mouseY * 30}px)`;
        orb3.style.transform = `translate(${mouseX * 40}px, ${mouseY * -40}px)`;
    }
});

// Handle image loading errors for awards and certifications
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.award-image img, .certification-image img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            const placeholder = document.createElement('div');
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.background = 'var(--gradient-primary)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = 'white';
            placeholder.style.fontSize = '3rem';
            placeholder.innerHTML = '<i class="fas fa-image"></i>';
            
            this.parentElement.appendChild(placeholder);
            this.style.display = 'none';
        });
    });
});

// Add hover effect for cards
const cards = document.querySelectorAll('.contact-card-inline, .project-full-card, .skill-category-card, .education-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Console Easter Egg
console.log('%c👋 Welcome to my portfolio!', 'font-size: 24px; font-weight: bold; color: #6366f1; text-shadow: 2px 2px 4px rgba(99, 102, 241, 0.3);');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'font-size: 16px; color: #a855f7;');
console.log('%c💼 Python Developer | ML Enthusiast', 'font-size: 14px; color: #06b6d4;');
console.log('%c📧 Contact: tamathavaasekar@gmail.com', 'font-size: 14px; color: #94a3b8;');

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%c⚡ Page loaded in ${loadTime}ms`, 'font-size: 12px; color: #22c55e;');
});

// Smooth scroll to top on page reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Add animation to language badges on hover
document.addEventListener('DOMContentLoaded', () => {
    const languageBadges = document.querySelectorAll('.language-badge');
    
    languageBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
});

// Add subtle parallax to sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Lazy load images for better performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add click analytics (optional - for tracking)
document.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        const link = e.target.closest('a');
        const linkText = link.textContent || link.title || link.href;
        console.log(`Link clicked: ${linkText}`);
    }
});

// Handle resume button visibility check
const resumeButtons = document.querySelectorAll('a[href*="Mathavaasekar_python_resume.pdf"]');
resumeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const href = button.getAttribute('href');
        console.log(`Resume action: ${button.hasAttribute('download') ? 'Download' : 'View'}`);
    });
});