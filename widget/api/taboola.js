const KEY = `app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4`
const SOURCE_TYPE= `video`
const recommendationsUrl = `https://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&${KEY}&count=8&source.type=${SOURCE_TYPE}&source.id=demo`

export { KEY, recommendationsUrl }