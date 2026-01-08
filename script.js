// ============================================
// WEBSITE INITIALIZATION & LOADING ANIMATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoadingAnimation();
    initNavbar();
    initScrollAnimations();
    initSmoothScrolling();
    initHoverEffects();
    initImageAnimations();
    
    // Set current year in footer (optional enhancement)
    // document.getElementById('current-year').textContent = new Date().getFullYear();
});

// ============================================
// LOADING ANIMATION
// ============================================

function initLoadingAnimation() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        // Add fade out class
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loadingScreen.remove();
        }, 800);
        
        // Animate hero content
        animateHeroContent();
    });
}

function animateHeroContent() {
    const heroContent = document.querySelector('.hero-content');
    const heroLogo = document.querySelector('.hero-logo img');
    
    // Add animation class to hero content
    heroContent.style.animation = 'fadeInUp 1s ease forwards 0.3s';
    
    // Add continuous glow animation to logo
    setInterval(() => {
        heroLogo.style.filter = `drop-shadow(0 0 ${15 + Math.random() * 10}px rgba(212, 175, 55, ${0.3 + Math.random() * 0.3}))`;
    }, 3000);
}

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navHamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Mobile hamburger menu toggle
    navHamburger.addEventListener('click', function() {
        navHamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate hamburger lines
        const spans = navHamburger.querySelectorAll('span');
        if (navHamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            
            // Show nav links
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
            navLinks.style.padding = '30px 20px';
            navLinks.style.gap = '25px';
            navLinks.style.borderTop = '1px solid rgba(212, 175, 55, 0.1)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            
            // Hide nav links
            navLinks.style.display = 'none';
        }
    });
    
    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navHamburger.classList.remove('active');
                navLinks.classList.remove('active');
                
                const spans = navHamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                
                navLinks.style.display = 'none';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.backgroundColor = 'transparent';
            navLinks.style.padding = '0';
            navLinks.style.borderTop = 'none';
        } else {
            if (!navHamburger.classList.contains('active')) {
                navLinks.style.display = 'none';
            }
        }
    });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.section-title, .section-subtitle, .skill-card, .timeline-item, .social-icon, .about-text p, .course-content'
    );
    
    // Create Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class based on element type
                const element = entry.target;
                
                if (element.classList.contains('section-title')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                } else if (element.classList.contains('section-subtitle')) {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, 200);
                } else if (element.classList.contains('skill-card')) {
                    // Stagger animation for skill cards
                    const index = Array.from(animatedElements).indexOf(element);
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 100);
                } else if (element.classList.contains('timeline-item')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                } else if (element.classList.contains('social-icon')) {
                    // Stagger animation for social icons
                    const index = Array.from(document.querySelectorAll('.social-icon')).indexOf(element);
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 150);
                } else if (element.classList.contains('about-text') && element.tagName === 'P') {
                    // Stagger animation for about text paragraphs
                    const paragraphs = document.querySelectorAll('.about-text p');
                    const index = Array.from(paragraphs).indexOf(element);
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 200);
                } else if (element.classList.contains('course-content')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
                
                // Stop observing after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Animate gold text underline on scroll
    window.addEventListener('scroll', animateGoldTextUnderline);
}

function animateGoldTextUnderline() {
    const goldTextElements = document.querySelectorAll('.gold-text');
    
    goldTextElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        
        // If element is in viewport
        if (elementPosition.top < window.innerHeight && elementPosition.bottom > 0) {
            const afterElement = element.querySelector ? element.querySelector('::after') : null;
            if (afterElement) {
                element.style.setProperty('--underline-scale', '1');
            } else {
                // Create pseudo-element animation via JS if needed
                if (!element.hasAttribute('data-animated')) {
                    element.setAttribute('data-animated', 'true');
                    
                    // Add animation class
                    element.style.animation = 'underlineExpand 0.6s ease forwards';
                }
            }
        }
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScrolling() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Calculate target position
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            // Smooth scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// ============================================
// HOVER EFFECTS
// ============================================

function initHoverEffects() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Skill card hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.4s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const wrapper = this.querySelector('.icon-wrapper');
            if (wrapper) {
                wrapper.style.transform = 'translateY(-10px) scale(1.1)';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            const wrapper = this.querySelector('.icon-wrapper');
            if (wrapper) {
                wrapper.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// ============================================
// IMAGE ANIMATIONS
// ============================================

function initImageAnimations() {
    const profileImage = document.querySelector('.image-frame img');
    
    if (profileImage) {
        // Add subtle floating animation
        let floatDirection = 1;
        let floatValue = 0;
        
        function floatAnimation() {
            floatValue += 0.002 * floatDirection;
            
            if (floatValue > 0.02) floatDirection = -1;
            if (floatValue < -0.02) floatDirection = 1;
            
            profileImage.style.transform = `scale(1.05) translateY(${floatValue}px)`;
            
            requestAnimationFrame(floatAnimation);
        }
        
        // Start animation when image is hovered
        profileImage.addEventListener('mouseenter', function() {
            floatAnimation();
        });
        
        profileImage.addEventListener('mouseleave', function() {
            // Reset transform
            this.style.transform = 'scale(1)';
        });
    }
}

// ============================================
// ADDITIONAL ENHANCEMENTS
// ============================================

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// Gold text hover animation
document.querySelectorAll('.gold-text').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.animation = 'goldPulse 0.6s ease';
    });
    
    element.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// Add CSS for gold pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes goldPulse {
        0% { filter: brightness(1); }
        50% { filter: brightness(1.3); }
        100% { filter: brightness(1); }
    }
    
    @keyframes underlineExpand {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🎬 Journey of Editing 🎬', 'color: #d4af37; font-size: 18px; font-weight: bold;');
console.log('%cPremium cinematic personal branding website loaded successfully!', 'color: #888;');