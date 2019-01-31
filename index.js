import './news-article.js';
import { TOP_HEADLINES_URL } from './news-api.js';

window.addEventListener('load', () => {
  fetchNews();
}); 

async function fetchNews() {
  const res = await fetch(TOP_HEADLINES_URL);
  const json = await res.json();

  const main = document.querySelector('main');

  json.articles.forEach((article) => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}