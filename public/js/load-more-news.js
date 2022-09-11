'use strict';

const button = document.querySelector('.load-more');
const articles = document.querySelector('.articles__articles');

button.addEventListener('click', () => loadMoreNews());

async function loadMoreNews() {
    try {
        // This variable holds ID of the last article on the page, it is needed for fetching next 9 articles
        const lastArticleId = getClassNameFromButtont(button, 'doc-');
        const url = `/api/load-more-news?doc=${lastArticleId}`;

        const res = await fetch(url);
        const data = await res.json();

        data.forEach((article) => generateHtmlForArticle(articles, article));
    } catch (error) {
        console.error(error);
    }
}

function getClassNameFromButtont(button, className) {
    return button.classList.value
        .split(' ')
        .filter((word) => word.includes(className))[0]
        .split('-')[1];
}

function generateHtmlForArticle(articles, article) {
    const newArticle = document.createElement('article');
    newArticle.classList.add('articles__article');

    newArticle.innerHTML = `
            <div class="article__header">
                <img class="article__pictureLink" src="${article.author.pictureLink}" alt="Profile picture" />
                <div class="article__data">
                    <div class="article__split">
                        <p class="article__username">${article.author.username}</p>
                        <div class="article__watches"><i class="fa-solid fa-eye"></i> ${article.watchCount}</div>
                        <div class="article__likes"><i class="fa-solid fa-heart"></i> ${article.likesCount}</div>
                    </div>
                    <div class="article__split">
                        <p class="article__updatedAt">${article.updatedAt}</p>
                        <p class="article__sub-category">${article.subCategory}</p>
                    </div>
                </div>
            </div>
            <img class="articles__img" src="/img/news.avif" alt="" />
            <h2 href="#" class="articles__article-title">Build for the public</h2>
            <h3 href="#" class="articles__article-secondary-title">
                Build for people on Twitter to integrate or improve their experience on the platform.
            </h3>
            <a href="/news/press/${article._id}" class="articles__link button button--small">Learn more</a>
        `;

    articles.appendChild(newArticle);
}
