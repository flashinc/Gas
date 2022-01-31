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
    let propsArry = this.data.props;
    let html = this.data.html;
    //

    // Defining custom html elements
    customElements.define(name, class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = html;
        }
    });
    //

    // A little bit of admin stuff
    props = propsArry;
    root = document.querySelector(selector);
    el = root.getElementsByTagName(name);
    let elLength = el.length;
    //console.log(elLength);
    //

    // getting the html and formatting it
    html = propFix(html);
    el.innerHTML = html;
    console.log(el);
    //
}

function propValue(prop) {
    let target = root.getAttribute(prop);
    // if (target[0] != null) {
    //     target[0].toString();
    //     console.log('you done messed up');
    // }
    console.log(target);
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
        console.log(prop);
        code = propValue(prop);
        var replacedProp = left + code + right;
        console.log(replacedProp);
        return replacedProp;
    }
}

// console.log(propFix(`<h1 title="{{ e }}">{{ hi }}</h1>`, "replaced prop!"));