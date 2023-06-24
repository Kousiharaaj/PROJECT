
var scrollOffset = 0;

// Smooth scroll on anchor link click
document.querySelectorAll('a[href^="#downpage"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      offset: scrollOffset
    });
  });
});