function scaleApp() {
  const app = document.querySelector('.app');
  const parentWidth = window.innerWidth;
  const parentHeight = window.innerHeight;

  const appWidth = app.offsetWidth;
  const appHeight = app.offsetHeight;

  const scaleX = parentWidth / appWidth;
  const scaleY = parentHeight / appHeight;

  // gunakan yang lebih besar, biar selalu menutup layar penuh
  const scale = Math.max(scaleX, scaleY);

  app.style.transform = `scale(${scale})`;

  // center
  app.style.position = "absolute";
  app.style.left = `${(parentWidth - appWidth * scale) / 2}px`;
  app.style.top = `${(parentHeight - appHeight * scale) / 2}px`;
}
