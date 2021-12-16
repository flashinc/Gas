# Expectations of what it should be

## Component.js

```js
    component('clickable-button') = `
        <button onClick="${click}">
            ${text}
        </button>
    `
```

## User side html

```html
    <div component="clickable-button" text="Click me!" click="stopTime('20')">

    </div>
    <script src="framework.js"></script>
```

## Output

```html
    <div>
        <button onClick="stopTime('20')">Click me!</button>
    </div>
```

## Styling

Component.js

```js
    const style = 
    `
        [component="clickable-button"]{
            color: red;
            background-color: pink;
        }
    `
    ...
```

This will be added together and made into a css file

## This is not final and changes will be made
