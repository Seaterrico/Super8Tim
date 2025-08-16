const reveals = document.querySelectorAll('.reveal');

reveals.forEach(el => {
    el.classList.add('animate-once');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add('active');
            target.addEventListener('transitionend', () => {
                target.classList.remove('animate-once', 'active');
            }, { once: true });

            observer.unobserve(target);
        }
    });
}, { threshold: 0.4 });

reveals.forEach(el => observer.observe(el));