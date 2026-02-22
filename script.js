// Countdown Timer
const targetDate = Date.UTC(2026, 1, 25, 11, 30, 0);
const updateCountdown = setInterval(() => {
const now = new Date().getTime();
const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(updateCountdown);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

  if (distance < 0) {
    clearInterval(updateCountdown);
    document.getElementById("countdown").innerHTML = "<p>Acara sedang berlangsung!</p>";
  }
}, 1000);

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});
