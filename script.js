const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

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

typeEffect();
