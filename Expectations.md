# Expectations of what it should be

## Component.js

```js
    export class button extends GasConstruct{
        // something like a dynamic() function or maybe a seperate function for css and js 
        dynamic(){
            css(){
                return css`
                    button{
                        color: black;
                        background-color: white;
                        border: none;
                    }
                `
            }
            js(){
                // for the 'log' variable we will need the user to declare it somewhere so we can fetch it from the html
                return js`
                    console.log('${log}')
                `
            }
        }
        render(){
            return html`
                <div>   
                    <button>Hi!</button>
                </div>
            `
        }
    }
```

## Input

``` js
    // file where the user declares where and when to put the components in the html
    // will look different in production
    class home extends GasRender{
        render html`
            
        `
    }
```

## Output

```html
    <div>
        <button log="It works!!">Hi!</button>
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
