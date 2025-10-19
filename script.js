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
    initializeAINetwork();
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

    window.addEventListener('scroll', requestHeaderUpdate, { passive: true });

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
    let lastTime = 0;
    let timeout = null;
    
    return function executedFunction(...args) {
        const now = Date.now();
        const timeSinceLastCall = now - lastTime;
        
        if (timeSinceLastCall >= wait) {
            lastTime = now;
            func.apply(this, args);
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                lastTime = Date.now();
                func.apply(this, args);
            }, wait - timeSinceLastCall);
        }
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

// Service Worker registration (disabled - no sw.js file)
// Uncomment and create sw.js if you want offline support
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('SW registered: ', registration);
//             })
//             .catch(registrationError => {
//                 console.log('SW registration failed: ', registrationError);
//             });
//     });
// }

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeSmoothScrolling,
        initializeScrollEffects,
        initializeContactForm,
        initializeAnimations,
        initializeAINetwork,
        throttle
    };
}

// AI Network Canvas Animation
function initializeAINetwork() {
    const container = document.querySelector('.nexus-graphic');
    const canvas = document.getElementById('aiNetworkCanvas');
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = 0;
    let height = 0;

    const theme = {
        nodeColor: 'rgba(125, 77, 181, 1)',
        nodeGlow: 'rgba(125, 77, 181, 0.6)',
        lineColor: 'rgba(125, 77, 181, 0.35)',
        pulseColor: 'rgba(255, 255, 255, 0.95)',
        bgFade: 'rgba(0, 0, 0, 0.08)'
    };

    const config = {
        nodeCount: 14,
        linkDistance: 120,
        nodeRadius: 3,
        pulseSpeed: 0.015, // 0..1 per frame
        pulsesPerSec: 0.8
    };

    let nodes = [];
    let links = [];
    let pulses = [];
    let lastTime = 0;
    let rafId = null;

    function resize() {
        const rect = container.getBoundingClientRect();
        width = Math.floor(rect.width);
        height = Math.floor(rect.height);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        initGraph();
    }

    function randomIn(min, max) { return Math.random() * (max - min) + min; }

    function initGraph() {
        const center = { x: width / 2, y: height / 2 };
        const radius = Math.min(width, height) * 0.42;

        nodes = Array.from({ length: config.nodeCount }, (_, i) => {
            const angle = (i / config.nodeCount) * Math.PI * 2 + randomIn(-0.2, 0.2);
            const r = radius * randomIn(0.55, 1);
            return {
                x: center.x + Math.cos(angle) * r,
                y: center.y + Math.sin(angle) * r,
                vx: randomIn(-0.2, 0.2),
                vy: randomIn(-0.2, 0.2),
                phase: Math.random() * Math.PI * 2
            };
        });

        // Connect near neighbors to form an organic mesh
        links = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.hypot(dx, dy);
                if (dist < config.linkDistance) {
                    links.push({ a: i, b: j, dist });
                }
            }
        }

        // Seed a few pulses
        pulses = links.slice(0, 6).map(link => ({ linkIndex: links.indexOf(link), t: Math.random() }));
    }

    function step(dt) {
        // Gentle node drift with optimized calculations
        const boundsPadding = 10;
        const phaseIncrement = dt * 0.0015;
        for (const n of nodes) {
            n.phase += phaseIncrement;
            const cosPhase = Math.cos(n.phase);
            const sinPhase = Math.sin(n.phase);
            n.x += cosPhase * 0.15 + n.vx * 0.02;
            n.y += sinPhase * 0.15 + n.vy * 0.02;
            // keep in bounds
            n.x = Math.max(boundsPadding, Math.min(width - boundsPadding, n.x));
            n.y = Math.max(boundsPadding, Math.min(height - boundsPadding, n.y));
        }

        // Advance pulses
        for (const p of pulses) {
            p.t += config.pulseSpeed * (dt / 16.67);
        }
        pulses = pulses.filter(p => p.t <= 1.2);

        // Occasionally spawn new pulses
        if (Math.random() < config.pulsesPerSec * (dt / 1000)) {
            const li = Math.floor(Math.random() * links.length);
            pulses.push({ linkIndex: li, t: 0 });
        }
    }

    function draw() {
        // Clear with slight trail for a smooth glow
        ctx.fillStyle = theme.bgFade;
        ctx.fillRect(0, 0, width, height);

        // Draw links
        ctx.lineWidth = 1;
        for (const link of links) {
            const a = nodes[link.a];
            const b = nodes[link.b];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.hypot(dx, dy);
            const alpha = Math.max(0, 1 - dist / config.linkDistance);
            ctx.strokeStyle = `rgba(125, 77, 181, ${0.12 + alpha * 0.25})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
        }

        // Draw pulses traveling along links
        for (const p of pulses) {
            const link = links[p.linkIndex];
            if (!link) continue;
            const a = nodes[link.a];
            const b = nodes[link.b];
            const x = a.x + (b.x - a.x) * p.t;
            const y = a.y + (b.y - a.y) * p.t;
            const r = 2.2 + Math.sin(p.t * Math.PI) * 2.2;
            const grd = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
            grd.addColorStop(0, theme.pulseColor);
            grd.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(x, y, r * 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw nodes
        for (const n of nodes) {
            const r = config.nodeRadius + (Math.sin(n.phase * 2) + 1) * 0.6;
            ctx.fillStyle = theme.nodeColor;
            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
            ctx.fill();

            // glow
            const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
            glow.addColorStop(0, theme.nodeGlow);
            glow.addColorStop(1, 'rgba(125, 77, 181, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(n.x, n.y, r * 3.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function loop(ts) {
        if (!lastTime) lastTime = ts;
        const dt = Math.min(50, ts - lastTime);
        lastTime = ts;
        step(dt);
        draw();
        rafId = requestAnimationFrame(loop);
    }

    const onResize = throttle(resize, 150);
    window.addEventListener('resize', onResize);

    resize();
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(loop);

    // Pause animation when section not visible
    const hero = document.querySelector('.hero');
    const io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                if (!rafId) rafId = requestAnimationFrame(loop);
            } else {
                if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            }
        }
    }, { threshold: 0.05 });
    if (hero) io.observe(hero);

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (rafId) cancelAnimationFrame(rafId);
        window.removeEventListener('resize', onResize);
        io.disconnect();
    });
}
