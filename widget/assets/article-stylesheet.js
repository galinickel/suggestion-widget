export const sheet = new CSSStyleSheet();
sheet.replaceSync(`
.widget-article-container {
    display: flex;
    width: 275px;
    font-size: 12px;
    padding: 15px;
}

.widget-article-img{
    width: fit-content;
    cursor:pointer;
}

img {
    width: 125px;
    height: 80px;
}

.widget-article-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
}
.widget-article-details > p {
    margin: 0;
}
.widget-article-details :nth-child(2) {
    align-self: baseline;
    color: darkgray;
    margin-bottom: 0;
}

`);