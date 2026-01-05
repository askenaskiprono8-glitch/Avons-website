/* ====================================
   AVONS CREATIVE - MAIN JAVASCRIPT
   ==================================== */

// ==================
// MOBILE MENU TOGGLE
// ==================

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuBtn.classList.toggle('text-blue-600');
    });
}

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.classList.remove('text-blue-600');
    });
});

// ==================
// BACK TO TOP BUTTON
// ==================

const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================
// SMOOTH SCROLLING
// ==================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================
// SCROLL ANIMATIONS
// ==================

function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .testimonial-card, .fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.querySelectorAll('.service-card, .testimonial-card, .fade-in').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ==================
// FILE UPLOAD PREVIEW
// ==================

const fileInput = document.getElementById('file-upload');
if(fileInput) {
    fileInput.addEventListener('change', function() {
        const fileCount = this.files.length;
        if(fileCount > 0) {
            console.log(`📎 ${fileCount} file(s) selected`);
        }
    });
}

// ==================
// TAWK.TO CHAT INTEGRATION
// ==================

if(!window.Tawk_API) {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    (function(){
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/692d717a1b2875197ea646f1/1jbco6i3h';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s1.setAttribute('defer', 'defer');
        s0.parentNode.insertBefore(s1, s0);
        
        // Connection monitoring
        setTimeout(function() {
            if(typeof Tawk_API !== 'undefined') {
                Tawk_API.onLoad = function(){
                    console.log('✅ Tawk.to chat loaded successfully');
                };
            }
        }, 2000);
    })();
}
