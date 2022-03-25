/* 
 * Legal:
 * Copyright (c) 2021, Lachlan Jowett, Lachlanjowett.com
 * Please do not replicate, modify, or distribute without the express permission of the author.
 */


function component(d) {
    var data = {}
    this.data = d;
    data = {
        name: this.data.name,
        selector: this.data.sel,
        html: this.data.html,
        props: this.data.props,
        propValues: "",
        root: "",
        element: "",
        elements: [],
    };
    data.root = document.querySelector(data.selector);

    class element extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            data.element = this.shadowRoot
            data.elements.push(this.shadowRoot)
            console.log(data.elements)
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

    function propValue(prop, i) {
        let split = ":";
        split.toString();
        for (let i = 0; i < data.propsValues; i++) {
            let target = data.propValues.toString().split(":");
            // TEMP: need to remove \r\n from the string before returning
            // also need to fix the issue with it outputting the other prop name as the value
            console.log(target[1]);
            //if (target[1] == prop) {
            return target[1];
            //}

        }

        function propFix(code, i) {
            code.toString();
            // fix the issue with it picking up the last { in the previous prop and the first { in the next prop
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

        customElements.define(data.name, element);

        let i;
        for (i = 0; i < data.elements.length; i++) {
            // Make it a for loop with i, then use the i to get the prop name and value for each instance of the element, also send i to the functions to allow them to easier identify the prop value
            data.html = propFix(data.html, i);
            data.element.innerHTML = data.html;
        }
    }