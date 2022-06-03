// Set article main text as innerHTML, so <br> tags would work
const articleText = document.querySelector('.article__text-p');
if (articleText !== null) articleText.innerHTML = articleText.textContent;

// For toggling dark/light modes
let mode = localStorage.getItem('mode');
if (mode === null) {
  localStorage.setItem('mode', 'light');
  document.body.classList.remove('dark');
} else if (mode === 'dark') {
  localStorage.setItem('mode', 'dark');
  document.body.classList.add('dark');
} else {
  localStorage.setItem('mode', 'light');
  document.body.classList.remove('dark');
}

const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
  let mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    localStorage.setItem('mode', 'light');
    document.body.classList.remove('dark');
  } else {
    localStorage.setItem('mode', 'dark');
    document.body.classList.add('dark');
  }
});
