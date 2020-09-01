class pruButton extends HTMLElement {

    constructor(){
        super();

        this.innerHTML = `
            <a class="btn btn-primary" target="_blank">Click here</a>
        `

    }
}

customElements.define('pru-button', pruButton);

export { pruButton };