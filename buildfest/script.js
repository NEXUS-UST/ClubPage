// ============================================
// TOMMIE BUILDFEST - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
    initFormHandling();
    initNavbarScroll();
    initCountdown();
});

// ============================================
// SMOOTH SCROLLING
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
    
    // Add mobile menu styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 968px) {
            .nav-links {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: calc(100% + 10px);
                left: 0;
                right: 0;
                background: white;
                padding: 1rem;
                border-radius: 16px;
                box-shadow: 0 8px 24px rgba(45, 90, 39, 0.12);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            }
            
            .nav-links.active {
                display: flex;
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .nav-links a {
                padding: 0.75rem 1rem;
                border-radius: 8px;
            }
            
            .nav-links a:hover {
                background: rgba(45, 90, 39, 0.05);
            }
            
            .nav-cta {
                text-align: center;
                margin-top: 0.5rem;
            }
            
            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger children animations
                const children = entry.target.querySelectorAll('.stagger');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 100}ms`;
                    child.classList.add('visible');
                });
            }
        });
    }, observerOptions);
    
    // Add fade-in class to animatable elements
    const animatableElements = document.querySelectorAll(
        '.track-card, .info-card, .faq-item, .timeline-item, .stat'
    );
    
    animatableElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}
// ============================================
// FORM HANDLING
// ============================================
function initFormHandling() {
    const form = document.getElementById('registrationForm');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = `
            <span>Registering...</span>
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="32" stroke-dashoffset="32">
                    <animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `;
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate API call (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        showNotification('🎉 Registration successful! Check your email for confirmation.', 'success');
        
        // Reset form
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Log data (for demo purposes)
        console.log('Registration data:', data);
    });
    
    // Add floating label effect
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            padding: 1rem 2rem;
            background: #2D5A27;
            color: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(45, 90, 39, 0.3);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 9999;
            animation: slideUp 0.4s ease-out forwards;
        }
        
        .notification-success {
            background: linear-gradient(135deg, #2D5A27, #4A7C43);
        }
        
        .notification-error {
            background: linear-gradient(135deg, #C45A28, #E8703A);
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
        
        @keyframes slideUp {
            to {
                transform: translateX(-50%) translateY(0);
            }
        }
        
        @keyframes slideDown {
            to {
                transform: translateX(-50%) translateY(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideDown 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideDown 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ============================================
// COUNTDOWN TIMER (Optional)
// ============================================
function initCountdown() {
    // Event date: February 20th, 2025, 9:00 AM
    const eventDate = new Date('2025-02-20T09:00:00').getTime();
    
    // Check if we should show countdown
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            // Event has started or passed
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Only show countdown if more than 1 day away
        if (days > 0) {
            const countdownEl = document.querySelector('.countdown');
            if (!countdownEl) {
                const countdown = document.createElement('div');
                countdown.className = 'countdown';
                countdown.innerHTML = `
                    <div class="countdown-item">
                        <span class="countdown-number">${days}</span>
                        <span class="countdown-label">days</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${hours}</span>
                        <span class="countdown-label">hours</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${minutes}</span>
                        <span class="countdown-label">min</span>
                    </div>
                `;
                
                // Insert after hero subtitle
                heroSubtitle.after(countdown);
                
                // Add countdown styles
                const style = document.createElement('style');
                style.textContent = `
                    .countdown {
                        display: flex;
                        justify-content: center;
                        gap: 1.5rem;
                        margin: 1.5rem 0;
                        animation: fadeInUp 0.8s ease-out 0.35s backwards;
                    }
                    
                    .countdown-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 1rem 1.5rem;
                        background: white;
                        border-radius: 12px;
                        box-shadow: 0 4px 16px rgba(45, 90, 39, 0.1);
                    }
                    
                    .countdown-number {
                        font-family: 'Bricolage Grotesque', sans-serif;
                        font-size: 2rem;
                        font-weight: 800;
                        color: #E8703A;
                    }
                    
                    .countdown-label {
                        font-size: 0.8rem;
                        color: #5A5A5A;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }
                    
                    @media (max-width: 480px) {
                        .countdown {
                            gap: 0.75rem;
                        }
                        
                        .countdown-item {
                            padding: 0.75rem 1rem;
                        }
                        
                        .countdown-number {
                            font-size: 1.5rem;
                        }
                    }
                `;
                document.head.appendChild(style);
            } else {
                // Update existing countdown
                const numbers = countdownEl.querySelectorAll('.countdown-number');
                if (numbers.length >= 3) {
                    numbers[0].textContent = days;
                    numbers[1].textContent = hours;
                    numbers[2].textContent = minutes;
                }
            }
        }
    }
    
    updateCountdown();
    // Update every minute
    setInterval(updateCountdown, 60000);
}

// ============================================
// PARALLAX EFFECT FOR FLOATING ELEMENTS
// ============================================
document.addEventListener('mousemove', (e) => {
    const floatItems = document.querySelectorAll('.float-item');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    floatItems.forEach((item, index) => {
        const factor = (index % 3 + 1) * 0.5;
        item.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// ============================================
// EASTER EGG: Konami Code
// ============================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎮 Konami Code activated! You found the secret! 🍕', 'success');
        document.body.style.transition = 'filter 0.5s';
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 2000);
    }
});

