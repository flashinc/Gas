# Research

## get custom data from html attributes

```js
    let link = document.querySelector('#js');
            if (link) {
                let target = link.getAttribute('target');
                console.log(target);
            }
```

## custom html elements

```js
    // Custom elements
    customElements.define('element-details',
        class extends HTMLElement {
            constructor() {
                super();
                const template = document
                    .getElementById('element-details-template')
                    .content;
                const shadowRoot = this.attachShadow({ mode: 'open' })
                    .appendChild(template.cloneNode(true));
            }
        });
```

## Old

```js
this.html.html.split('{  }')
for (var i = 0; i < this.html.html.length; i++) {
    if (this.html.html[i] === '{') {
        var start = i;
        for (var j = i; j < this.html.html.length; j++) {
            if (this.html.html[j] === '}') {
                var end = j;
                var value = this.html.html.slice(start + 1, end);
                // remove all the spaces from value
                value = value.replace(/\s/g, '');
                var link = document.querySelector(componentName)
                var target = link.getAttribute(value);
                // remove all of the character between {  } inclusive from this.html.html and add target to the place where it was
                this.html.html = this.html.html.replace(this.html.html.slice(start, end + 1), target);
                newHtml = this.html.html;
                el.innerHTML = newHtml;
            }
        }
    }
}

console.log(propFix(`<h1 title="{{ e }}">{{ hi }}</h1>`, "replaced prop!"));
```
