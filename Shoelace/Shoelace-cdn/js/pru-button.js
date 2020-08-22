class pruButton extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <style>

        </style>
        
        <a class="btn btn-primary" href="https://www.google.com" target="_blank">Click here</a>
        `
    }
  
}

customElements.define('pru-button', pruButton);