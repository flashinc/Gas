/* 
 * Legal:
 * Copyright (c) 2021, Lachlan Jowett, Lachlanjowett.com
 * Please do not replicate, modify, or distribute without the express permission of the author.
 */


function component(data) {
    this.data = data
    this.html = this.data.html

    function getComponent(html) {
        // use regex to find all instances of {{}} and return the value of the variable as an array
        var regex = /{{(.*?)}}/g;
        var list = [];
        var matches = html.match(regex)
        // loop through the array and replace the {{}} with the value of the variable
        for (var i = 0; i < matches.length; i++) {
            var variable = matches[i].replace(/{{|}}/g, "")
            // remove the space from the variable name
            variable = variable.replace(/\s/g, '')
            list = list.concat(variable)
        }
        return list
    }

    function createCustomElement(html, data) {
        let element;
        // create a new element using custom web components
        element = document.createElement(data.tag)
        // set the attributes of the element
        for (var i = 0; i < data.attributes.length; i++) {
            element.setAttribute(data.attributes[i].name, data.attributes[i].value)
        }
        // set the innerHTML of the element
        element.innerHTML = html
        return element
    }


    function getVariable(variable) {
        // get the value of the variable
        var value = window[variable]
        return value
    }

    for (i = 0; i < getComponent(this.html).length; i++) {
        // replace the {{}} with the value of the variable
        var variable = getComponent(this.html)[i]
        var value = getVariable(variable)
        this.html = this.html.replace("{{" + variable + "}}", value)
    }

    

    console.log(getComponent(this.html))

}