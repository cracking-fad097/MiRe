const fadeUps = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.getAttribute('data-delay') || '0s';
      const direction = el.getAttribute('data-direction') || 'bottom';

      let translateX = '0px';
      let translateY = '40px';

      switch(direction) {
        case 'left':
          translateX = '-40px';
          translateY = '0px';
          break;
        case 'right':
          translateX = '40px';
          translateY = '0px';
          break;
        case 'top':
          translateX = '0px';
          translateY = '-40px';
          break;
        case 'bottom':
        default:
          translateX = '0px';
          translateY = '40px';
          break;
      }

      el.style.setProperty('--delay', delay);
      el.style.setProperty('--translate-x', translateX);
      el.style.setProperty('--translate-y', translateY);

      el.classList.add('show');
      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.1
});

fadeUps.forEach(el => {
  observer.observe(el);
});
