const dialog = document.querySelector('.art-dialog');
const closeButton = dialog.querySelector('.dialog-close');
let opener;

document.querySelectorAll('.work').forEach((work) => {
  const button = work.querySelector('.work-image');
  button.addEventListener('click', () => {
    opener = button;
    const image = work.querySelector('.work-image img');
    const preview = dialog.querySelector('.dialog-image img');
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
