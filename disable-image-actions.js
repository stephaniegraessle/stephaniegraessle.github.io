document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
  img.addEventListener('dragstart', e => e.preventDefault());
  img.addEventListener('mousedown', e => e.preventDefault());
});
