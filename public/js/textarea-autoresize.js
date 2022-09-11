'use strict';

const textarea = document.getElementById('article-content');

textarea.addEventListener('input', (event) => {
    textarea.style.height = textarea.scrollHeight + 'px';
});
