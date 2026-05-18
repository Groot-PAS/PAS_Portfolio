/* Header scroll */
const header = document.getElementById("header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

/* Mobile nav */
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("active", open);
  navToggle.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* Cursor glow */
const glow = document.querySelector(".cursor-glow");
let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;
  glow.style.left = `${glowX}px`;
  glow.style.top = `${glowY}px`;
  requestAnimationFrame(animateGlow);
}

if (window.matchMedia("(pointer: fine)").matches) {
  animateGlow();
} else {
  glow.style.display = "none";
}

/* Scroll reveal */
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add("visible"), Number(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* Re-trigger skill tag animations when skills section reveals */
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".skill-tag").forEach((tag) => {
            tag.style.animation = "none";
            void tag.offsetWidth;
            tag.style.animation = "";
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  skillsObserver.observe(skillsSection);
}

/* Contact form — opens mail client */
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );
  window.location.href = `mailto:prakharanand0967@gmail.com?subject=${subject}&body=${body}`;
});

/* Smooth active nav highlight on scroll */
const sections = document.querySelectorAll("section[id]");

window.addEventListener(
  "scroll",
  () => {
    const scrollY = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!link) return;
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll(".nav-links a").forEach((a) => a.style.color = "");
        link.style.color = "var(--cyan)";
      }
    });
  },
  { passive: true }
);
