'use strict';

// Count the number of articles
const articlesCount = document.querySelectorAll('.articles__article').length;

const url = `/api/load-more-news?articlesCount=${articlesCount}`;

fetch(url)
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.text();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
