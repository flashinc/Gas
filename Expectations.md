# Expectations of what it should be

## Component.js

```js
    component('clickable-button') = `
        <button onClick="${click}">
            I'm clickable!
        </button>
    `
```

## User side html

```html
    <div component="clickable-button" click="stopTime(20)">

    </div>
```

## Output

```html
    <div>
        <button onClick="stopTime(20)">I'm clickable!</button>
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

## Props

```js
    component('button') = `
        <button>
            ${text}
        </button>
    `
```

```html
    <div component="button" text="Click me!">

    </div>
```

Output:

```html
    <div component="button" text="Click me!">
        <button>Click me!</button>
    </div>
```

## This is not final and changes will be made
