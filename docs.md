# Gas Docs

## Sample template code

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
