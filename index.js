/* 
 * Legal:
 * Copyright (c) 2021, Lachlan Jowett, Lachlanjowett.com
 * Please do not replicate, modify, or distribute without the express permission of the author.
 */

// Global variables
let props = [];
let el;
let root;
//

function component(data) {
    // Formatting json string to json array
    this.data = data;
    //

    // Formatting the user input
    let name = this.data.name;
    let selector = this.data.sel;
    //  let props = this.data.props;
    let html = this.data.html;
    //

    // A little bit of admin stuff
    root = document.querySelector(selector);
    el = root.getElementsByTagName(name);
    //

    // Defining custom html elements
    var a = customElements.define(name, class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = html;
        }
    });
    //

    // getting the html and formatting it
    html = propFix(html);
    el.innerHTML = html;
    el.innerText = "a";
    console.log(el);
    console.log(a)
    //
}

function propValue(prop) {
    let target;
    if (root) {
        let el = root.children;
        // get the attribute from the element
        target = el[0].getAttribute(prop);
        console.log("target: " + target);
    }
    return target;
}

function propFix(code) {
    let i;
    code.toString();
    for (i = 0; i < code.split("{{").length; i++) {
        var a = code.split("{{");
        let left = a[0];
        var prop = a[1].split("}}")[0].replace(" ", "");
        var right = code.split("}}")[1];
        console.log("prop: " + prop);
        code = propValue(prop);
        var replacedProp = left + code + right;
        console.log("replaced prop: " + replacedProp);
        return replacedProp;
    }
}

// this.html.html.split('{  }')
// for (var i = 0; i < this.html.html.length; i++) {
//     if (this.html.html[i] === '{') {
//         var start = i;
//         for (var j = i; j < this.html.html.length; j++) {
//             if (this.html.html[j] === '}') {
//                 var end = j;
//                 var value = this.html.html.slice(start + 1, end);
//                 // remove all the spaces from value
//                 value = value.replace(/\s/g, '');
//                 var link = document.querySelector(componentName)
//                 var target = link.getAttribute(value);
//                 // remove all of the character between {  } inclusive from this.html.html and add target to the place where it was
//                 this.html.html = this.html.html.replace(this.html.html.slice(start, end + 1), target);
//                 newHtml = this.html.html;
//                 el.innerHTML = newHtml;
//             }
//         }
//     }
// }

// console.log(propFix(`<h1 title="{{ e }}">{{ hi }}</h1>`, "replaced prop!"));