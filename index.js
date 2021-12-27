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
    var el = document.getElementById(componentName)
    el.innerHTML = html
}

// let link = document.querySelector('#js');
//         if (link) {
//             let target = link.getAttribute('target');
//             console.log(target);
//         }