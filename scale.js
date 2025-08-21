function scaleApp() {
  const app = document.querySelector('.app');
  const scaleX = window.innerWidth / 1920;
  const scaleY = window.innerHeight / 1080;
  const scale = Math.min(scaleX, scaleY); // biar pas tanpa scroll
  app.style.transform = `scale(${scale})`;

  // Centering kalau layar lebih lebar/tinggi
  app.style.position = "absolute";
  app.style.left = `${(window.innerWidth - 1920 * scale) / 2}px`;
  app.style.top = `${(window.innerHeight - 1080 * scale) / 2}px`;
}

window.addEventListener('resize', scaleApp);
window.addEventListener('load', scaleApp);
