// LUXE | Premium Portfolio | 2026

document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Particle/Dust System
    const particleContainer = document.getElementById('particles');
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Random positioning
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 10;
        const opacity = Math.random() * 0.4 + 0.1;

        p.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            opacity: ${opacity};
            pointer-events: none;
            box-shadow: 0 0 ${size * 2}px white;
            animation: particle-drift ${duration}s infinite linear ${delay}s;
        `;

        particleContainer.appendChild(p);
    }

    // Keyframe adjustment for particles via JS to keep CSS clean
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes particle-drift {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            20% { opacity: 0.5; }
            80% { opacity: 0.5; }
            100% { transform: translateY(-100px) translateX(30px); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    // Initial animations for Hero
    const heroAnims = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-delay');
    heroAnims.forEach((el, index) => {
        el.style.animationDelay = (index * 0.2) + 's';
    });

});
