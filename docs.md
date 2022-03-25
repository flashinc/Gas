# Gas Docs

## Sample embed template code

Dev code:

```html
    ...
    <div id="component">
        <pageTitle title="hi"></pageTitle>
    </div>
    <script src="/gas.min.js"></script>
    <script>
        new component({
            sel: '#component',
            name: 'pageTitle',
//            props: [
//                'title'
//            ],
            html: `
                <h1>{{ title }}</h1>
            `
        })
    </script>
```

Rendered code

```html
    ...
    <div id="component">
        <pageTitle title="hi">
            <h1>hi</h1>
        </pageTitle>
    </div>
```

## Sample rendered code

```js
// app.js
import { pageTitle } from './components/pageTitle'

gas.init({
        <pageTitle title="hi">
})

```

```js
// gasConfig.js
gas.config({
    head: {
        title: 'Gas Docs - ', // title of the page the title of each page is added to the end of this
        style: './style.css', // style applied to all pages
        meta: [
            {
                name: 'description',
                content: 'Gas is a javascript framework for creating components'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ]
    },
    body: {
        scripts: './scripts.js' // scripts applied to all pages
    },
    props: 'react', // react or vue style props (defaults to react) - can be 'vue' or 'react' ==> react is { prop } and vue is {{ prop }}
})
```
