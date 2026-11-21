window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 1200);
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));

const tabButtons = document.querySelectorAll('.tab-btn');
const residenceCards = document.querySelectorAll('.residence-card');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        residenceCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || filter === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalClose = document.getElementById('modalClose');
const openModalBtns = document.querySelectorAll('.open-modal');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.getAttribute('data-title');
        modalTitle.textContent = title;
        modalBackdrop.classList.add('open');
    });
});

modalClose.addEventListener('click', () => {
    modalBackdrop.classList.remove('open');
});

modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
    }
});

document.getElementById('modalForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Our concierge will contact you shortly.');
    modalBackdrop.classList.remove('open');
    e.target.reset();
});

document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Subscribed to The Gazette & Folio!');
    e.target.reset();
});