# Expectations of what it should be

- have two different versions... one for light weight and fast and the other for more complex and larger sites

## Build in functions

- props and prop functions

```html
    <!-- This logs "Hello world" -->
    <div log="Hello world"></div>

    <!-- This div has the text "Hello world" -->
    <div text="Hello world"></div>

    <!-- This allows you to use gas specific function for when you arent using a CDN, This logs "Hello world" -->
    <div g-click="conole.log(gas.return('Hello world'))"></div>
```

## Just html

```html
    ...
    <div id="button"></div>
    ...
    <script src="[Link to the cdn]"></script>
    <script>
        component('button'){
            render(){
                return html`
                    <button>
                        ${Text}
                    </button>
                `
            }
            // need to declare the prop so the framework can create the variable and obtain the value from the html
            props(){
                // Thi will change 100%
                return props{
                    props : 'Text'
                }
            }
        };
    </script>
```

## With component files

## Component.js

```js
    export class button{
        render(){
            return html`
                <div>   
                    <button>Hi!</button>
                </div>
            `
        }
    }
```


## This point onwards is obosolete and wont be used, it is still good inspiration
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
