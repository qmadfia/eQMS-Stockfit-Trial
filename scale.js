function scaleApp() {
  const app = document.querySelector('.app');
  const scaleX = window.innerWidth / 2237;
  const scaleY = window.innerHeight / 1150;
  const scale = Math.min(scaleX, scaleY); // biar pas tanpa scroll
  app.style.transform = `scale(${scale})`;

  // Centering kalau layar lebih lebar/tinggi
  app.style.position = "absolute";
  app.style.left = `${(window.innerWidth - 2237 * scale) / 2}px`;
  app.style.top = `${(window.innerHeight - 1150 * scale) / 2}px`;
}

window.addEventListener('resize', scaleApp);
window.addEventListener('load', scaleApp);
