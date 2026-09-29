const dialog = document.querySelector('.art-dialog');
const closeButton = dialog.querySelector('.dialog-close');
let opener;

document.querySelectorAll('.work').forEach((work) => {
  const button = work.querySelector('.work-image');
  button.addEventListener('click', () => {
    opener = button;
    const image = work.querySelector('.work-image img');
    const preview = dialog.querySelector('.dialog-image img');
    resetZoom();
    preview.src = image.src;
    preview.alt = image.alt;
    dialog.querySelector('#art-dialog-title').textContent = work.querySelector('h3').textContent;
    dialog.querySelector('.dialog-details > p').textContent = work.querySelector('.work-details p').textContent;
    dialog.querySelector('.dialog-price').textContent = work.querySelector('.work-price').textContent;
    dialog.querySelector('.dialog-inquire').href = work.querySelector('figcaption a').href;
    dialog.showModal();
    closeButton.focus();
  });
});

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => opener?.focus());

const processVideo = document.querySelector('.process-video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncMotion() {
  if (reducedMotion.matches) processVideo.pause();
  else processVideo.play().catch(() => {});
}
reducedMotion.addEventListener('change', syncMotion);
syncMotion();

const imageArea = dialog.querySelector('.dialog-image');
const detailImage = imageArea.querySelector('img');
const lens = imageArea.querySelector('.zoom-lens');
const zoomToggle = imageArea.querySelector('.zoom-toggle');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
function resetZoom() {
  imageArea.classList.remove('zoomed');
  lens.style.display = 'none';
  zoomToggle.setAttribute('aria-pressed', 'false');
  zoomToggle.setAttribute('aria-label', 'Zoom artwork image');
}
function magnify(event) {
  if (!finePointer.matches || event.target === zoomToggle || zoomToggle.contains(event.target)) return;
  const rect = detailImage.getBoundingClientRect();
  const parent = imageArea.getBoundingClientRect();
  const scale = Math.min(rect.width / detailImage.naturalWidth, rect.height / detailImage.naturalHeight);
  const width = detailImage.naturalWidth * scale;
  const height = detailImage.naturalHeight * scale;
  const left = rect.left + (rect.width - width) / 2;
  const top = rect.top + (rect.height - height) / 2;
  const x = event.clientX - left;
  const y = event.clientY - top;
  if (x < 0 || y < 0 || x > width || y > height) { lens.style.display = 'none'; return; }
  const zoom = 2.5;
  const radius = 75;
  lens.style.display = 'block';
  lens.style.left = `${event.clientX - parent.left - radius}px`;
  lens.style.top = `${event.clientY - parent.top - radius}px`;
  lens.style.backgroundImage = `url("${detailImage.src}")`;
  lens.style.backgroundSize = `${width * zoom}px ${height * zoom}px`;
  lens.style.backgroundPosition = `${radius - x * zoom}px ${radius - y * zoom}px`;
}
imageArea.addEventListener('pointermove', magnify);
imageArea.addEventListener('pointerleave', () => { lens.style.display = 'none'; });
zoomToggle.addEventListener('click', () => {
  if (finePointer.matches) {
    const rect = detailImage.getBoundingClientRect();
    magnify({ clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2, target: detailImage });
  } else {
    const zoomed = imageArea.classList.toggle('zoomed');
    zoomToggle.setAttribute('aria-pressed', String(zoomed));
    zoomToggle.setAttribute('aria-label', zoomed ? 'Reset artwork image zoom' : 'Zoom artwork image');
  }
});
imageArea.addEventListener('pointerdown', (event) => {
  if (!imageArea.classList.contains('zoomed') || event.target !== detailImage) return;
  const rect = imageArea.getBoundingClientRect();
  detailImage.style.transformOrigin = `${(event.clientX - rect.left) / rect.width * 100}% ${(event.clientY - rect.top) / rect.height * 100}%`;
});
dialog.addEventListener('close', resetZoom);
