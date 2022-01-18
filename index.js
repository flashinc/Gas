/* 
 * Legal:
 * Copyright (c) 2021, Lachlan Jowett, Lachlanjowett.com
 * Please do not replicate, modify, or distribute without the express permission of the author.
 */

function component(componentName, html) {
    let newHtml;
    this.html = html;
    var el = document.querySelector(componentName);
    // check if el is selecting multiple components
    if (el.length > 1) {
        // loop through each component
        for (var i = 0; i < el.length; i++) {
            print('true');
        }
    }
    newHtml = el.outerHTML;
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
                    var link = document.querySelector(componentName)
                    var target = link.getAttribute(value);
                    // remove all of the character between {  } inclusive from this.html.html and add target to the place where it was
                    this.html.html = this.html.html.replace(this.html.html.slice(start, end + 1), target);
                    newHtml = this.html.html;
                    el.innerHTML = newHtml;
                }
            }
        }
    }
    // Do this for js and css so you can change it with html
};

// Make this work with the component function
function props(html) {
    this.html = html;
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
                    var link = document.querySelector(componentName)
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
}