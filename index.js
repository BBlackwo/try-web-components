import './news-article.js';
import { fetchNews } from './news-api.js';

window.addEventListener('load', async () => {
  await initArticles();
}); 

async function initArticles() {
  const json = await fetchNews();
  
  const main = document.querySelector('main');
  json.articles.forEach((article) => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}