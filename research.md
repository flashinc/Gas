# Research

## get custom data from html attributes

```js
    // let link = document.querySelector('#js');
    //         if (link) {
    //             let target = link.getAttribute('target');
    //             console.log(target);
    //         }
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
