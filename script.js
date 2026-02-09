/**
 * Kauntech Website - Interactive JavaScript
 * Features: Floating languages, scroll animations, mobile menu, smooth scrolling
 */

// ============================================
// FLOATING LANGUAGES BACKGROUND
// ============================================
const languagesData = {
    hello: [
        { lang: 'English', text: 'Hello' },
        { lang: 'Hindi', text: 'नमस्ते' },
        { lang: 'Bengali', text: 'হ্যালো' },
        { lang: 'Telugu', text: 'హలో' },
        { lang: 'Marathi', text: 'नमस्कार' },
        { lang: 'Tamil', text: 'வணக்கம்' },
        { lang: 'Urdu', text: 'ہیلو' },
        { lang: 'Gujarati', text: 'હેલો' },
        { lang: 'Kannada', text: 'ಹಲೋ' },
        { lang: 'Odia', text: 'ନମସ୍କାର' },
        { lang: 'Malayalam', text: 'ഹലോ' },
        { lang: 'Punjabi', text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ' },
        { lang: 'Assamese', text: 'নমস্কাৰ' },
        { lang: 'Maithili', text: 'नमस्कार' },
        { lang: 'Sanskrit', text: 'नमस्ते' }
    ],
    namaste: [
        { lang: 'Hindi', text: 'नमस्ते' },
        { lang: 'Sanskrit', text: 'नमस्ते' },
        { lang: 'Nepali', text: 'नमस्ते' },
        { lang: 'Marathi', text: 'नमस्कार' },
        { lang: 'Gujarati', text: 'નમસ્તે' },
        { lang: 'Bengali', text: 'নমস্কার' },
        { lang: 'Odia', text: 'ନମସ୍କାର' },
        { lang: 'Assamese', text: 'নমস্কাৰ' },
        { lang: 'Punjabi', text: 'ਨਮਸਤੇ' },
        { lang: 'Kashmiri', text: 'نمستے' },
        { lang: 'Sindhi', text: 'نمستي' },
        { lang: 'Konkani', text: 'नमस्कार' },
        { lang: 'Tulu', text: 'ನಮಸ್ಕಾರ' },
        { lang: 'Dogri', text: 'नमस्ते' },
        { lang: 'Manipuri', text: 'ꯅꯃꯁꯇꯦ' }
    ],
    welcome: [
        { lang: 'English', text: 'Welcome' },
        { lang: 'Hindi', text: 'स्वागत है' },
        { lang: 'Tamil', text: 'வரவேற்கிறோம்' },
        { lang: 'Telugu', text: 'స్వాగతం' },
        { lang: 'Kannada', text: 'ಸ್ವಾಗತ' },
        { lang: 'Malayalam', text: 'സ്വാഗതം' },
        { lang: 'Bengali', text: 'স্বাগতম' },
        { lang: 'Marathi', text: 'स्वागत आहे' },
        { lang: 'Gujarati', text: 'સ્વાગત છે' },
        { lang: 'Punjabi', text: 'ਜੀ ਆਇਆਂ ਨੂੰ' },
        { lang: 'Odia', text: 'ସ୍ୱାଗତ' },
        { lang: 'Assamese', text: 'স্বাগতম' },
        { lang: 'Urdu', text: 'خوش آمدید' },
        { lang: 'Sanskrit', text: 'स्वागतम्' },
        { lang: 'Konkani', text: 'स्वागत' }
    ],
    madeInIndia: [
        { lang: 'English', text: 'Made in India' },
        { lang: 'Hindi', text: 'भारत में निर्मित' },
        { lang: 'Tamil', text: 'இந்தியாவில் தயாரிக்கப்பட்டது' },
        { lang: 'Telugu', text: 'భారతదేశంలో తయారు చేయబడింది' },
        { lang: 'Kannada', text: 'ಭಾರತದಲ್ಲಿ ತಯಾರಿಸಲಾಗಿದೆ' },
        { lang: 'Malayalam', text: 'ഇന്ത്യയിൽ നിർമ്മിച്ചത്' },
        { lang: 'Bengali', text: 'ভারতে তৈরি' },
        { lang: 'Marathi', text: 'भारतात बनवलेले' },
        { lang: 'Gujarati', text: 'ભારતમાં બનાવેલ' },
        { lang: 'Punjabi', text: 'ਭਾਰਤ ਵਿੱਚ ਬਣਿਆ' },
        { lang: 'Odia', text: 'ଭାରତରେ ନିର୍ମିତ' },
        { lang: 'Assamese', text: 'ভাৰতত নিৰ্মিত' },
        { lang: 'Urdu', text: 'بھارت میں تیار' },
        { lang: 'Sanskrit', text: 'भारते निर्मितम्' },
        { lang: 'Konkani', text: 'भारतां तयार केल्ले' }
    ]
};

function createFloatingLanguages() {
    const container = document.getElementById('floatingLanguages');
    if (!container) return;
    
    const allTexts = [
        ...languagesData.hello.map(item => ({ ...item, type: 'hello' })),
        ...languagesData.namaste.map(item => ({ ...item, type: 'namaste' })),
        ...languagesData.welcome.map(item => ({ ...item, type: 'welcome' })),
        ...languagesData.madeInIndia.map(item => ({ ...item, type: 'made-in-india' }))
    ];
    
    // Shuffle array
    const shuffled = allTexts.sort(() => Math.random() - 0.5);
    
    // Create 50 floating elements
    for (let i = 0; i < 50; i++) {
        const item = shuffled[i % shuffled.length];
        const element = document.createElement('div');
        element.className = `floating-language ${item.type}`;
        element.textContent = item.text;
        
        // Random positioning
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 24 + 16; // 16px to 40px
        const delay = Math.random() * 20;
        const duration = Math.random() * 10 + 15; // 15s to 25s
        
        element.style.left = `${left}%`;
        element.style.top = `${top}%`;
        element.style.fontSize = `${size}px`;
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;
        
        // Random rotation
        const rotation = Math.random() * 30 - 15;
        element.style.transform = `rotate(${rotation}deg)`;
        
        container.appendChild(element);
    }
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.feature-card, .scan-card, .flow-step, .translate-card, .cta-card, .auto-feature'
    );
    
    animateElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// ============================================
// PARALLAX EFFECTS
// ============================================
function initParallax() {
    const heroOrb = document.querySelector('.hero-orb');
    const automationOrb = document.querySelector('.automation-orb');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (heroOrb) {
            heroOrb.style.transform = `translate(-50%, -50%) translateY(${scrollY * 0.1}px)`;
        }
        
        if (automationOrb) {
            automationOrb.style.transform = `translate(-50%, -50%) translateY(${scrollY * 0.05}px)`;
        }
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// TYPING EFFECT FOR HERO
// ============================================
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const titleLines = heroTitle.querySelectorAll('.title-line');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        let charIndex = 0;
        const typeChar = () => {
            if (charIndex < text.length) {
                line.textContent += text[charIndex];
                charIndex++;
                setTimeout(typeChar, 50);
            }
        };
        
        setTimeout(typeChar, index * 500);
    });
}

