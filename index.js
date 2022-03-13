/* 
 * Legal:
 * Copyright (c) 2021, Lachlan Jowett, Lachlanjowett.com
 * Please do not replicate, modify, or distribute without the express permission of the author.
 */
var data = {}

function component(d) {
    this.data = d;
    console.log(this.data)
    data = {
        name: this.data.name,
        selector: this.data.sel,
        html: this.data.html,
        props: this.data.props,
        propValues: "",
        root: "",
        element: "",
    };
    data.root = document.querySelector(data.selector);
    data.element = data.root.getElementsByTagName(data.name);

    class element extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            let props = [];
            for (let i = 0; i < data.props.length; i++) {
                // need to change this to push to the array like this: e.g array: data.props[i]: "temp"
                let temp = this.getAttribute(data.props[i]);
                props.push(data.props[i] + ":" + temp + "\r\n");
            }
            data.propValues = props
            console.log(props)
        }
    }
    customElements.define(data.name, element);

    // getting the html and formatting it
    data.html = propFix(data.html);
    data.root.innerHTML = data.html;
    console.log(data.root.innerHTML);
}

function propValue(prop) {
    let split = ":";
    split.toString();
    let target = data.propValues.toString().split(":");
    // TEMP: need to remove \r\n from the string before returning
    // also need to fix the issue with it outputting the other prop name as the value
    console.log(target[1]);
    return target[1];
}

function propFix(code) {
    code.toString();
    // fix the issue with it picking up the last { in the previous prop and the first { in the next prop
    console.log(code.split("{{").length);
    for (let i = 0; i < code.split("{{").length; i++) {
        let a = code.split("{{");
        let left = a[0];
        let prop = a[1].split("}}")[0].replace(" ", "");
        let right = code.split("}}")[1];
        console.log("prop: " + prop);
        code = propValue(prop);
        var replacedProp = left + code + right;
        console.log("replaced prop: " + replacedProp);
        return replacedProp;
    }
}