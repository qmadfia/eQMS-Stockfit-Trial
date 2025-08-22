function scaleApp() {
  const app = document.querySelector('.app');
  const parentWidth = window.innerWidth;
  const parentHeight = window.innerHeight;
  const appWidth = app.offsetWidth;
  const appHeight = app.offsetHeight;
  
  const scaleX = parentWidth / appWidth;
  const scaleY = parentHeight / appHeight;
  
  // Gunakan scale yang lebih kecil agar semua konten terlihat (fit to screen)
  const scale = Math.min(scaleX, scaleY);
  
  app.style.transform = `scale(${scale})`;
  
  // Center the scaled app
  const scaledWidth = appWidth * scale;
  const scaledHeight = appHeight * scale;
  
  app.style.position = "absolute";
  app.style.left = `${(parentWidth - scaledWidth) / 2}px`;
  app.style.top = `${(parentHeight - scaledHeight) / 2}px`;
}

// Panggil fungsi saat halaman dimuat dan saat resize
window.addEventListener('load', scaleApp);
window.addEventListener('resize', scaleApp);