// ============================================
// BUTTON INTERACTIONS
// ============================================
function initButtonInteractions() {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn, .cta-btn, .scan-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// LANGUAGE BUBBLE INTERACTION
// ============================================
function initLanguageBubbles() {
    const bubbles = document.querySelectorAll('.lang-bubble');
    
    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', () => {
            bubbles.forEach(b => {
                if (b !== bubble) {
                    b.style.opacity = '0.5';
                }
            });
        });
        
        bubble.addEventListener('mouseleave', () => {
            bubbles.forEach(b => {
                b.style.opacity = '1';
            });
        });
    });
}

// ============================================
// FEATURE CARD 3D TILT
// ============================================
function initCardTilt() {
    const cards = document.querySelectorAll('.feature-card, .scan-card, .flow-step');
    
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ============================================
// APP TABS INTERACTION
// ============================================
function initAppTabs() {
    const tabs = document.querySelectorAll('.app-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--purple), var(--gold));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .nav-cta');
    
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// CONFETTI EFFECT ON CTA CLICK
// ============================================
function initConfettiEffect() {
    const ctas = document.querySelectorAll('.btn-primary, .cta-btn');
    
    ctas.forEach(cta => {
        cta.addEventListener('click', (e) => {
            // Don't trigger if it's a link with href
            if (cta.getAttribute('href') && cta.getAttribute('href') !== '#') return;
            
            e.preventDefault();
            createConfetti(e.clientX, e.clientY);
        });
    });
}

function createConfetti(x, y) {
    const colors = ['#7B2FF7', '#FFD700', '#FFEB3B', '#3B82F6', '#9D5FFF'];
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(confetti);
        
        const angle = (Math.PI * 2 * i) / confettiCount;
        const velocity = 100 + Math.random() * 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        const animate = () => {
            posX += vx * 0.02;
            posY += vy * 0.02 + 2;
            opacity -= 0.02;
            
            confetti.style.left = `${posX}px`;
            confetti.style.top = `${posY}px`;
            confetti.style.opacity = opacity;
            confetti.style.transform = `rotate(${posX}deg)`;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// ============================================
// INITIALIZE ALL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createFloatingLanguages();
    initNavigation();
    initScrollAnimations();
    initParallax();
    animateCounters();
    initTypingEffect();
    initButtonInteractions();
    initLanguageBubbles();
    initCardTilt();
    initAppTabs();
    initScrollProgress();
    initMagneticButtons();
    initConfettiEffect();
});

// ============================================
// PERFORMANCE: Pause animations when tab is hidden
// ============================================
document.addEventListener('visibilitychange', () => {
    const floatingLanguages = document.querySelectorAll('.floating-language');
    
    if (document.hidden) {
        floatingLanguages.forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        floatingLanguages.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});
