// мобильное меню комитетов: тап по «Комитеты» открывает bottom sheet, ✕ / тап мимо — закрывает
const li = document.querySelector('.nav li:has(.dropdown)');
li.querySelector(':scope > a').addEventListener('click', e => {
  if (!matchMedia('(max-width: 900px)').matches) return;
  e.preventDefault(); li.classList.toggle('open');
});
document.addEventListener('click', e => {
  if (e.target.closest('.dropdown .x')) e.preventDefault();
  if (e.target.closest('.dropdown .x') || !e.target.closest('.nav li.open')) li.classList.remove('open');
});
