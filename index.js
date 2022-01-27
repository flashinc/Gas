/* 
 * Legal:
 * Copyright (c) 2021, Lachlan Jowett, Lachlanjowett.com
 * Please do not replicate, modify, or distribute without the express permission of the author.
 */

// Global variables
let props = [];
let el;
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

    // A little bit of admin stuff
    props = propsArry;
    let root = document.querySelector(selector);
    el = root.getElementsByTagName(name);
    let elLength = el.length;
    console.log(elLength);
    //

    // getting the html and formatting it
    html.toString();
    console.log(html);
    //
}

function propFix(code, propValue) {
    let i;
    code.toString();
    for (i = 0; i < code.split("{{").length; i++) {
        var a = code.split("{{")[1];
        var left = code.split("{{")[0];
        var right = code.split("}}")[1];
        var prop = a.split("}}")[0].replace(" ", "");
        console.log(prop);
        let target = el.getAttribute(prop);
        console.log(target);
        var replacedProp = left + propValue + right;
        return replacedProp;
    }
}

// console.log(propFix(`<h1 title="{{ e }}">{{ hi }}</h1>`, "replaced prop!"));