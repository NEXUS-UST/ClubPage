// NEXUS Website JavaScript

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSmoothScrolling();
    initializeScrollEffects();
    initializeContactForm();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scrolling for hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
    heroButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects for header
function initializeScrollEffects() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    function requestHeaderUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestHeaderUpdate);

    // Initial call
    updateHeader();
}

// Contact form handling
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            try {
                // Get form data
                const formData = new FormData(contactForm);
                
                // Here you would typically send the form data to your backend
                // For now, we'll simulate a successful submission
                await simulateFormSubmission(formData);
                
                // Show success message
                showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }
}

// Simulate form submission (replace with actual backend call)
function simulateFormSubmission(formData) {
    return new Promise((resolve) => {
        // Log form data for development
        console.log('Form submitted with data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        
        // Simulate network delay
        setTimeout(resolve, 1500);
    });
}

// Show form submission messages
function showFormMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.textContent = message;
    
    // Style the message
    messageElement.style.cssText = `
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        font-weight: 500;
        text-align: center;
        animation: slideInDown 0.3s ease-out;
        ${type === 'success' 
            ? 'background: rgba(34, 197, 94, 0.1); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.2);'
            : 'background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2);'
        }
    `;
    
    // Insert message after form
    contactForm.insertAdjacentElement('afterend', messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideOutUp 0.3s ease-out';
        setTimeout(() => messageElement.remove(), 300);
    }, 5000);
}

// Initialize scroll-triggered animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animateElements = document.querySelectorAll(
        '.about-card, .vision-point, .join-card, .stat, .contact-method'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Utility function for throttling
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for message animations
const messageStyles = `
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideOutUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = messageStyles;
document.head.appendChild(styleSheet);

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Page became visible, resume any paused animations
        document.body.style.animationPlayState = 'running';
    } else {
        // Page became hidden, pause animations to save resources
        document.body.style.animationPlayState = 'paused';
    }
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Handle keyboard navigation for custom elements
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('nav-toggle')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Progressive enhancement for touch devices
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Add touch-specific styles
    const touchStyles = `
        .touch-device .about-card:hover,
        .touch-device .contact-method:hover,
        .touch-device .stat:hover {
            transform: none;
        }
        
        .touch-device .btn-primary:hover,
        .touch-device .btn-secondary:hover {
            transform: none;
        }
    `;
    
    const touchStyleSheet = document.createElement('style');
    touchStyleSheet.textContent = touchStyles;
    document.head.appendChild(touchStyleSheet);
}

// Performance monitoring (basic)
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        
        // Track Core Web Vitals if available
        if ('web-vital' in window) {
            // This would integrate with a real analytics service
            console.log('Core Web Vitals tracking initialized');
        }
    });
}

// Service Worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeSmoothScrolling,
        initializeScrollEffects,
        initializeContactForm,
        initializeAnimations,
        throttle
    };
}
