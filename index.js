// Get elements from a js file


function gas() {
    let prop = 'react';

    function config(data) {
        this.config = data;
        let head = this.config.head;
        let body = this.config.body;
        let props = this.config.props;

        if (props === 'react') {
            prop = 'react';
        } else if (props === 'vue') {
            prop = 'vue';
        }
    }
}

gas.config({
    head: "",
    body: "",
    props: "react"
});