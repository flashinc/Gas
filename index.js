// export { component, tag }

class component {
    render() {

    }

    // I want to be able to change the text of an element with a html attribute e.g: <div text="hello"></div>. so to do that i need to be able to store the value of the attribute, in this case "hello", in a variable.
    // this is used when you are making a component, and you want to change the text of one of the element, or maybe two. E.G:
    /*
    component('button') = `
        <button> ${tagValue} </button>
    `
    */

    // Output:
    /*
        <button> hello </button>
    */
    tag() {
        return (
            document.querySelector(tagName)
            //document.querySelector('[' + tagName + ']')

        )
    }
}