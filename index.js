/*
 * Copyright (c) 2021, Lachlan Jowett, Lachlanjowett.com
 * Please dont replicate, modify, or distribute without the express permission of the author.
 */

function component(componentName, html) {
    let newHtml;
    this.html = html;
    var el = document.getElementById(componentName)
    el.innerHTML = this.html.html;
    this.html.html.split('{  }')
    for (var i = 0; i < this.html.html.length; i++) {
        if (this.html.html[i] === '{') {
            var start = i;
            for (var j = i; j < this.html.html.length; j++) {
                if (this.html.html[j] === '}') {
                    var end = j;
                    var value = this.html.html.slice(start + 1, end);
                    // remove all the spaces from value
                    value = value.replace(/\s/g, '');
                    var link = document.getElementById(componentName)
                    var target = link.getAttribute(value);
                    // remove all of the character between {  } inclusive from this.html.html and add target to the place where it was
                    this.html.html = this.html.html.replace(this.html.html.slice(start, end + 1), target);
                    newHtml = this.html.html;
                    el.innerHTML = newHtml;
                    // console.log(newHtml);
                    // console.log(value);
                }
            }
        }
    }
    // Do this for js and css so you can change it with html
};

/* TODO: 
 * Add a function for prop fixing
 * Add functions to everything to make it easier to understand
 * and make the code lighter weight
 * add custom component html e.g: <component\>
 * add functionalities for html e.g: <component g-for="i in i"\>
 */

/* Fixes:
 * make it a class for better control
 * root.textContent = ` ${div}{ background-color: #eef; padding: 0 2px }`;
 */