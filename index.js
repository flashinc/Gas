//class component {
//     constructor(componentName, html) {
//         this.componentName = componentName
//         this.html = html
//     }
//     render() {
//         getElementById(this.componentName).innerHTML = this.html
//     }
// }

function component(componentName, html) {
    let newHtml;
    let nHtml
    this.html = html;
    var el = document.getElementById(componentName);
    this.html.html.split('{  }')
    for (var i = 0; i < this.html.html.length; i++) {
        if (this.html.html[i] === '{') {
            var start = i;
            for (var j = i; j < this.html.html.length; j++) {
                if (this.html.html[j] === '}') {
                    var end = j;
                    var value = this.html.html.slice(start + 1, end);
                    console.log(value);
                    // remove all the spaces from value
                    value = value.replace(/\s/g, '');
                    var link = document.getElementById(componentName)
                    var target = link.getAttribute(value);
                    console.log(target);
                    nHtml = target;
                    newHtml = this.html.html.replace('{  }', nHtml);
                }
            }
        }
    }
    el.innerHTML = newHtml;
}

// let link = document.querySelector('#js');
//         if (link) {
//             let target = link.getAttribute('target');
//             console.log(target);
//         }