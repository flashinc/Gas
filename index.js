class component {
    constructor(componentName) {
        this.componentName = componentName
    }
    render() {
        getElementById(this.componentName).innerHTML = this.html
    }
}

// let link = document.querySelector('#js');
//         if (link) {
//             let target = link.getAttribute('target');
//             console.log(target);
//         }