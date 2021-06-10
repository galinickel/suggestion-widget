import { recommendationsUrl } from './api/taboola.js'
import './WidgetList.js'
import './Article.js'


//page loaded - insert api call here.
window.addEventListener('load', () => {
    getRecommendations()
})
//declaring our container, into which we will append children (render elements)
const widgetContainer = document.getElementById('taboola-recommendations')

async function getRecommendations() {
    const res = await fetch(recommendationsUrl)
    const json = await res.json()
    renderRecommendations(json)

}

function renderRecommendations(json) {
    const listEl = document.createElement('widget-list')
    const container = document.createElement('div')
    container.classList.add("widget-list-container")
    listEl.classList.add("widget-list")
    listEl.list = json
    widgetContainer.appendChild(listEl)
    listEl.appendChild(container)

    json.list.forEach(article => {
        getImg(article).then(res => {
            res ? article.thumbnail[0].url = res : article.thumbnail[0].url = 'widget/assets/notfound.png'
            const newArticle = document.createElement('widget-article')
            newArticle.article = article
            container.appendChild(newArticle)
            
        }
        )
    });
}

async function getImg(article) {
    try {
        const res = await fetch(article.thumbnail[0].url)
        return res.url
    }
    catch (err) {
        console.log(err, 'error fetching thumbnail from database.');
        return ''
    }
}



