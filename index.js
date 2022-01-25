/* 
 * Legal:
 * Copyright (c) 2021, Lachlan Jowett, Lachlanjowett.com
 * Please do not replicate, modify, or distribute without the express permission of the author.
 */

function component(componentName, html) {
    // let newHtml;
    this.html = html;
    var el = document.querySelector(componentName);
    newHtml = el.outerHTML;
    el.innerHTML = this.html.html;
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
    var a = props(componentName, html).newHtml
    console.log(a);
    el.innerHTML = a;
    // Do this for js and css so you can change it with html
};

// Make this work with the component function
function props(componentName, html) {
    let newHtml;
    var el = document.querySelector(componentName);
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
    return newHtml
}