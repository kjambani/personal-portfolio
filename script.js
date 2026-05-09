// ===== ROLLING TEXT TYPING EFFECT =====
const titles = ['Software Engineer', 'Machine Learning Engineer', 'Gen AI Engineer'];
const el = document.getElementById('rolling-text');
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = titles[titleIndex];
  if (!isDeleting) {
    el.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
    setTimeout(typeEffect, 80);
  } else {
    el.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      charIndex = 0;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeEffect, 400);
      return;
    }
    setTimeout(typeEffect, 40);
  }
}

if (el) typeEffect();

// ===== STAGGERED SCROLL REVEAL =====
const cards = document.querySelectorAll('.bento-card:not(.card-hero)');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(cards).indexOf(entry.target);
      entry.target.style.transitionDelay = `${index * 0.1}s`;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.classList.add('reveal');
  observer.observe(card);
});
