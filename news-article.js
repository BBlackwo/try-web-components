class NewsArticle extends HTMLElement {

  constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
  }

  set article({url, title, urlToImage, description}) {
    this.root.innerHTML = /*html*/`
      <style>
        .wrapper {
          border: 1px solid grey;
          padding: 10px;
          margin: 10px 0;
        }

        a {
          color: green;
        }

        img {
          width: 50vw;
        }
      </style>
      <div class="wrapper">
        <a href="${url}">
          <h2>${title}</h2>
          <img src="${urlToImage || ''}"/>
        </a>
        <p>${description || ''}</p>
      </div>
    `;
  }

}

customElements.define('news-article', NewsArticle);