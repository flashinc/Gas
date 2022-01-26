# Gas Docs

## Sample template code

Dev code:

```html
    ...
    <div id="component">
        <pageTitle title="hi"></pageTitle>
    </div>
    <script>
        new component({
            sel: '#component',
            name: 'pageTitle',
            props: [
                'title'
            ],
            code: `
                <h1>{ title }</h1>
            `
        })
    </script>
```

Rendered code

```html
    ...
    <div id="component">
        <h1>hi</h1>
    </div>
```
