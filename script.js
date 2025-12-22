document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.8s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });
});

const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  },
  {
    threshold: 0.25
  }
);

fadeSections.forEach(section => {
  observer.observe(section);
});