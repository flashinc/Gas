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
            //getProp();
            this.shadowRoot.innerHTML = html;
            let i;
            for (i = 0; i in props; i++){
                console.log(this.getAttribute(props[i]))
            }
        }
    });
    //

    // getting the html and formatting it
    html = propFix(html);
    el.innerHTML = html;
    console.log(el);
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