// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar shrink on scroll
const nav = document.querySelector(".navbar");
const onScroll = () => {
  if (window.scrollY > 40) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
};
onScroll();
window.addEventListener("scroll", onScroll);

// Reveal on view (IntersectionObserver)
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3")
  .forEach(el => io.observe(el));

// Contact form (basic validation + UX)
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.email || !data.subject || !data.message) {
    return alert("Please fill out all fields.");
  }
  alert("Thank you! Your message has been recorded.\n(Connect on email/DM for real submissions.)");
  form.reset();
});

document.addEventListener("scroll", () => {
  const skills = document.querySelectorAll("#skills .progress-bar");
  skills.forEach(bar => {
    const value = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = value;
    }, 300);
  });
});



document.addEventListener("scroll", function() {
  let skillsSection = document.querySelector("#skills");
  let progressBars = document.querySelectorAll(".progress-bar");

  if (window.scrollY + window.innerHeight >= skillsSection.offsetTop + 100) {
    progressBars.forEach(bar => {
      let width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  }
});





