'use strict';

const marked = require('marked');
const createDOMPurify = require('dompurify');
const {JSDOM} = require('jsdom');

marked.setOptions({
    breaks: true,
});

exports.getDateAndTime = (currentDate = new Date()) => {
    const date = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    const time = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
    return `${date} ${time}`;
};

exports.parseAndSanitizeMarkdownToHTML = (markdown) => {
    const window = new JSDOM('').window;
    const DOMPurify = createDOMPurify(window);
    const cleanMarkdown = DOMPurify.sanitize(marked.parse(markdown));
    return cleanMarkdown;
};
