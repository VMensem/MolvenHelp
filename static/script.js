// Плавное появление карточек при скролле
const cards = document.querySelectorAll('.faq-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Добавляем лёгкую анимацию
document.querySelectorAll('.faq-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.addEventListener('transitionend', () => {
    el.style.transition = 'none';
  });
});

setTimeout(() => {
  document.querySelectorAll('.faq-card').forEach(el => {
    el.classList.add('animate-ready');
  });
}, 100);
// Меню на мобилках
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
