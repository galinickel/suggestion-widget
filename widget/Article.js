
import {sheet} from './assets/article-stylesheet.js'
class Article extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'open' })
        this.root.adoptedStyleSheets = [sheet];

    }
    set article(article) {
        const img = `<img id="widget-img"   src="${article.thumbnail[0].url}" alt="${article.branding} preview"/>`
        this.root.innerHTML = `    
        <div class="widget-article-container">
        <section class="widget-article-img">
        ${img}
        
        </section>
        <section class="widget-article-details">
        <p> ${article.name} </p>
        ${(article.origin==="sponsored") ? `<p>${article.branding}</p>`: ``}
        </section>
        </div>
        `
        const imgEl = this.root.getElementById('widget-img')
        imgEl.onclick = articleClicked
        function articleClicked() {
            if(article.origin==="sponsored")window.open(article.url)
            else window.navigate(article.url)
        }
    }


}
customElements.define('widget-article', Article)