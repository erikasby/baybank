// Set article main text as innerHTML, so <br> tags would work
const articleText = document.querySelector('.article__text-p');
if (articleText !== null) articleText.innerHTML = articleText.textContent;

// For toggling dark/light modes
let mode = localStorage.getItem('mode');
const chk = document.getElementById('chk');
if (mode === null) {
  localStorage.setItem('mode', 'light');
  document.body.classList.remove('dark');
  chk.checked = false;
} else if (mode === 'dark') {
  localStorage.setItem('mode', 'dark');
  document.body.classList.add('dark');
  chk.checked = true;
} else {
  localStorage.setItem('mode', 'light');
  document.body.classList.remove('dark');
  chk.checked = false;
}

chk.addEventListener('change', () => {
  let mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    localStorage.setItem('mode', 'light');
    document.body.classList.remove('dark');
    chk.checked = false;
  } else {
    localStorage.setItem('mode', 'dark');
    document.body.classList.add('dark');
    chk.checked = true;
  }
});
