function scaleApp() {
  const app = document.querySelector('.app');
  const scaleX = window.innerWidth / 1587;
  const scaleY = window.innerHeight / 756;
  const scale = Math.min(scaleX, scaleY); // biar pas tanpa scroll
  app.style.transform = `scale(${scale})`;

  // Centering kalau layar lebih lebar/tinggi
  app.style.position = "absolute";
  app.style.left = `${(window.innerWidth - 1587 * scale) / 2}px`;
  app.style.top = `${(window.innerHeight - 756 * scale) / 2}px`;
}

window.addEventListener('resize', scaleApp);
window.addEventListener('load', scaleApp);
