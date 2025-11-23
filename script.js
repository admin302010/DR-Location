// Burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Fade-in on scroll for service cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.service-card, .review-card, .process-step').forEach(card => {
  observer.observe(card);
});



// Gallery selection effect
const galleryItems = document.querySelectorAll('.gallery-item');

if (galleryItems.length) {
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // reset svih
      galleryItems.forEach(i => {
        i.classList.remove('active', 'muted');
      });

      // ako već nije aktivan – aktiviraj ga i zamuti ostale
      if (!isActive) {
        item.classList.add('active');
        galleryItems.forEach(i => {
          if (i !== item) i.classList.add('muted');
        });
      }
      // ako je bio aktivan i klikneš ponovo – sve se vrati u normalu
    });
  });
}


function toggleLangMenu() {
  const menu = document.getElementById("langOptions");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}