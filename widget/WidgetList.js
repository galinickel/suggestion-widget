
class WidgetList extends HTMLElement {

    set list(list) {
        this.innerHTML = `
        <style>

        @import "widget/assets/style.css </style>
<div>
<section class="widget-header-title">
<p>
More For You
</p>
<p>
Promoted Links By Taboola
</p>
</section>
</div>
`
    }
}
customElements.define('widget-list', WidgetList)